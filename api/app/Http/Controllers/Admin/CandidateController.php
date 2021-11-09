<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Candidate;
use App\Models\JobApplication;
use App\Models\File;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class CandidateController extends Controller
{
    /**
     * Display a listing of the candidate.
     *
     * api/candidates methode => get
     *
     */
    public function index(): JsonResponse
    {
        $candidates = Candidate::with('jobApplications')->get();
        return response()->json([
            'candidates' => $candidates,
        ], 201);
    }

    /**
     * Display a candidate by id.
     *
     * api/candidate/{id} methode => get
     *
     */
    public function get(int $id): JsonResponse
    {
        $candidate = Candidate::with('jobApplications')->find($id);

        if (!$candidate) {
            return response()->json([
                'message' => 'The candidate has not been found.',
            ], 404);
        };

        return response()->json([
            'candidate' => $candidate,
        ], 201);
    }

    /**
     * Create candidate.
     *
     * api/candidate methode => post
     *
     */
    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|unique:candidates,email',
            'education_name' => 'required|min:3|max:255',
            'graduation_year' => 'required|integer',
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

        $candidate = new Candidate();

        $candidate->email = strtolower(request('email'));
        $candidate->education_name = request('education_name');
        $candidate->graduation_year = request('graduation_year');
        $candidate->password = Hash::make(request('password'));

        if ($candidate->save()) {
            return response()->json([
                'message' => 'Registration successfully completed!',
            ], 201);
        }

        return response()->json([
            'message' => '500: An error occurred, please try again.'
        ], 500);
    }

    /**
     * Update candidate.
     *
     * api/candidate/{id} methode => post
     *
     */
    public function update(Request $request, int $id): JsonResponse
    {
        $candidate = Candidate::find($id);

        if (!$candidate) {
            return response()->json([
                'message' => 'The candidate has not been found.',
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'email' => ['email'],
            'education_name' => ['min:3', 'max:255'],
            'graduation_year' => ['integer'],
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

        $contactEmailExists = Candidate::where('email', request('email'))->first();

        if (!isset($companyExists)) {
            $candidate->email = request('email') ?? $candidate->email;
        } else if ($contactEmailExists->id !== $candidate->id) {
            $errors["email"] = "The email has already been taken.";
        }

        if (!empty($errors)) {
            return response()->json([
                'errors' => $errors
            ], 400);
        }

        $candidate->education_name = request('education_name') ?? $candidate->education_name;
        $candidate->graduation_year = request('graduation_year') ?? $candidate->graduation_year;
        $candidate->password = Hash::make(request('password')) ?? $candidate->password;

        if ($candidate->save()) {
            return response()->json([
                'message' => 'The candidate successfully updated!',
                'candidate' => $candidate
            ], 201);
        }

        return response()->json([
            'message' => '500: An error occurred, please try again.'
        ], 500);
    }

    public function search(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'limit' => ['nullable', 'integer', 'min:5', 'max:100'],
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

        $candidates = Candidate::where('email', 'LIKE', "%" . $term . "%");

        return response()->json([
            'total' => $candidates->count(),
            'count' => $candidates->skip($limit * ($page - 1))->take($limit)->get()->count(),
            'items' => $candidates->skip($limit * ($page - 1))->take($limit)->get()
        ]);
    }

    /**
     * Delete a candidate by id.
     *
     * api/candidate/{id} methode => delete
     *
     */
    public function delete(int $id): JsonResponse
    {
        $candidate = Candidate::find($id);

        if (!$candidate) {
            return response()->json([
                'message' => 'The candidate has not been found.',
            ], 404);
        }

        JobApplication::where('candidate_id', $candidate->id)->delete();
        $resume = File::find($candidate->resume_file_id);

        if ($resume) {
            $resume->delete();
        }

        $candidate->delete();

        return response()->json([
            'message' => 'The candidate has successfully removed himself!',
            'candidate' => $candidate
        ], 201);
    }
}