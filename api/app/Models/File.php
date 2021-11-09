<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    use HasFactory;

    protected $table = "files";
    protected $fillable = ['name', 'location'];
    protected $hidden = ['created_at', 'updated_at'];

    public function getLinkAttribute()
    {
        return config('app.app_dev_url') . "files/images/" . $this->name;
    }

    public function candidate()
    {
        return $this->hasOne(Candidate::class, 'resume_file_id', 'id');
    }
}
