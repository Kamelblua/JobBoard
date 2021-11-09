<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    use HasFactory;

    protected $table = "languages";
    protected $fillable = ['name'];
    protected $hidden = ['pivot', 'created_at', 'updated_at'];

    public function advertisements()
    {
        return $this->belongsToMany(Advertisement::class, 'advertisement_languages');
    }
}