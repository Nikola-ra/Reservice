<?php
include "connessione.php";

$filename = 'beta.txt';
$handler = fopen($filename, 'r');

if (false === $handler) {
    printf('Impossibile aprire il file %s', $filename);
    exit;
}
$size = 1024;

while (!feof($handler)) {
    $content = fread($handler, $size);
    if($content == 1){
        // In questo caso è beta!
        header("location: alpha.php");
    }
    } 
            $message = "Registrati per poter iniziare ad usare il nostro servizio";


            error_reporting(0);
            $user = $_POST["user"];
            $pass = $_POST["pass"];
            $pass2 = $_POST["pass2"];

            if ($user != "" && $pass != "" && $pass2!= ""){
                if($pass == $pass2 ){
                    if(strlen($pass) >= 8){

                        $qr2 = ("SELECT * FROM user WHERE user='$user'");
                        $result = mysqli_query($db,$qr2);
                        $num_rows = mysqli_num_rows($result);


                        if($num_rows >0 ){
                            $message = "Attenzione, l'email è gia in uso!";
                        }
                        else{
                            $code = rand(1000,9999);
                            $pass = password_hash($pass,PASSWORD_BCRYPT);
                            $qr = "INSERT into user (user,password,code) VALUES ('$user', '$pass','$code')";
                            $result = mysqli_query($db,$qr);
                            if ($result){
                                $message = "Utente registrato con successo! Verrai portato alla conferma tra 1 secondo";
                                session_start();
                                $_SESSION['mail'] = $user;
                                header("location: conferma.php");
                            }
                            else{
                                    $message = "Errore nella registrazione! Assicurati di aver inserito tutti i dati!";
                            }
                        }
                    }
                    else{
                        echo "Le due password devono avere piu di 8 caratteri";
                    }         
                }
                else{
                        $message = "Le due password devono corrispondere!";
                }
            }
            ?>



<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP PAGE REGISTER</title>
    <link rel="stylesheet" href="./style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">

</head>
<body>
    <div class="flex w-full bg-gradient-sx h-full min-h-screen">
        <div class="flex flex-col flex-[2]">
            <div class="logo flex items-center p-4">
                <a href="./index.html"><img src="./img/logo.svg" alt="" class="w-16 h-12"></a>
                <a href="./index.html"><span class="p-2 text-2xl font-bold">Reservice</span></a>
            </div>
            <div class="flex-adjust h-full">   <!-- lato a sinistra  -->
                <form action="" method="post" class="flex flex-col items-center">
                    <h1 class="titles">Registra il tuo account</h1>
                    <p class="subtitles"><?php echo $message; ?></p>
                    <input type="email" placeholder="Email" name="user" id="user" class="form-input">
                    <input type="password" placeholder = "Password" name="pass" id="pass" class="form-input">
                    <input type="password" name="pass2" id="pass2" placeholder="Conferma password" class="form-input">
                    <input type="submit" value="Conferma" class="login-btn bg-gradient-dx w-1/2 text-white">
                    <p class="lg:hidden">Hai già un'account?<a href="./login.php" class="reg-links">Accedi</a></p>
                </form>
            </div>
        </div>
        <div class="flex-[1] bg-gradient-dx text-white hidden lg:block lg:flex-adjust lg:flex-col">  <!-- lato a destra  -->
            <h2 class="titles text-4xl">Hai già un'account?</h2>
            <p class="subtitles">Accedi per visualizzare e prendere <br> i tuoi appuntamenti</p>
            <a href="./login.php" class="login-btn bg-gradient-sx w-1/3 text-base text-black">Accedi</a>
        </div>
    </div>
</body>
</html>