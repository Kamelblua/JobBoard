<?php

namespace App\Http\Controllers\Candidate;

use App\Http\Controllers\Controller;
use App\Http\Controllers\TokenController;
use App\Models\Advertisement;
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
     * Undocumented function
     *
     * @return void
     */
    public function index()
    {
    }

    public function profile(Request $request)
    {
        $candidate = TokenController::getCurrentCandidate($request);

        return response()->json($candidate);
    }

    public function applications(Request $request)
    {
        $page = request('page') ? 1 : (request('page') < 0 ? 1 : request('page'));
        $limit = 20;

        $candidate = TokenController::getCurrentCandidate($request);

        $jobApplications = JobApplication::where('candidate_id', $candidate->id)->with(['advertisement']);

        return response()->json([
            'total' => $jobApplications->count(),
            'count' => $jobApplications->skip($limit * ($page - 1))->take($limit)->get()->count(),
            'items' => $jobApplications->skip($limit * ($page - 1))->take($limit)->get()
        ]);
    }

    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => ['email'],
            'education_name' => ['min:3', 'max:255'],
            'graduation_year' => ['integer'],
            'resume' => ['file', 'mimes:pdf']
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ], 400);
        }

        $candidate = TokenController::getCurrentCandidate($request);

        $emailExists = Candidate::where('email', request('email'))->first();
        if (isset($emailExists) && $candidate->id !== $emailExists->id) {
            return response()->json([
                'errors' => [
                    'email' => 'This email has already been taken.'
                ]
            ]);
        }

        $candidate->email = request('email') ?? $candidate->email;
        $candidate->education_name = request('education_name') ?? $candidate->education_name;
        $candidate->graduation_year = request('graduation_year') ?? $candidate->graduation_year;

        if ($request->hasFile('resume')) {
            $resumeFile = File::find($candidate->resume_file_id);

            if (isset($resumeFile)) {
                $resumeFile->delete();
            }

            $file_extension = $request->file('resume')->getClientOriginalExtension();
            $filename = 'cv.' . $file_extension;
            $request->file('resume')->storeAs($candidate->id . '/cv', 'cv.' . $file_extension, 'candidates');

            $updatedResumeFile = new File();

            $updatedResumeFile->name = $filename;
            $updatedResumeFile->location = config('app.url') . '/api/candidates/cv/' . $candidate->id . '/' . $filename;

            $updatedResumeFile->save();

            $candidate->resume_file_id = $updatedResumeFile->id;
        }

        if ($candidate->save()) {
            $token = TokenController::generateToken($candidate, false, 'candidate');

            return response()->json([
                'message' => 'Profile updated successfully.'
            ], 200)->cookie('token', $token->toString(), null, null, null, null, false);
        }

        return response()->json([
            'message' => '500: An error occurred, please try again.'
        ], 500);
    }

    /**
     * Apply an advertisement by id.
     *
     * api/advertisement/apply/{id} methode => post
     *
     */
    public function apply(Request $request, int $id): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'email' => ['required', 'email'],
            'password' => ['nullable', 'regex:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/'],
            'education_name' => ['required', 'min:3', 'max:255'],
            'graduation_year' => ['required', 'integer'],
            'more' => ['required', 'string', 'min:50', 'max:500'],
            'resume' => ['required', 'file', 'mimes:pdf']
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ], 400);
        }

        $candidate = Candidate::where('email', request('email'))->first();

        if (!$candidate) {
            if (!request('password')) {
                return response()->json([
                    'errors' => [
                        'password' => "You're not logged in. Please provide a new password to link your account."
                    ]
                ], 400);
            }

            $candidate = new Candidate();

            $candidate->email = request('email');
            $candidate->password = Hash::make(request('password'));
            $candidate->graduation_year = request('graduation_year');
            $candidate->education_name = request('education_name');

            $candidate->save();
        }

        $advertisement = Advertisement::find($id);

        if (!isset($candidate->resume)) {
            $file_extension = $request->file('resume')->getClientOriginalExtension();
            $filename = 'cv.' . $file_extension;
            $request->file('resume')->storeAs($candidate->id . '/cv', 'cv.' . $file_extension, 'candidates');

            $updatedResumeFile = new File();

            $updatedResumeFile->name = $filename;
            $updatedResumeFile->location = config('app.url') . '/api/candidates/cv/' . $candidate->id . '/' . $filename;

            $updatedResumeFile->save();

            $candidate->resume_file_id = $updatedResumeFile->id;
        }

        $jobApplication = new JobApplication();

        $jobApplication->advertisement_id = $advertisement->id;
        $jobApplication->company_id = $advertisement->company->id;
        $jobApplication->resume_file_id = $candidate->resume->id;
        $jobApplication->candidate_id = $candidate->id;
        $jobApplication->more = request('more');

        $jobApplication->save();

        return response()->json([
            'message' => 'Your application has been submitted!',
        ], 201);
    }
}
