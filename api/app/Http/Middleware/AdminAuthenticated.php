<?php

namespace App\Http\Middleware;

use App\Http\Controllers\TokenController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;

use App\Models\Admin;

use Closure;
use Carbon\Carbon;
use DateTimeImmutable;

class AdminAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // Cookie exists
        $token = $request->cookie('token');
        if (!$token || !TokenController::verifyToken($token)) {
            return $this->unauthorizedCookie('Invalid session.');
        };

        // Cookie is from server and is valid for client
        $claims = TokenController::parseToken($token);
        if ($claims['iss'] !== config('app.url') || $claims['aud'][0] !== config('app.client_url')) {
            return $this->unauthorizedCookie('Invalid session.');
        }

        $admin = Admin::where('email', $claims['email'])->first();

        if (!isset($admin)) {
            return $this->unauthorizedCookie('Invalid session.');
        }

        // Cookie hasn't expired
        $now = Carbon::parse(new DateTimeImmutable());
        $expAt = Carbon::parse($claims['exp']);
        if ($expAt->isBefore($now) && !$claims['remember_me']) {
            return $this->unauthorizedCookie('Session expired.');
        }

        $response = $next($request);

        if (isset($response->original["no-cookie"])) {
            return $response;
        }

        // Update token
        if (!$claims['remember_me']) {
            $token = TokenController::generateToken($admin, false, 'admin');
            return $response->cookie('token', $token->toString(), null, null, null, null, false);
        }
        return $response->cookie('token', $token, null, null, null, null, false);
    }

    /**
     * Undocumented function
     *
     * @param string $message
     * @return \Illuminate\Http\JsonResponse
     */
    private function unauthorizedCookie(string $message)
    {
        Cookie::queue(Cookie::forget('token'));
        $cookie = Cookie::make('token', '');
        return response()->json([
            'message' => $message,
            'status' => 401
        ], 401)->withCookie($cookie);
    }
}
