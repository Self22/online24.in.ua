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
    $form = stripslashes($_POST['form_name']);
    $subject = 'Заявка';
    $error = '';
    if($form  = 3) {

        $message = '
			<html>
					<head>
							<title>Заявка с футера</title>
					</head>
					<body>
					        <p>Заявка с футера</p>
							<p>Имя: ' . $name . '</p>
							<p>Телефон : ' . $phone . '</p>	
							<p>Email : ' . $email . '</p>
					</body>
			</html>';
    }

    if($form  = 1) {

        $message = '
			<html>
					<head>
							<title>Заявка на покупку</title>
					</head>
					<body>  
					        <p>Заявка на покупку</p>
							<p>Имя: ' . $name . '</p>
							<p>Телефон : ' . $phone . '</p>	
							<p>Email : ' . $email . '</p>
					</body>
			</html>';
    }

    if($form  = 2) {

        $message = '
			<html>
					<head>
							<title>Заявка на тестирование</title>
					</head>
					<body>
					        <p>Заявка на тестирование</p>
							<p>Имя: ' . $name . '</p>
							<p>Телефон : ' . $phone . '</p>	
							<p>Email : ' . $email . '</p>
					</body>
			</html>';
    }

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
            echo $form;
        }
    }else{
        echo '<div class="has-danger">'.$error.'</div>';
    }

}
?>



