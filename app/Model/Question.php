<?php

namespace App\Model;

use App\User;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
class Question extends Model
{
   protected $fillable = ["title", "slug", "body","user_id", "category_id"];
   //protected $guarded  =[];


    public function setSlugAttribute($value)
    {

       $this->attributes['slug'] = Str::slug($value);
    }

    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->format("d M, Y");
    }
   public function getRouteKeyName()
   {
    return "slug";
   }
    public function user()
    {
    	return $this->belongsTo(User::class);
    }

    public function replies()
    {
    	return $this->hasMany(Reply::class);
    }
    public function caeogory()
    {
    	return $this->hasMany(Category::class);
    }
}
