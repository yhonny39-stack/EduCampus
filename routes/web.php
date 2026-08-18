<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::post('/login', [AuthController::class, 'login'])
    ->name('login');

Route::get('/user', [AuthController::class, 'user']);

Route::post('/logout', [AuthController::class, 'logout']);

Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');

Route::get('/test-auth', function () {

    return response()->json([
        'authenticated' => auth()->check(),
        'user' => auth()->user()
    ]);

});
