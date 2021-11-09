<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobApplication extends Model
{
    use HasFactory;

    protected $table = "job_applications";
    protected $fillable = ['advertisement_id', 'resume_file_id', 'candidate_id', 'more'];
    protected $appends = ['resume', 'candidate'];
    protected $hidden = ['advertisement_id', 'resume_file_id', 'candidate_id'];

    public function advertisement()
    {
        return $this->belongsTo(Advertisement::class, 'advertisement_id', 'id');
    }

    public function candidate()
    {
        return $this->belongsTo(Candidate::class, 'id', 'candidate_id');
    }

    public function getResumeAttribute()
    {
        return File::find($this->resume_file_id);
    }

    public function getCandidateAttribute()
    {
        return Candidate::find($this->candidate_id)->email;
    }
}