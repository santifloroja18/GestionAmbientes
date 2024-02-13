<?php

use App\Http\Controllers\AmbienteController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\ExampleController;
use App\Http\Controllers\StockRoomController;
use App\Models\Rol;
use DragonCode\Contracts\Cashier\Auth\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'loginUser']);

//Client should be authenticated to access for functions

Route::middleware('auth:sanctum')->group(function (){
    
    // Route::get('/user', function (Request $request)
    // {
    //    return response()->json([
    //     $request->user(),
    //     "message"=>$request->user()->first_name.": logged in successfully"
    //    ]);
    // });
    Route::get('/users', [AuthController::class, 'index'])->name('users');
    Route::get('/user/{id}', [AuthController::class, 'show'])->name('user');
    //ROUTE FOR DESTROY SESSION
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
    //---ROUTE FOR MANAGING CLASE ROOMS
    //---CREATE ROOM
    Route::post('/create-room', [AmbienteController::class, 'store'])->name('create-room');
    //---LIST ROOMS
    Route::get('/rooms', [AmbienteController::class, 'index'])->name('index');
    //---UPDATE ROOM BY ID
    Route::get('/room/{id}', [AmbienteController::class, 'show'])->name('show');
    //---ROUTE FOR MANAGING ROOM-STOCKS
    //--LIST ROOM STOCKS
    Route::get('/room-stocks', [StockRoomController::class, 'index'])->name('room-stocks');
    //--UPDATE ROOM STOCK BY ID
    Route::get('/room-stock/{id}', [StockRoomController::class, 'show'])->name('room-stock');
});

