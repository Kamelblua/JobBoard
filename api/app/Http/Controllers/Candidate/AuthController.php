<?php

namespace App\Http\Controllers\Candidate;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

use App\Models\Candidate;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Cookie;

use App\Http\Controllers\TokenController;

class AuthController extends Controller
{
    /**
     * Registers and login the user. Returns a JWT token for authorized requests
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => ['required', 'email', 'unique:candidates,email'],
            'password' => [
                'required',
                'regex:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/',
                'confirmed'
            ],
            'password_confirmation' => ['required'],
            'education_name' => ['required', 'string'],
            'graduation_year' => ['required', 'integer']
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ], 400);
        }

        $candidate = new Candidate();

        $candidate->email = strtolower(request('email'));
        $candidate->password = Hash::make(request('password'));
        $candidate->education_name = request('education_name');
        $candidate->graduation_year = request('graduation_year');

        if ($candidate->save()) {
            return response()->json([
                'message' => 'Registration successfully completed!!',
            ], 201);
        }

        return response()->json([
            'message' => '500: Server error, please try again later.'
        ], 500);
    }

    /**
     * Login the user. Returns a JWT token for authorized requests
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => ['required', 'email', 'exists:candidates,email'],
            'password' => 'required'
        ], [
            'email.exists' => 'Wrong authentication pair.'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ], 400);
        }

        $candidate = Candidate::where('email', request('email'))->first();

        if (Hash::check(request('password'), $candidate->password)) {
            $token = TokenController::generateToken($candidate, request('remember_me'), 'candidate');

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