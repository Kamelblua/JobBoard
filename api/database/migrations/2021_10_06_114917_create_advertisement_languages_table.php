<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

use App\Models\Advertisement;
use App\Models\Language;

class CreateAdvertisementLanguagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('advertisement_languages', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Advertisement::class, 'advertisement_id');
            $table->foreignIdFor(Language::class, 'language_id');
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
        Schema::dropIfExists('advertisement_languages');
    }
}