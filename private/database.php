<?php
    //($servername, $username, $password, $dbname);
    $db = mysqli_connect('localhost','c6personal','P0s87!7Rk@eH','c6personal');
    if (!$db) {
        die("Connection failed: " . mysqli_connect_error());
    }
?>
