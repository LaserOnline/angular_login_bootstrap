<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header('Access-Control-Allow-Headers: *');
require_once("../res/res.php");
require_once("../config/pdo.php");
$res = new Response();

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    
    $content = file_get_contents('php://input');
    $postData = json_decode($content,true);
    $email = $postData["email"];
    $password = $postData["pass"];

    if (empty($email)) {
        $res->Message("empty -->".$email,400);
    } else if (empty($password)) {
        $res->Message("empty -->".$password,400);
    } else {
        try {
            // Prepare SQL statement
            $stmt = $pdo->prepare("SELECT * FROM user WHERE Email = :email AND Password = :password");
    
            // Bind parameters
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':password', $password);
    
            // Execute statement
            $stmt->execute();
    
            // Check if there's a match in the database
            if($stmt->rowCount() > 0){
                $res->Message("Login successful",200);
            } else {
                $res->Message("incorrect Password" ,404 );
            }
        } catch(PDOException $e) {
            $res->Message("Error: " . $e->getMessage(), 500);
        }
    }
}
?>