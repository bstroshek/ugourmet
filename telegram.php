<?php

/* https://api.telegram.org/bot5508636857:AAFoja40Bz745MYnpafGwpn5QZOujieQ7uM/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

// поля из формы
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
// токен нашего бота из botFather
$token = "5508636857:AAFoja40Bz745MYnpafGwpn5QZOujieQ7uM";
// $chat_id = "https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXXXX/getUpdates";
$chat_id = "-776730101";
$arr = array(
  'Имя пользователя: ' => $name,
  'Email: ' => $email,
  'Subject' => $subject
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>
