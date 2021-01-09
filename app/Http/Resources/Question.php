<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Question extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {  
        return [
          "title" =>$this->title,
          "showLink"=>str_replace(url("/api"),'',route("question.show", $this->slug)) ,
          "user"=>$this->user->name,
          "body"=>$this->body,
          "date"=>$this->created_at
        ];
    }
}
