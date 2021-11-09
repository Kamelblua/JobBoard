<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Position extends Model
{
    use HasFactory;

    protected $table = "positions";
    protected $fillable = ['name'];
    protected $hidden = ['pivot', 'created_at', 'updated_at'];

    public function advertisements()
    {
        return $this->belongsToMany(Advertisement::class, 'advertisement_positions');
    }
}