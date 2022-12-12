<?php

function kp_custom_image_sizes($sizes) {
    return array_merge($sizes, [
        'teamMember' => __('Team Member', 'konda-plus')
    ]);
}