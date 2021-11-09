<?php

use App\Models\CompanyCredential;
use App\Models\CompanyIndustry;
use App\Models\CompanyType;
use App\Models\File;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(CompanyType::class, 'type_id');
            $table->foreignIdFor(CompanyIndustry::class, 'industry_id');
            $table->foreignIdFor(CompanyCredential::class, 'credentials_id');
            $table->foreignIdFor(File::class, 'logo_file_id')->nullable()->default(null);
            $table->string('name');
            $table->enum('employees_range', ['1-10', '11-100', '101-1000', '1000+']);
            $table->string('city');
            $table->string('country');
            $table->string('address');
            $table->string('postal_code');
            $table->string('contact_phone');
            $table->string('contact_email')->nullable();
            $table->string('website_link')->nullable();
            $table->string('youtube_link')->nullable();
            $table->string('twitter_link')->nullable();
            $table->string('facebook_link')->nullable();
            $table->string('linkedin_link')->nullable();
            $table->string('instagram_link')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('companies');
    }
}