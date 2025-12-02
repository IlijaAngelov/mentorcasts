<?php

namespace App\Http\Controllers;

use App\Models\Conversation;
use http\Client\Curl\User;
use http\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use JetBrains\PhpStorm\NoReturn;

class ConversationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia("Conversations", [
            'storeUrl' => route('conversations.store'),
            'messages' => Conversation::with('user:id,name')
                ->select('id', 'user_id', 'message', 'created_at', 'updated_at')
                ->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user_id = 1;
        // validation. Inline, can be done in separate validation file!
        $validatedData = $request->validate([
            'message' => 'required|min:3|max:255',
        ]);
        dd($validatedData, $user_id);
        $message = Message::create($user_id, $validatedData);
    }

    /**
     * Display the specified resource.
     */
    public function show(Conversation $conversation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Conversation $conversation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Conversation $conversation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Conversation $conversation)
    {
        //
    }
}
