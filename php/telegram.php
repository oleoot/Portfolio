<?php
$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['text'];
$token = "1094837590:AAHQkk5IV-p8P9n6BCV2SKR_1FcWJOZRqRw";
$chat_id = "-451985032";
$arr = array(
  'Имя: ' => $name,
  'Email:' => $email,
  'Текст сообщения: ' => $text,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Thank-you');
} else {
  echo "Error";
}
?>
