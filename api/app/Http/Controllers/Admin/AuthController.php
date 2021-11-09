<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

use App\Models\Admin;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Cookie;

use App\Http\Controllers\TokenController;

class AuthController extends Controller
{
    /**
     * Login the user. Returns a JWT token for authorized requests
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $validatorFirst = Validator::make($request->all(), [
            'email' => ['required', 'email', 'exists:admins,email'],
            'password' => 'required'
        ], [
            'email.exists' => 'Wrong authentication pair.'
        ]);

        if ($validatorFirst->fails()) {
            return response()->json([
                'errors' => $validatorFirst->errors()
            ], 400);
        }

        $admin = Admin::where('email', request('email'))->first();

        if (Hash::check(request('password'), $admin->password)) {
            $token = TokenController::generateToken($admin, request('remember_me'), 'admin');

            return response()->json([
                'message' => 'Logged in successfully!',
            ], 201)->cookie('token', $token->toString(), null, null, null, null, false);
        }

        return response()->json([
            'errors' => ['email' => "Wrong authentication pair."]
        ], 400);
    }

    /**
     * Login the user. Returns a JWT token for authorized requests
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout(Request $request)
    {
        Cookie::queue(Cookie::forget('token'));
        $cookie = Cookie::make('token', '');
        return response()->json([
            'message' => "Logged out.",
            'no-cookie' => true,
            'status' => 201
        ], 201)->withCookie($cookie);
    }
}