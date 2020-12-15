<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Question;
use App\Model\Category;
use App\User;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

$factory->define(Question::class, function (Faker $faker) {
    return [
        "title"=> $title =$faker->sentence(),
        "slug"=>Str::slug($title),
        "body"=>$faker->text,
        "category_id"=>Category::inRandomOrder()->first()->id,
        "user_id"=>User::inRandomOrder()->first()->id
    ];
});
