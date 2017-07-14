<?php

define("CONTACT_FORM", 'evgeniy.sayenko@gmail.com');

function ValidateEmail($value){
    $regex = '/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i';

    if($value == '') {
        return false;
    } else {
        $string = preg_replace($regex, '', $value);
    }

    return empty($string) ? true : false;
}

$post = (!empty($_POST)) ? true : false;

if($post){
    $url = stripslashes($_SERVER['HTTP_REFERER']);
    $name = stripslashes($_POST['name']);
    $phone = stripslashes($_POST['tel']);
    $email = stripslashes($_POST['email']);
    $product = ($_POST['product']);
    $type = stripslashes($_POST['form_type']);
    $subject = 'Заявка Online24 - '. $product.'';
    $error = '';
    $message = '
			<html>
					<head>
							<title>Заявка</title>
					</head>
					<body>
					        <p>Заявка</p>
					        <p>Тип заявки:'. $type .'</p>
					        <p>Страница: '. $url .'</p>
							<p>Имя: ' . $name . '</p>
							<p>Телефон : ' . $phone . '</p>	
							<p>Email : ' . $email . '</p>
					</body>
			</html>';

    if (!ValidateEmail($email)){
        $error = 'Email введен неправильно!';
    }

    if(!$error){
        $mail = mail(CONTACT_FORM, $subject, $message,
            "From: ".$name." <".$email.">\r\n"
            ."Reply-To: ".$email."\r\n"
            ."Content-type: text/html; charset=utf-8 \r\n"
            ."X-Mailer: PHP/" . phpversion());

        if($mail){
            echo '<div class="message-success">Спасибо за заявку! Мы вам перезвоним!</div>';
        }
    }else{
        echo '<div class="has-danger">'.$error.'</div>';
    }

}
?>



