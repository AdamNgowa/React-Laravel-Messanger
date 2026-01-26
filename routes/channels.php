<?php

use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Broadcast;
//This code gives browser permission to acces payload
Broadcast::channel('online', function ($user) {
    return $user ? new UserResource($user) : null;
});
