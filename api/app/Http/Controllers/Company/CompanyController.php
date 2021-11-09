<?php

namespace App\Http\Controllers\Company;

use App\Http\Controllers\Controller;
use App\Http\Controllers\TokenController;
use App\Models\Advertisement;
use App\Models\Company;
use App\Models\CompanyCredential;
use App\Models\CompanyIndustry;
use App\Models\CompanyType;
use App\Models\JobApplication;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class CompanyController extends Controller
{
    /**
     * Display a listing of the companies.
     *
     * api/companies methode => get
     *
     */
    public function index(): JsonResponse
    {
        $companies = Company::with(['industry', 'type', 'advertisement', 'credentials'])->get();
        return response()->json([
            'companies' => $companies,
        ], 201);
    }

    /**
     * Display company by id.
     *
     * api/company/{id} methode => get
     *
     */
    public function get(int $id): JsonResponse
    {
        $company = Company::with(['industry', 'type', 'advertisements.languages', 'advertisements.positions', 'advertisements.company'])->find($id);

        if (!$company) {
            return response()->json([
                'message' => 'The company has not been found.',
            ], 404);
        }

        return response()->json($company, 201);
    }

    public function profile(Request $request)
    {
        $company = TokenController::getCurrentCompany($request);

        return response()->json($company);
    }

    public function applications(Request $request)
    {
        $page = request('page') ? 1 : (request('page') < 0 ? 1 : request('page'));
        $limit = 20;

        $company = TokenController::getCurrentCompany($request);
        $jobApplications = JobApplication::where('company_id', $company->id)->with(['advertisement']);

        return response()->json([
            'total' => $jobApplications->count(),
            'count' => $jobApplications->skip($limit * ($page - 1))->take($limit)->get()->count(),
            'items' => $jobApplications->skip($limit * ($page - 1))->take($limit)->get()
        ]);
    }

    /**
     * Create companies.
     *
     * api/companies methode => post
     *
     */
    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'email' => ['required', 'string', 'email', 'unique:company_credentials,email'],
            'password' => ['required', 'string', 'confirmed'],
            'password_confirmation' => ['required', 'string'],
            'name' => ['required', 'min:3', 'string', 'unique:companies,name'],
            'employees_range' => ['required', Rule::in(['1-10', '11-100', '101-1000', '1000+'])],
            'industry' => ['required', 'string', 'exists:company_industries,name'],
            'type' => ['required', 'string', 'exists:company_types,name'],
            'city' => ['required', 'string'],
            'country' => ['required', 'string'],
            'address' => ['required', 'string'],
            'postal_code' => ['required', 'string'],
            'contact_phone' => ['required', 'string', 'unique:companies,contact_phone'],
            'contact_email' => ['required', 'string', 'email', 'unique:company_credentials,email'],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ], 400);
        }

        $credentials = new CompanyCredential();

        $credentials->email = request('email');
        $credentials->password = Hash::make(request('password'));
        $credentials->save();

        $company = new Company();

        $company->credentials_id = $credentials->id;
        $company->name = trim(request('name'));
        $company->employees_range = request('employees_range');
        $company->city = trim(request('city'));
        $company->country = trim(request('country'));
        $company->address = trim(request('address'));
        $company->postal_code = trim(request('postal_code'));
        $company->contact_phone = trim(request('contact_phone'));
        $company->contact_email = request('contact_email') ?? request('email');

        $companyType = CompanyType::where('name', request('type'))->first();
        $company->type_id = $companyType->id;

        $industry = CompanyIndustry::where('name', request('industry'))->first();
        $company->industry_id = $industry->id;

        if ($company->save()) {
            return response()->json([
                'message' => 'The company was successfully created!',
            ], 201);
        }

        return response()->json([
            'message' => '500: An error occurred, please try again.'
        ], 500);
    }

    /**
     * Update company.
     *
     * api/company/{id} methode => post
     *
     */
    public function update(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name' => ['min:3', 'string'],
            'employees_range' => [Rule::in(['1-10', '11-100', '101-1000', '1000+'])],
            'industry' => ['string', 'exists:company_industries,id'],
            'type' => ['string', 'exists:company_types,id'],
            'logo' => ['file'],
            'city' => ['string'],
            'country' => ['string'],
            'address' => ['string'],
            'postal_code' => ['string'],
            'contact_phone' => ['string'],
            'contact_email' => ['email'],
            'website_link' => ['nullable', 'string', 'url'],
            'youtube_link' => ['nullable', 'string', 'url'],
            'twitter_link' => ['nullable', 'string', 'url'],
            'facebook_link' => ['nullable', 'string', 'url'],
            'linkedin_link' => ['nullable', 'string', 'url']
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ], 400);
        }

        if ($request->hasFile('logo')) {
            $file_extension = $request->file('logo')->getClientOriginalExtension();
            if (!in_array($file_extension, ['jpeg', 'jpg', 'png'])) {
                return response()->json([
                    'errors' => [
                        'logo' => 'The file extension is not accepted. (' . $file_extension . ')'
                    ]
                ], 400);
            }
        }

        $errors = [];

        $company = TokenController::getCurrentCompany($request);

        if (!$company) {
            return response()->json([
                'message' => 'The company has not been found.',
            ], 404);
        }

        $companyExists = Company::where('name', request('name'))->first();
        $contactPhoneExists = Company::where('contact_phone', request('contact_phone'))->first();
        $contactEmailExists = Company::where('contact_email', request('contact_email'))->first();

        if (!isset($companyExists)) {
            $company->name = request('name') ?? $company->name;
        } else if ($companyExists->id !== $company->id) {
            $errors["name"] = "The name has already been taken.";
        }

        if (!isset($contactPhoneExists)) {
            $company->contact_phone = request('contact_phone') ?? $company->contact_phone;
        } else if ($contactPhoneExists->id !== $company->id) {
            $errors["contact_phone"] = "The contact phone has already been taken.";
        }

        if (!isset($contactEmailExists)) {
            $company->contact_email = request('contact_email') ?? $company->contact_email;
        } else if ($contactEmailExists->id !== $company->id) {
            $errors["contact_email"] = "The contact email has already been taken.";
        }

        if (!empty($errors)) {
            return response()->json([
                'errors' => $errors
            ], 400);
        }

        $company->employees_range = request('employees_range') ?? $company->employees_range;

        $companyType = CompanyType::find(request('type'));
        $company->type_id = $companyType->id ?? $company->type_id;

        $industry = CompanyIndustry::find(request('industry'));
        $company->industry_id = $industry->id ?? $company->industry_id;

        $company->city = request('city') ?? $company->city;
        $company->country = request('country') ?? $company->country;
        $company->address = request('address') ?? $company->address;
        $company->postal_code = request('postal_code') ?? $company->postal_code;
        $company->website_link = request('website_link');
        $company->youtube_link = request('youtube_link');
        $company->twitter_link = request('twitter_link');
        $company->facebook_link = request('facebook_link');
        $company->linkedin_link = request('linkedin_link');

        if ($company->save()) {
            if ($request->hasFile('logo')) {
                $file_extension = $request->file('logo')->getClientOriginalExtension();
                $filename = 'company.' . $file_extension;

                $base_path = public_path('/storage/companies/');

                $candidate_path = $base_path . $company->id;

                if (!File::isDirectory($candidate_path)) {
                    File::makeDirectory($candidate_path, 0777, true, true);
                }

                if ($company->logo_file_id) {
                    $companyLogo = \App\Models\File::find($company->logo_file_id);
                    if ($companyLogo->id !== 1) {
                        $companyLogo->delete();
                    }
                }

                $request->file('logo')->storeAs($company->id . '/logo', 'company.' . $file_extension, 'companies');

                $file = new \App\Models\File();
                $file->location = config('app.url') . config('app.port') . '/api/companies/' . $company->id . '/logo/' . $filename;
                $file->name = $filename;
                $file->save();

                $company->logo_file_id = $file->id;
                $company->save();
            }

            return response()->json([
                'message' => 'The company was successfully updated!',
                'company' => $company
            ], 201);
        }

        return response()->json([
            'message' => '500: An error occurred, please try again.'
        ], 500);
    }

    /**
     * Update logo company.
     *
     * api/company/{id}/logo methode => post
     *
     */
    public function updateLogo(Request $request, int $id)
    {
        $company = Company::find($id);

        $validator = Validator::make($request->all(), [
            'file' => ['file'],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ], 400);
        }

        if ($company && $request->hasFile('file')) {
            $file_extension = $request->file('file')->getClientOriginalExtension();
            if (!in_array($file_extension, ['jpeg', 'jpg', 'png'])) {
                return response()->json([
                    'errors' => [
                        'file' => 'The file extension is not accepted. (' . $file_extension . ')'
                    ]
                ], 400);
            }

            $companyLogo = \App\Models\File::find($company->logo_file_id);

            if ($companyLogo && File::exists(public_path('/storage/companies/' . $id . '/logo/' . $companyLogo->name))) {
                File::deleteDirectory(public_path('/storage/companies/' . $id));
                $companyLogo->delete();
            }

            $file_extension = $request->file('file')->getClientOriginalExtension();
            $filename = 'company.' . $file_extension;

            $base_path = public_path('/storage/companies/');

            $candidate_path = $base_path . $company->id;

            if (!File::isDirectory($candidate_path)) {
                File::makeDirectory($candidate_path, 0777, true, true);
            }

            $request->file('file')->storeAs($company->id . '/logo', 'company.' . $file_extension, 'companies');

            $file = new \App\Models\File();
            $file->location = config('app.url') . config('app.port') . 'api/companies/' . $company->id . '/logo/' . $filename;
            $file->name = $filename;
            $file->save();

            $companyLogo = Company::find($company->id);
            $companyLogo->logo_file_id = $file->id;
            $companyLogo->save();

            return response()->json([
                'message' => 'The logo has been successfully modified!'
            ], 201);
        }

        return response()->json([
            'message' => '500: Server error. Unable to update the resource.'
        ], 500);
    }

    /**
     * Delete a company by id.
     *
     * api/company/{id} methode => delete
     *
     */
    public function delete(int $id): JsonResponse
    {
        $company = Company::find($id);

        if (!$company) {
            return response()->json([
                'message' => 'The company has not been found.',
            ], 404);
        }

        $companyLogo = \App\Models\File::find($company->logo_file_id);

        if ($companyLogo && File::exists(public_path('/storage/companies/' . $id . '/logo/' . $companyLogo->name))) {
            File::deleteDirectory(public_path('/storage/companies/' . $id));
            $companyLogo->delete();
        }

        if ($company->delete()) {
            return response()->json([
                'message' => 'The company has successfully removed himself!',
                'company' => $company
            ], 201);
        }
        return response()->json([
            'message' => '500: An error occurred, please try again.'
        ], 500);
    }
}