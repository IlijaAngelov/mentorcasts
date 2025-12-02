<?php

namespace App\Http\Controllers;

use App\Models\Conversation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'message' => 'required|min:3|max:255',
        ]);

        Conversation::create([
            'user_id' => Auth::id(),
            'message' => $validatedData['message'],
        ]);

        return redirect('/conversations')->with('success', 'Message created!');
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
