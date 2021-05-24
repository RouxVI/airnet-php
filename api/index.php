<?php

header('content-type: application/json');
echo json_encode([
  
      $name = $foreign_email = $email_subject = $message = $headers = "";

    if($_SERVER["REQUEST_METHOD"] == "POST"){
        if(issett($_POST["name"])){
            $name =  $_POST['name'];
            $request_type =  $_POST['request-type'];  
            $building_type =  $_POST['building-type'];  
            $foreign_email = $_POST['email']; 
            $email_subject = $_POST['subject']; 
            $message = $_POST['message'];

            $target_email = "ENTER EMAIL HERE";

            $email_body = "Nom: ".$name."\nType de requête: ".$request_type."\nType de bâtiment: ".$building_type."\nAdresse courriel: ".$foreign_email."\n\nMessage: ".$message;

            $headers = "Envoyé par: ".$name." <".$foreign_email."> ";
            $header .= "Répondre à: ".$foreign_email."\r\n";

            mail($target_email, $email_subject, $email_body, $headers);

            $page_to_load = $_SERVER["REQUEST_URI"];
            header("Location: /".$page_to_load);
        }
    }=> 'Vercel']);
