<?php

namespace App\Http\Controllers\File;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;

class FileController extends Controller
{
    public function get(string $name)
    {
        $path = public_path('/storage/placeholder/');
        $fullPath = $path . $name;

        if (!File::exists($fullPath)) {
            abort(404);
        }

        return response()->file($fullPath);
    }

    public function getCandidateCv(int $candidateId, string $name)
    {
        $path = public_path('/storage/candidates/' . $candidateId . '/cv/');
        $fullPath = $path . $name;

        if (!File::exists($fullPath)) {
            abort(404);
        }

        return response()->file($fullPath);
    }

    public function getCompanyLogo(int $companyId, string $name)
    {
        $path = public_path('/storage/companies/' . $companyId . '/logo/');
        $fullPath = $path . $name;

        if (!File::exists($fullPath)) {
            abort(404);
        }

        return response()->file($fullPath);
    }
}