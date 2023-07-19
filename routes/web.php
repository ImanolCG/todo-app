<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now tasks something great!
|
*/

Route::get('/', function () {
    return view('admin.main');
//    return view('auth.login');
});

/****************** VUE ROUTER **********************/
Route::get('/{any}', function () {
    return view('admin.main');
})->where('any', '.*');
