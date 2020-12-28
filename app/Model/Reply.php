<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\Model\Like;
use App\Model\Question;
class Reply extends Model
{

    protected $guarded  =[];
    public function user() {
    	return $this->belongsTo(User::class);
    }

    public function question()
    {
    	return $this->belongsTo(Question::class);
    }
    public function likes()
    {
    	return $this->hasMany(Like::class);
    }
}
