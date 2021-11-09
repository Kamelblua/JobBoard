<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Advertisement;
use App\Models\Candidate;
use App\Models\Company;
use App\Models\CompanyCredential;
use App\Models\File;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CompanyController extends Controller
{
    public function search(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'limit' => ['nullable', 'integer', 'min:5', 'max:150'],
            'page' => ['nullable', 'integer', 'min:1'],
            'search' => ['nullable', 'string'],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ]);
        }

        $limit = request('limit') ?? 20;
        $page = request('page') ?? 1;
        $term = request('search') ?? "";

        $companies = Company::where('name', 'LIKE', "%" . $term . "%");

        return response()->json([
            'total' => $companies->count(),
            'count' => $companies->skip($limit * ($page - 1))->take($limit)->get()->count(),
            'items' => $companies->skip($limit * ($page - 1))->take($limit)->get()
        ]);
    }

    public function delete(int $id): JsonResponse
    {
        $company = Company::find($id);

        if (!$company) {
            return response()->json([
                'message' => 'The company has not been found.',
            ], 404);
        }

        Advertisement::where('company_id', $company->id)->delete();
        CompanyCredential::find($company->credentials_id)->delete();
        File::find($company->logo_file_id)->delete();

        $company->delete();

        return response()->json([
            'message' => 'The company was successfully removed.',
            'company' => $company
        ], 201);
    }
}