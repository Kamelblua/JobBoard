<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;

use App\Models\Admin;
use App\Models\Advertisement;
use App\Models\Candidate;
use App\Models\Company;
use App\Models\JobApplication;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;

class AdminController extends Controller
{
    public function index()
    {
        return response()->json([
            "candidate_count" => Candidate::all()->count(),
            "company_count" => Company::all()->count(),
            "advertisement_count" => Advertisement::all()->count(),
            "application_count" => JobApplication::all()->count(),
        ]);
    }

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

        $admins = Admin::where('email', 'LIKE', "%" . $term . "%");

        return response()->json([
            'total' => $admins->count(),
            'count' => $admins->skip($limit * ($page - 1))->take($limit)->get()->count(),
            'items' => $admins->skip($limit * ($page - 1))->take($limit)->get()
        ]);
    }
}