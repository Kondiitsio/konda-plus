<?php

function kp_enqueue_scripts() {
    $authURLs = json_encode([
        'signup' => esc_url_raw(rest_url('kp/v1/signup')),
        'signin' => esc_url_raw(rest_url('kp/v1/signin'))
    ]);

    wp_add_inline_script(
        'konda-plus-auth-modal-view-script',
        "const kp_auth_rest = {$authURLs}",
        'before' // 'after'
    );
}