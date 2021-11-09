<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Advertisement extends Model
{
    use HasFactory;

    protected $table = "advertisements";
    protected $fillable = ['company_id', 'title', 'content', 'city', 'remote'];
    protected $hidden = ['company_id', 'updated_at'];

    public function company()
    {
        return $this->belongsTo(Company::class, 'company_id', 'id');
    }

    public function jobApplications()
    {
        return $this->hasMany(JobApplication::class, 'id', 'advertisement_id');
    }

    public function positions()
    {
        return $this->belongsToMany(Position::class, 'advertisement_positions');
    }

    public function languages()
    {
        return $this->belongsToMany(Language::class, 'advertisement_languages');
    }
}
