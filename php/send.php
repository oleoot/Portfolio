<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$message = htmlspecialchars($message);
$name = urldecode($name);
$email = urldecode($email);
$message = urldecode($message);
$name = trim($name);
$email = trim($email);
$message = trim($message);
echo $fio;
echo "<br>";
echo $email;
if (mail("oleg.kouts@gmail.com", "Заявка с сайта", "Имя:".$name.". E-mail: ".$email , "Message:" ".$message", "From: oleg.kouts@gmail.com \r\n")){
    echo "Сообщение успешно отправлено";
    } else {
    echo "При отправке сообщения возникли ошибки";
    }
   }
   ?>
