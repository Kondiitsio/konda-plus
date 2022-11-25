<?php

function kp_activate_plugin() {
    // 5.0 < 5.9
    if(version_compare(get_bloginfo('version'), '5.9', '<')) {
        wp_die(
            __('You must update WordPress to use this plugin', 'konda-plus')
        );
    }

    kp_recipe_post_type();
    flush_rewrite_rules();
}