<?php

    $server = "localhost";
    $username = "root";
    $password = "";
    $databases = "angular_php_login";

    try {
        $pdo = new PDO ("mysql:host=$server;dbname=$databases", $username, $password);
        $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        echo $e;
    }
    
?>