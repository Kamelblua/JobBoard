<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanyCredential extends Model
{
    use HasFactory;

    protected $table = "company_credentials";
    protected $fillable = ['email', 'password'];
    // protected $appends = ['status', 'role', 'avatar', 'voted_posts', 'voted_comments'];
    protected $hidden = ['password', 'created_at', 'updated_at'];

    public function company()
    {
        return $this->hasMany(Company::class, 'credentials_id', 'id');
    }
}
