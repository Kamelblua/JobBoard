<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdvertisementLanguage extends Model
{
    use HasFactory;

    protected $table = "advertisement_languages";

    protected $fillable = ['advertisement_id', 'language_id'];
}