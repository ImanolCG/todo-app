<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Vue Exam</title>
    @include("admin.template.global_css")
</head>
<body>
    <div id="admin"></div>
    <input type="hidden" id="csrf_token" value="{{csrf_token()}}">
    <input type="hidden" id="asset" value="{{asset('')}}">
    @include("admin.template.global_js")
</body>
</html>
