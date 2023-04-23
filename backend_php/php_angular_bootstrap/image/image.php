<?php

header('Access-Control-Allow-Origin: http://localhost:4200');
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header('Access-Control-Allow-Headers: *');
require_once("../config/pdo.php");
require_once("../res/res.php");
$res = new Response();

// echo '<pre>';
// print_r($_FILES);
// echo '</pre>';


$dir = "../upload/";
$fileImage = $dir . basename($_FILES["image"]["name"]);
    if (move_uploaded_file($_FILES["image"]["tmp_name"],$fileImage)) {
        $res->Message("Upload Success",200);
    } else {
        $res->Message("Upload Error",200);
    }
?>