<?php
if (isset($_POST['submit'])) {
    if (!empty($_POST['rosas'])) {
        echo '  ' . $_POST['rosas'];
    } else {
        echo 'Please select the value.';
    }
} else {
    echo 'hhhu';
}
if (isset($_POST['check']) and is_array($_POST['check'])) {
    foreach ($_POST['check'] as $id) {
        echo $id;
    }
}
?>