<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Advertisement;
use App\Models\AdvertisementLanguage;
use App\Models\AdvertisementPosition;
use App\Models\Position;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AdvertisementController extends Controller
{
    /**
     * Display a listing of the advertisement.
     *
     * api/advertisements methode => get
     *
     */
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

        $advertisements = Advertisement::where('title', 'LIKE', "%" . $term . "%")->with('company', 'positions', 'languages');

        return response()->json([
            'total' => $advertisements->count(),
            'count' => $advertisements->skip($limit * ($page - 1))->take($limit)->get()->count(),
            'items' => $advertisements->skip($limit * ($page - 1))->take($limit)->get()
        ]);
    }

    /**
     * Display advertisement by id.
     *
     * api/advertisement/{id} methode => get
     *
     */
    public function get(int $id): JsonResponse
    {
        $advertisement = Advertisement::with('company', 'jobApplications', 'positions')->find($id);

        if (!$advertisement) {
            return response()->json([
                'message' => 'The advertisement has not been found.',
            ], 404);
        }

        return response()->json([
            'advertisement' => $advertisement,
        ], 201);
    }

    /**
     * Create advertisement.
     *
     * api/advertisement methode => post
     *
     */
    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'title' => ['required', 'min:3', 'string'],
            'text' => ['required', 'string'],
            'city' => ['required', 'string'],
            'remote' => ['required', 'string'],
            'positions' => ['required', 'array']
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ], 400);
        }

        $advertisement = new Advertisement();

        $advertisement->title = trim(request('title'));
        $advertisement->content = trim(request('text'));
        $advertisement->city = trim(request('city'));
        $advertisement->remote = request('remote');
        $advertisement->company_id = random_int(1, 50);

        if ($advertisement->save()) {

            if (!empty(request('positions'))) {
                foreach (request('positions') as $position) {

                    $positionId = Position::where('name', $position)->first();

                    AdvertisementPosition::create([
                        "advertisement_id" => $advertisement->id,
                        "position_id" => $positionId->id
                    ]);
                }
            }

            return response()->json([
                'message' => 'The advertisement was successfully created!',
            ], 201);
        }

        return response()->json([
            'message' => '500: An error occurred, please try again.'
        ], 500);
    }

    /**
     * Update advertisement.
     *
     * api/advertisement/{id} methode => post
     *
     */
    public function update(Request $request, int $id): JsonResponse
    {
        $advertisement = Advertisement::find($id);

        if (!$advertisement) {
            return response()->json([
                'message' => 'The advertisement has not been found.',
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'title' => ['min:3', 'string'],
            'text' => ['string'],
            'city' => ['string'],
            'remote' => ['string'],
            'positions' => ['array']
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ], 400);
        }

        $advertisement->title = request('title') ?? $advertisement->title;
        $advertisement->content = request('text') ?? $advertisement->content;
        $advertisement->city = request('city') ?? $advertisement->city;
        $advertisement->remote = request('remote') ?? $advertisement->remote;

        if ($advertisement->save()) {
            $advertisementPosition = AdvertisementPosition::where('advertisement_id', $id)->get();

            if (!empty(request('positions'))) {

                foreach ($advertisementPosition as $as) {
                    $as->delete();
                }

                foreach (request('positions') as $position) {

                    $positionId = Position::where('name', $position)->first();

                    AdvertisementPosition::create([
                        "advertisement_id" => $advertisement->id,
                        "position_id" => $positionId->id
                    ]);
                }
            }

            return response()->json([
                'message' => 'The advertisement successfully updated!',
            ], 201);
        }

        return response()->json([
            'message' => '500: An error occurred, please try again.'
        ], 500);
    }

    /**
     * Delete a advertisement by id.
     *
     * api/advertisement/{id} methode => delete
     *
     */
    public function delete(int $id): JsonResponse
    {
        $advertisement = Advertisement::find($id);

        if (!$advertisement) {
            return response()->json([
                'message' => 'Advertisement not found.',
            ], 404);
        }

        if ($advertisement->delete()) {
            AdvertisementPosition::where('advertisement_id', $id)->delete();
            AdvertisementLanguage::where('advertisement_id', $id)->delete();

            return response()->json([
                'message' => 'The advertisement was successfully removed.'
            ], 201);
        }


        return response()->json([
            'message' => '500: An error occurred, please try again.'
        ], 500);
    }
}