<?php

namespace App\Http\Controllers\Company;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

use App\Models\Company;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Validation\Rule;

use App\Http\Controllers\TokenController;
use App\Models\CompanyCredential;
use App\Models\CompanyIndustry;
use App\Models\CompanyType;

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
            'email' => ['required', 'email', 'unique:company_credentials,email'],
            'password' => [
                'required',
                'regex:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/',
                'confirmed'
            ],
            'password_confirmation' => ['required'],
            'name' => ['required', 'min:3', 'max:35', 'string', 'unique:companies,name'],
            'employees_range' => ['required', Rule::in(['1-10', '11-100', '101-1000', '1000+'])],
            'industry' => ['required', 'integer', 'exists:company_industries,id'],
            'type' => ['required', 'integer', 'exists:company_types,id'],
            'city' => ['required', 'string'],
            'country' => ['required', 'string'],
            'address' => ['required', 'string'],
            'postal_code' => ['required', 'string'],
            'contact_email' => ['nullable', 'email', 'unique:companies,contact_email'],
            'contact_phone' => [
                'required', 'string',
                'regex:/^[0]{1}(\d){9}$/',
                'unique:companies,contact_phone'
            ],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ], 400);
        }

        $errors = [];

        $companyIndustry = CompanyIndustry::find(request('industry'));
        $companyType = CompanyType::find(request('type'));

        if (is_null($companyIndustry->parent_id)) {
            $errors['industry'] = "This type of industry cannot be assigned.";
        }

        if (!empty($errors)) {
            return response()->json([
                'errors' => [$errors]
            ], 400);
        }

        try {
            $companyCredentials = CompanyCredential::create([
                "email" => request('email'),
                "password" => Hash::make(request('password'))
            ]);

            Company::create([
                "name" => trim(request('name')),
                "employees_range" => request('employees_range'),
                "industry_id" => $companyIndustry->id,
                "type_id" => $companyType->id,
                "credentials_id" => $companyCredentials->id,
                "city" => request('city'),
                "country" => request('country'),
                "address" => request('address'),
                "postal_code" => request('postal_code'),
                "contact_phone" => request('contact_phone'),
                "contact_email" => request('contact_email') ?? request('contact_email'),
            ]);
        } catch (\Exception $e) {
            $companyCredentials->delete();

            return response()->json([
                'message' => '500: An error occurred, please try again.',
                'error' => $e->getMessage()
            ], 500);
        }

        return response()->json([
            'message' => 'Registration successfully completed!!',
        ], 201);
    }

    /**
     * Login the user. Returns a JWT token for authorized requests
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $validatorFirst = Validator::make($request->all(), [
            'email' => ['required', 'email', 'exists:company_credentials,email'],
            'password' => 'required'
        ], [
            'email.exists' => 'Wrong authentication pair.'
        ]);

        if ($validatorFirst->fails()) {
            return response()->json([
                'errors' => $validatorFirst->errors()
            ], 400);
        }

        $companyCredentials = CompanyCredential::where('email', request('email'))->first();

        if (Hash::check(request('password'), $companyCredentials->password)) {
            $company = Company::where('credentials_id', $companyCredentials->id)->first();
            $company->email = $companyCredentials->email;
            $token = TokenController::generateToken($company, request('remember_me'), 'company');

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