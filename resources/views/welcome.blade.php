<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Vue Exam</title>
        @include(main.template.global_css)
    </head>
    <body>
        <div id="admin"></div>
        @include(main.template.global_js)
    </body>
</html>
