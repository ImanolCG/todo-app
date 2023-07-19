<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
    <title>Prueba JICG | Iniciar Sesión</title>
    @include('auth.template.global_css')
</head>
<body>
<div id="login"></div>
@routes
@include('auth.template.global_js')
</body>
</html>
