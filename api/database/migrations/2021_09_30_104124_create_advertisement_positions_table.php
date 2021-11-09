<?php

use App\Models\Advertisement;
use App\Models\Position;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdvertisementPositionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('advertisement_positions', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Advertisement::class, 'advertisement_id');
            $table->foreignIdFor(Position::class, 'position_id');
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
        Schema::dropIfExists('advertisement_positions');
    }
}