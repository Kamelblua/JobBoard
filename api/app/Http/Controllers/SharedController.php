<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\CompanyIndustry;
use App\Models\CompanyType;
use App\Models\Position;
use App\Models\Language;

class SharedController extends Controller
{
    public function positions()
    {
        return response()->json([
            'count' => Position::all()->count(),
            'total' => Position::all()->count(),
            'items' => Position::all()
        ]);
    }

    public function industries()
    {
        return response()->json([
            "count" => CompanyIndustry::whereNotNull('parent_id')->get()->count(),
            "total" => CompanyIndustry::whereNotNull('parent_id')->get()->count(),
            "items" => CompanyIndustry::whereNotNull('parent_id')->get()
        ]);
    }

    public function types()
    {
        return response()->json([
            "count" => CompanyType::all()->count(),
            "total" => CompanyType::all()->count(),
            "items" => CompanyType::all()
        ]);
    }

    public function languages()
    {
        return response()->json([
            'count' => Language::all()->count(),
            'total' => Language::all()->count(),
            'items' => Language::all()
        ]);
    }
}
