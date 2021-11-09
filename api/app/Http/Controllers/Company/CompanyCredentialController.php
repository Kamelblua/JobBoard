<?php

namespace App\Http\Controllers\Company;

use App\Http\Controllers\Controller;
use App\Models\CompanyCredential;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class CompanyCredentialController extends Controller
{
    /**
     * Display a listing of the companies credential.
     *
     * api/companies/credential methode => get
     *
     */
    public function index(): JsonResponse
    {
        $companiesCredential = CompanyCredential::with(['company'])->get();
        return response()->json([
            'companies credential' => $companiesCredential,
        ], 201);
    }

    /**
     * Display company credential by id.
     *
     * api/company/credential/{id} methode => get
     *
     */
    public function get(int $id): JsonResponse
    {
        $companiesCredential = CompanyCredential::with(['company'])->find($id);

        if (!$companiesCredential) {
            return response()->json([
                'message' => 'The company credential has not been found.',
            ], 404);
        }

        return response()->json([
            'companies credential' => $companiesCredential,
        ], 201);
    }

    /**
     * Create companies credential.
     *
     * api/companies/credential methode => post
     *
     */
    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'email' => ['email', 'required', 'min:3', 'string', 'unique:company_credentials,email'],
            'password' => [
                'required',
                'regex:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/',
                'confirmed'
            ],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ], 400);
        }

        $companiesCredential = new CompanyCredential();

        $companiesCredential->email = strtolower(request('email'));
        $companiesCredential->password = Hash::make(request('password'));

        if ($companiesCredential->save()) {
            return response()->json([
                'message' => 'The company was successfully created!',
            ], 201);
        }

        return response()->json([
            'message' => '500: An error occurred, please try again.'
        ], 500);
    }

    /**
     * Update candidate credential.
     *
     * api/company/credential/{id} methode => post
     *
     */
    public function update(Request $request, int $id): JsonResponse
    {
        $companyCredential = CompanyCredential::find($id);

        if (!$companyCredential) {
            return response()->json([
                'message' => 'The company credential has not been found.',
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'email' => ['email', 'min:3', 'string', 'unique:company_credentials,email'],
            'password' => [
                'regex:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/',
                'confirmed'
            ],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ], 400);
        }

        $errors = [];

        $companyCredentialEmailExists = CompanyCredential::where('email', request('email'))->first();

        if (!isset($companyCredentialEmailExists)) {
            $companyCredential->email = request('email') ?? $companyCredential->email;
        } else if ($companyCredentialEmailExists->id !== $companyCredential->id) {
            $errors["email"] = "The email has already been taken.";
        }

        if (!empty($errors)) {
            return response()->json([
                'errors' => $errors
            ], 400);
        }

        $companyCredential->password = Hash::make(request('password')) ?? $companyCredential->password;

        if ($companyCredential->save()) {
            return response()->json([
                'message' => 'The candidate successfully updated!',
                'company credential' => $companyCredential
            ], 201);
        }

        return response()->json([
            'message' => '500: An error occurred, please try again.'
        ], 500);
    }

    /**
     * Delete a candidate by id.
     *
     * api/candidate/{id} methode => delete
     *
     */
    public function delete(int $id): JsonResponse
    {
        $companyCredential = CompanyCredential::find($id);

        if (!$companyCredential) {
            return response()->json([
                'message' => 'The company credential has not been found.',
            ], 404);
        }

        $companyCredential->delete();

        return response()->json([
            'message' => 'The company credential has successfully removed himself!',
            'company credential' => $companyCredential
        ], 201);
    }
}