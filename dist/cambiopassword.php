<?php
// REVISIONATO IL 31/3/2023
ob_start();
session_start();
include "connessione.php";
$message = "";

error_reporting(0);


//PRENDE I DATI
$mail = $_POST['user'];
$oldPassword = $_POST['oldPass'];
$newPassword = $_POST['newPass'];
$newPassword2 = $_POST['newPass2'];

//CHECK

if ($mail != "" && $oldPassword != "" && $newPassword != "" && $newPassword2 != "") {
    $qr = ("SELECT * FROM user WHERE user='$mail'");
    $result = mysqli_query($db, $qr);

    $linea = mysqli_fetch_array($result, MYSQLI_ASSOC); //ARRAY
    $numeroLinee = mysqli_num_rows($result);  //NUMERO LINEE 

    if ($numeroLinee > 0) {
        $dbMail = $linea["user"];  // PRENDE USER E PASSWORD DAL DB
        $dbPassword = $linea["password"];

        if ($dbMail == $mail && password_verify($oldPassword, $dbPassword) == true) {
            if ($oldPassword != $newPassword){
                if (strlen($newPassword) >= 8 && strlen($newPassword2) >= 8){
                    if ($newPassword==$newPassword2){
                        $newPassword = password_hash($newPassword,PASSWORD_BCRYPT);
                        $qr = "UPDATE user
                        SET password = '$newPassword'
                        WHERE user = '$dbMail'";
                        $result = mysqli_query($db,$qr);
                        if ($result){
                            header("Location: areapriv.php");
                        }
                        else{
                                $message = "Errore nella registrazione! Assicurati di aver inserito tutti i dati!";
                        }
                    }
                    else{
                        $message="La password di conferma deve essere uguale a quella nuova";
                    }
                }
                else{
                    $message="La password deve avere almeno 8 caratteri";
                }
            }
            else {
                $message="La nuova password deve essere diversa da quella vecchia";
            }
        } else {
            $message = 'Utente o password Errati!';
        }
    } else {
        $message = "Non ci sono account registrati a questo nome!";
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
    <section class="absolute top-0 flex flex-col w-full min-h-screen">
        <div class="flex bg-white t-sx w-full h-full min-h-screen">
            <div class="flex flex-col flex-[2]">
                <div class="logo flex items-center p-4">
                    <a href="./index.html"><img src="./img/logo.svg" alt="" class="w-16 h-12"></a>
                    <a href="./index.html"><span class="p-2 text-2xl font-bold">Reservice</span></a>
                </div>
                <div class="flex-adjust h-full">
                    <form method="post" class="flex flex-col items-center">
                        <h1 class="titles">Cambio password</h1>
                        <p class="subtitles  text-red-700"><?php echo $message; ?></p>
                        <input type="email" placeholder="Email" name="user" id="user" class="form-input" style=" user-select:none; ">
                        <input type="password" placeholder="Vecchia Password" name="oldPass" id="oldPass" class="form-input" style=" user-select:none; ">
                        <input type="password" placeholder="Nuova Password" name="newPass" id="newPass" class="form-input" style=" user-select:none; ">
                        <input type="password" placeholder="Conferma Nuova Password" name="newPass2" id="newPass2" class="form-input" style=" user-select:none; ">
                        <input type="submit" value="Conferma" class="login-btn bg-gradient-dx w-1/2 text-white" style=" user-select:none; ">
                    </form>
                </div>
            </div>
        </div>
    </section>
</body>

</html>