<?php

    class Response {

        public function Message($Message = ["Empty"], $Code = 200) {

            $response = array (
                'Message' => $Message,
                'StatusCode' => $Code
            );
            
            http_response_code($Code);
            echo json_encode($response);

        }
        
    }
    
?>