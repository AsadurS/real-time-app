<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Real Time App</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet">
     <link rel="stylesheet" type="text/css" href="{{mix('css/app.css')}}">
    </head>
    <body>
        <div id="app">	
             <app-home></app-home>
        </div>
        <script type="text/javascript" src="{{mix('js/app.js')}}"></script>
    </body>
</html>
