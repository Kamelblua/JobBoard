<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Candidate extends Model
{
    use HasFactory;

    protected $table = "candidates";
    protected $fillable = ['email', 'resume_file_id', 'password'];
    protected $appends = ['resume'];
    protected $hidden = ['password', 'resume_file_id'];

    public function jobApplications()
    {
        return $this->hasMany(JobApplication::class, 'candidate_id', 'id');
    }

    public function resume()
    {
        return $this->belongsTo(File::class, 'id', 'resume_file_id');
    }

    public function getResumeAttribute()
    {
        return File::find($this->resume_file_id);
    }

    public function getRoleAttribute()
    {
        return "candidate";
    }
}