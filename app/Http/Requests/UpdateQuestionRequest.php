<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Model\Question;
use Illuminate\Support\Str;
class UpdateQuestionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    protected function prepareForValidation()
   {
    
      $this->merge([
          'slug' => Str::slug($this->title),
      ]);
   }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {   
        return [
            "title"=> "required|min:5",
           "slug"=> "required|min:5|unique:questions,slug,".$this->question->id,
           "body"=> "required",
           "user_id"=> "required|exists:users,id",
           "category_id"=> "required|exists:categories,id",
        ];
    }
}
