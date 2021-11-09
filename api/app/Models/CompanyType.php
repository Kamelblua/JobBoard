<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanyType extends Model
{
    use HasFactory;

    protected $table = "company_types";
    protected $fillable = ['name'];
    // protected $appends = ['status', 'role', 'avatar', 'voted_posts', 'voted_comments'];
    protected $hidden = ['created_at', 'updated_at'];

    public function companies()
    {
        return $this->hasMany(Company::class, 'type_id', 'id');
    }
}