<?php

use App\Http\Controllers\Api\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'loginUser']);
Route::middleware('auth:sanctum', '')->get('/user', function (Request $request) {
    return response()->json([
        $request->user(),
        "message"=>$request->user()->first_name." You are logged in successfully"
    ]);;
});
