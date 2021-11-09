<?php

use App\Models\CompanyIndustry;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompanyIndustriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('company_industries', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignIdFor(CompanyIndustry::class, "parent_id")->nullable()->default(null);
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
        Schema::dropIfExists('company_industries');
    }
}