<?php

namespace App\Http\Middleware;

use App\Http\Controllers\TokenController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;

use Closure;
use Carbon\Carbon;
use DateTimeImmutable;

use App\Models\Candidate;

class CandidateAuthenticated
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
        // BEFORE HANDLING REQUEST

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

        $candidate = Candidate::find($claims['uid']);

        if (!isset($candidate)) {
            return $this->unauthorizedCookie('Invalid session.');
        }

        $now = Carbon::parse(new DateTimeImmutable());
        $expAt = Carbon::parse($claims['exp']);
        if ($expAt->isBefore($now) && !$claims['remember_me']) {
            return $this->unauthorizedCookie('Session expired.');
        }

        // HANDLE REQUEST
        $response = $next($request);

        // AFTER REQUEST HAS BEEN HANDLED

        if (isset($response->original["no-cookie"])) {
            return $response;
        }

        $candidate = Candidate::find($claims['uid']);

        if (!$claims['remember_me']) {
            $token = TokenController::generateToken($candidate, false, 'candidate');
            return $response->cookie('token', $token->toString(), null, null, null, null, false);
        }
        $token = TokenController::generateToken($candidate, true, 'candidate');
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