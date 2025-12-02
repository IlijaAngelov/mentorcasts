<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Conversation extends Model
{

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'conversation';

    protected $fillable = [
        'message',
        'user_id',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
