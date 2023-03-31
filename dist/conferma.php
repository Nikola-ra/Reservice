<?php 
include "connessione.php";
session_start(); 
error_reporting(0);
$mail = $_SESSION['mail'];
$messaggio = "Inserisci il codice di conferma inviato alla mail";
if (!$mail){
    header('location: login.php');}


$qr2 = ("SELECT * FROM user WHERE user='$mail'");    
$result = mysqli_query($db,$qr2);
$line = mysqli_fetch_array($result, MYSQLI_ASSOC);
$code = $line["code"];  // PRENDE CODE DAL DB
$verificato = $line["verificato"];


if($verificato == 1){
    header("location: login.php");
}

$msg = "Ecco a te il codice di conferma: ".$code;

mail($mail,'Conferma la tua mail!',$msg);

session_unset();
session_abort();

    $code2 = $_POST['code'];
            
        if($code2 != ""){
            if ($code2 == $code){
                    $qrG = "UPDATE user SET verificato='1' WHERE user='$mail'";
                    mysqli_query($db,$qrG);
                    session_unset(); session_abort();
                    unset($_SESSION['mail']);
                    header('location: login.php');
                    }else{
                        $messaggio = "Codice errato!";
                    }
            }
            
?>




<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conferma la tua email</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <section class="flex flex-col w-full min-h-screen">
    <div class="logo flex items-center p-4">
        <a href="./index.html"><img src="./img/logo.svg" alt="" class="w-16 h-12"></a>
        <a href="./index.html"><span class="p-2 text-2xl font-bold">Reservice</span></a>
    </div>
    <div class=" flex flex-col items-center justify-center flex-1 w-full">
        <div class="max-w-[700px] max-h-1/2 h-[500px] flex flex-col items-center justify-evenly">
        <span>
            <h1 class="titles">Conferma la tua mail</h1>
            <p class="subtitles xs:text-xl text-stone-700 text-lg"><?php echo $messaggio; ?> </p>
        </span>
        <span class='p-3 text-xl'><?php echo $mail; ?></span> 
        <form action="" method="post" class="flex flex-col items-center">
            <input type="number" max="9999" min="0" placeholder="Inserisci il codice" name="code" id="code" class="form-input w-full">
            <input type="submit" value="Conferma" class="login-btn bg-gradient-dx text-white">
        </form>
        <p class="fix-pt md:pt-12 block text-center">Non hai ricevuto la mail?<a href="" class="reg-links">Invia di nuovo</a></p>
        <!--   header("location: login.php");  prossimamente--> 
        </div>
    </div>
    </section>
</body>
</html>