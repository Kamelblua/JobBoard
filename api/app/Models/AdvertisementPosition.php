<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdvertisementPosition extends Model
{
    use HasFactory;

    protected $table = "advertisement_positions";

    protected $fillable = ['advertisement_id', 'position_id'];
}