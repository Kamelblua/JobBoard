<?php

namespace App\Http\Controllers\Company;

use App\Http\Controllers\Controller;
use App\Http\Controllers\TokenController;
use App\Models\Advertisement;
use App\Models\AdvertisementLanguage;
use App\Models\AdvertisementPosition;
use App\Models\Position;
use App\Models\Language;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AdvertisementController extends Controller
{
    public function search(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'limit' => ['nullable', 'integer', 'min:5', 'max:150'],
            'page' => ['nullable', 'integer', 'min:1'],
            'search' => ['nullable', 'string'],
            'position_ids' => ['nullable', 'array', 'distinct'],
            'language_ids' => ['nullable', 'array', 'distinct'],
            'industry_ids' => ['nullable', 'array', 'distinct'],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ]);
        }

        $limit = request('limit') ?? 20;
        $page = request('page') ?? 1;
        $term = request('search') ?? "";

        $results = Advertisement::where('title', "LIKE", "%" . $term . "%");

        $hasWhereRelation = false;

        if (request('position_ids')) {
            foreach (request('position_ids') as $position_id) {
                if ($hasWhereRelation) {
                    $results = $results->orWhereRelation('positions', 'positions.id', $position_id);
                    continue;
                }
                $hasWhereRelation = true;
                $results = $results->whereRelation('positions', 'positions.id', $position_id);
            }
        }
        if (request('language_ids')) {
            foreach (request('language_ids') as $language_id) {
                if ($hasWhereRelation) {
                    $results = $results->orWhereRelation('languages', 'languages.id', $language_id);
                    continue;
                }
                $hasWhereRelation = true;
                $results = $results->whereRelation('languages', 'languages.id', $language_id);
            }
        }
        if (request('industry_ids')) {
            foreach (request('industry_ids') as $industry_id) {
                if ($hasWhereRelation) {
                    $results = $results->orWhereRelation('company', 'industry_id', $industry_id);
                    continue;
                }
                $hasWhereRelation = true;
                $results = $results->whereRelation('company', 'industry_id', $industry_id);
            }
        }

        $results = $results->with(['company', 'positions', 'languages']);

        return response()->json([
            'total' => $results->count(),
            'count' => $results->skip($limit * ($page - 1))->take($limit)->get()->count(),
            'items' => $results->skip($limit * ($page - 1))->take($limit)->get()
        ]);
    }

    public function create(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'title' => ['required', 'min:3', 'max:35', 'string'],
            'text' => ['required', 'string', 'min:20', 'max:500'],
            'city' => ['required', 'string'],
            'remote' => ['required', 'boolean'],
            'positions' => ['required', 'array', 'distinct'],
            'languages' => ['required', 'array', 'distinct'],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ], 400);
        }

        $errors = [];

        foreach (request("positions") as $position) {
            if (null === AdvertisementPosition::find($position)) {
                $errors["positions"] = "One of the given positions doesn't exists.";
            }
        }
        if (sizeof(request('positions')) < 1 || sizeof(request('positions')) > 3) {
            $errors["positions"] = "One of the given positions doesn't exists.";
        }

        foreach (request("languages") as $language) {
            if (null === AdvertisementLanguage::find($language)) {
                $errors["languages"] = "One of the given languages doesn't exists.";
            }
        }
        if (sizeof(request('languages')) < 1 || sizeof(request('languages')) > 3) {
            $errors["languages"] = "One of the given languages doesn't exists.";
        }

        if (!empty($errors)) {
            return response()->json([
                'errors' => $errors
            ], 400);
        }

        $company = TokenController::getCurrentCompany($request);
        $advertisement = new Advertisement();

        $advertisement->title = trim(request('title'));
        $advertisement->content = trim(request('text'));
        $advertisement->city = trim(request('city'));
        $advertisement->remote = request('remote');
        $advertisement->company_id = $company->id;

        if ($advertisement->save()) {
            foreach (request('positions') as $position) {
                AdvertisementPosition::create([
                    "advertisement_id" => $advertisement->id,
                    "position_id" => Position::find($position)->id
                ]);
            }
            foreach (request('languages') as $language) {
                AdvertisementLanguage::create([
                    "advertisement_id" => $advertisement->id,
                    "language_id" => Language::find($language)->id
                ]);
            }

            return response()->json([
                'message' => 'The advertisement was successfully created!',
            ], 201);
        }

        return response()->json([
            'message' => '500: An error occurred, please try again.'
        ], 500);
    }
}