<?php

function kp_recipe_summary_render_cb() {
    ob_start();
    ?>

    <?php

    $output = ob_get_contents();
    ob_end_clean();

    return $output;
}