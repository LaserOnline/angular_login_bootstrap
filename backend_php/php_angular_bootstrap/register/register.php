<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header('Access-Control-Allow-Headers: *');
  require_once("../res/res.php");
  require_once("../config/pdo.php");
  $res = new Response();


  if ($_SERVER["REQUEST_METHOD"] === "POST") {
            
    $content = file_get_contents('php://input');
    $putData = json_decode($content,true);
    $email = $putData["email"];
    $pass = $putData["pass"];
  
    try {

        $insert = $pdo->prepare("INSERT INTO user(Email,Password) 
        VALUE (:Email,:Password)");
        $insert->bindParam(":Email", $email);
        $insert->bindParam(":Password", $pass);
        $insert->execute();
        $res->Message("Success",200);
 
        } catch (PDOException $e) {
            $res->Message($e,400);
        }
        
}
?>