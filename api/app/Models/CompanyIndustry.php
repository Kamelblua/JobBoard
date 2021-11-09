<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanyIndustry extends Model
{
    use HasFactory;

    protected $table = "company_industries";
    protected $fillable = ['name', 'parent_id'];
    // protected $appends = ['status', 'role', 'avatar', 'voted_posts', 'voted_comments'];
    protected $hidden = ['created_at', 'updated_at'];

    public function parent()
    {
        return $this->belongsTo(CompanyIndustry::class, 'parent_id')->where('parent_id', 0)->with('parent');
    }

    public function children()
    {
        return $this->hasMany(CompanyIndustry::class, 'parent_id')->with('children');
    }

    public function companies()
    {
        return $this->hasMany(Company::class, 'industry_id', 'id');
    }
}