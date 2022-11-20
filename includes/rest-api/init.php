<?php

function kp_rest_api_init() {
    // example.com/wp-json/kp/v1/signup
    register_rest_route('kp/v1', '/signup', [
        'methods' => 'POST',
        'callback' => 'kp_rest_api_signup_handler',
        'permission_callback' => '__return_true'
    ]);

    register_rest_route('kp/v1', '/signin', [
        'methods' => 'POST',
        'callback' => 'kp_rest_api_signin_handler',
        'permission_callback' => '__return_true'
    ]);
}