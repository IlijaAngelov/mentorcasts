<?php

use App\Http\Controllers\ConversationController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/conversations', [ConversationController::class, 'index'])->name('conversations');
Route::post('/conversations', [ConversationController::class, 'store'])->name('conversations.store');

require __DIR__.'/settings.php';
