<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Company\AdvertisementController;
use App\Http\Controllers\Candidate\CandidateController;
use App\Http\Controllers\TokenController;

// AdminController
use App\Http\Controllers\Admin\AdvertisementController as AdminAdvertisementController;
use App\Http\Controllers\Admin\CandidateController as AdminCandidateController;
use App\Http\Controllers\Admin\CompanyController as AdminCompanyController;


// AuthController
use App\Http\Controllers\Company\AuthController as CompanyAuthController;
use App\Http\Controllers\Admin\AuthController as AdminAuthController;
use App\Http\Controllers\Candidate\AuthController as CandidateAuthController;
use App\Http\Controllers\Company\CompanyController;
use App\Http\Controllers\File\FileController;
use App\Http\Controllers\SharedController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'admin', 'middleware' => ['authenticated.admin']], function () {
    Route::get('dashboard', [AdminController::class, "index"]);

    Route::post('/advertisements/search', [AdminAdvertisementController::class, 'search']);
    Route::get('/advertisement/{id}', [AdminAdvertisementController::class, 'get']);
    Route::delete('/advertisement/{id}', [AdminAdvertisementController::class, 'delete']);

    Route::post('/candidates/search', [AdminCandidateController::class, 'search']);
    Route::get('/candidate/{id}', [AdminCandidateController::class, 'get']);
    Route::delete('/candidate/{id}', [AdminCandidateController::class, 'delete']);

    Route::post('/companies/search', [AdminCompanyController::class, 'search']);
    Route::delete('/companies/{id}', [AdminCompanyController::class, 'delete']);

    Route::post('/admins/search', [AdminController::class, 'search']);
});

Route::middleware('authenticated.company')->group(function () {
    Route::get('company/profile', [CompanyController::class, 'profile']);
    Route::post('company/update', [CompanyController::class, 'update']);

    Route::get('company/applications', [CompanyController::class, 'applications']);
    Route::post('advetirsement/create', [AdvertisementController::class, 'create']);
});

Route::middleware('authenticated.candidate')->group(function () {
    Route::get('profile', [CandidateController::class, 'profile']);
    Route::post('profile', [CandidateController::class, 'update']);

    Route::get('applications', [CandidateController::class, 'applications']);
});

Route::middleware('authenticated')->group(function () {
    Route::delete('logout', [TokenController::class, 'logout']);
});

Route::middleware('unauthenticated')->group(function () {
    Route::post('admin/login', [AdminAuthController::class, 'login']);

    Route::post('company/register', [CompanyAuthController::class, 'register']);
    Route::post('company/login', [CompanyAuthController::class, 'login']);

    Route::post('register', [CandidateAuthController::class, 'register']);
    Route::post('login', [CandidateAuthController::class, 'login']);
});

// Public routes
Route::get('/company/{id}', [CompanyController::class, 'get']);
Route::post('/apply/{id}', [CandidateController::class, 'apply']);
Route::post('advertisements', [AdvertisementController::class, 'search']);

Route::get('positions', [SharedController::class, 'positions']);
Route::get('industries', [SharedController::class, 'industries']);
Route::get('types', [SharedController::class, 'types']);
Route::get('languages', [SharedController::class, 'languages']);

Route::get('image/placeholder/{image_name}', [FileController::class, 'get']);
Route::get('candidates/cv/{candidateId}/{name}', [FileController::class, 'getCandidateCv']);
Route::get('companies/{companyId}/logo/{name}', [FileController::class, 'getCompanyLogo']);