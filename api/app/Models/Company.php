<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    protected $table = "companies";
    protected $fillable = [
        'type_id', 'industry_id', 'credentials_id', 'logo_file_id', 'name', 'employees_range',
        'city', 'country', 'address', 'postal_code',
        'contact_phone', 'contact_email', 'website_link', 'youtube_link',
        'twitter_link', 'facebook_link', 'linkedin_link'
    ];
    protected $appends = ['type', 'industry', 'logo'];
    protected $hidden = ['type_id', 'industry_id', 'credentials_id', 'logo_file_id', 'updated_at'];

    public function type()
    {
        return $this->belongsTo(CompanyType::class, 'type_id', 'id');
    }

    public function industry()
    {
        return $this->belongsTo(CompanyIndustry::class, 'industry_id', 'id');
    }

    public function advertisements()
    {
        return $this->hasMany(Advertisement::class, 'company_id', 'id');
    }

    public function credentials()
    {
        return $this->belongsTo(CompanyCredential::class, 'credentials_id', 'id');
    }

    public function logo()
    {
        return $this->belongsTo(File::class, 'id', 'logo_file_id');
    }

    public function getTypeAttribute()
    {
        return CompanyType::find($this->type_id)->name;
    }

    public function getIndustryAttribute()
    {
        return CompanyIndustry::find($this->industry_id)->name;
    }

    public function getLogoAttribute()
    {
        return File::find($this->logo_file_id);
    }
}