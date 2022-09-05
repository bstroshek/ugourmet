<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// переменные из нашей формы
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];



// настройка почтового ящика
$mail->isSMTP();                                // Настраиваем почту для SMTP
$mail->Host = 'smtp.ukr.net';  															// Основкой SMTP сервер
$mail->SMTPAuth = true;                         // Включить аутентификацию SMTP
$mail->Username = 'irsen_sneg@ukr.net';    // логин от почты с которой будут отправляться письма
$mail->Password = 'inDpzMj8mkfnzsr&';            // пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                      // Включить шифрование ssl
$mail->Port = 465;                                 // TCP порт для подключения / этот порт может отличаться у других провайдеров

$mail->setFrom('irsen_sneg@ukr.net');      // от кого будет уходить письмо для пользователя
$mail->addAddress('irsen_sneg@ukr.net');                          // Кому будет приходить заявка
//$mail->addAddress('ellen@example.com');               // Имя не обязательно
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
$mail->isHTML(true);                                  // Установить формат электронной почты в HTML

$mail->Subject = 'Заявка с моего сайта';
$mail->Body    = 'Name: ' . $name . ' <br> Email: ' . $email . '<br> Subject: ' . $subject .
$mail->AltBody = '';

if(!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    header('location: thank-you.html');
}
?>
