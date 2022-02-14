<?php

require '../PHPMailer/src/SMTP.php';
require '../PHPMailer/src/Exception.php';
require '../PHPMailer/src/PHPMailer.php';

use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

$mail = new PHPMailer();

$mail->isSMTP();

// define smtp host
$mail->HOST = '';
$mail->SMPTAuth = 'true';
$mail->SMTPSecure = "tls";
$mail->Port = "";
$mail->userName = "";
$mail->Password = "";
$mail->Suject = "";
$mail->setFrom("");
$mail->Body = "the Body";
			
$Send = $mail->Send()? return "Message Send" : return "error_log(message)";
$mail->smptClose();

$mail