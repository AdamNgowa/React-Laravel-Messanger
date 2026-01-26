<?php

use Illuminate\Support\Facades\Broadcast;
//This code gives browser permission to acces payload
Broadcast::channel('online', function ($user) {
    return $user;
});
