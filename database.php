<?php
    //($servername, $username, $password, $dbname);
    $db = mysqli_connect('localhost','personal','P0s87!7Rk@eH','personal');
    if (!$db) {
        die("Connection failed: " . mysqli_connect_error());
    }
?>
