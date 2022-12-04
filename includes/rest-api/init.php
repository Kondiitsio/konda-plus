<?php

function kp_rest_api_init() {
    // example.com/wp-json/kp/v1/signup
    register_rest_route('kp/v1', '/signup', [
        'methods' => WP_REST_Server::CREATABLE,
        'callback' => 'kp_rest_api_signup_handler',
        'permission_callback' => '__return_true'
    ]);

    register_rest_route('kp/v1', '/signin', [
        'methods' => WP_REST_Server::EDITABLE,
        'callback' => 'kp_rest_api_signin_handler',
        'permission_callback' => '__return_true'
    ]);

    register_rest_route('kp/v1', '/rate', [
        'methods' => WP_REST_Server::CREATABLE,
        'callback' => 'kp_rest_api_add_rating_handler',
        'permission_callback' => 'is_user_logged_in'
    ]);
}