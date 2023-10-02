<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CardController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [AuthController::class, 'user']);
    Route::post('/logout', [AuthController::class, 'logout']);
});

Route::post('/characters', [CardController::class, 'savecard']);

Route::get('/getCards', [CardController::class, 'getAllCards']);
Route::delete('/getCards/{id}', [CardController::class, 'deleteCard']);
//Route::get('/getCards/{id}', [CardController::class, 'getCardById']);