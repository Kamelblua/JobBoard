<?php

use App\Models\Advertisement;
use App\Models\Candidate;
use App\Models\Company;
use App\Models\File;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJobApplicationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('job_applications', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Advertisement::class, 'advertisement_id');
            $table->foreignIdFor(Company::class, 'company_id');
            $table->foreignIdFor(File::class, 'resume_file_id');
            $table->foreignIdFor(Candidate::class, 'candidate_id');
            $table->text('more');
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
        Schema::dropIfExists('job_applications');
    }
}