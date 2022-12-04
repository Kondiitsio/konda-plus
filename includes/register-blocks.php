<?php

function kp_register_blocks() {
    $blocks = [
        [ 'name' => 'fancy-header' ],
        [ 'name' => 'search-form', 'options' => [
            'render_callback' => 'kp_search_form_render_cb'
        ]],
        [ 'name' => 'page-header', 'options' => [
            'render_callback' => 'kp_page_header_render_cb'
        ]],
        [ 'name' => 'header-tools', 'options' => [
            'render_callback' => 'kp_header_tools_render_cb'
        ]],
        [ 'name' => 'auth-modal', 'options' => [
            'render_callback' => 'kp_auth_modal_render_cb'
        ]],
        [ 'name' => 'recipe-summary', 'options' => [
            'render_callback' => 'kp_recipe_summary_render_cb'
        ]]
    ];

    foreach($blocks as $block) {
        register_block_type(
            KP_PLUGIN_DIR . 'build/blocks/' . $block['name'],
            isset($block['options']) ? $block['options'] : []
        );
    }
}