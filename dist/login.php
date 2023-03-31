<?php
            // REVISIONATO IL 31/3/2023
            ob_start();
            session_start();
            include "connessione.php";
            $message = "Accedi per visualizzare e prendere i tuoi appuntamenti";

            error_reporting(0);
            if ($_SESSION['username']){
                header('location: areapriv.php');}
            
            //PRENDE I DATI
            $nome = $_POST['user']; 
            $pass = md5($_POST['pass']); 
            
            //CHECK

            if ($nome != "" && $pass != ""){
                $qr = ("SELECT * FROM user WHERE user='$nome'");    
                $result = mysqli_query($db,$qr); 

                $linea = mysqli_fetch_array($result, MYSQLI_ASSOC); //ARRAY
                $numeroLinee = mysqli_num_rows($result);  //NUMERO LINEE 

                if($numeroLinee > 0){
                    $name = $linea["user"];  // PRENDE USER E PASSWORD DAL DB
                    $password = $linea["password"]; 
                    $verificato = $linea["verificato"]; 

                        if ($name == $nome && $pass == $password){
                            if ($verificato == 1){
                                $_SESSION['valid'] = true;
                                $_SESSION['timeout'] = time();
                                $_SESSION['username'] = $name;
                                header('location: areapriv.php');
                            }else{// MANDA ALLA VERIFICA
                                header('location = conferma.php');
                                $_SESSION['mail'] = $nome;
                            }
                        
                        }else{
                            $message = 'Utente o password Errati!';
                        }
                    }else{
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
    <div class="flex bg-gradient-sx w-full h-full min-h-screen">
        <div class="flex flex-col flex-[2]">
            <div class="logo flex items-center p-4">
                <a href="./index.html"><img src="./img/logo.svg" alt="" class="w-16 h-12"></a>
                <a href="./index.html"><span class="p-2 text-2xl font-bold">Reservice</span></a>
            </div>
            <div class="flex-adjust h-full">   <!-- lato a sinistra  -->
                <form method="post" class="flex flex-col items-center">
                    <h1 class="titles">Accedi al tuo account</h1>
                    <p class="subtitles"><?php echo $message; ?></p>
                    <input type="email" placeholder="Email" name="user" id="user" class="form-input">
                    <input type="password" placeholder = "Password" name="pass" id="pass" class="form-input">
                    <input type="submit" value="Conferma" class="login-btn bg-gradient-dx w-1/2 text-white">
                    <p class="lg:hidden text-center">Non hai un'account?<a href="./reg.php" class="reg-links">Registrati ora!</a></p>
                </form>
            </div>
        </div>

        <div class="flex-[1] text-white bg-gradient-dx hidden lg:block lg:flex-adjust lg:flex-col">  <!-- lato a destra  -->
            <h2 class="titles text-4xl">Non hai un'account?</h2>
            <p class="subtitles">Registrati per poter iniziare ad usare <br> il nostro servizio</p>
            <a href="./reg.php" class="login-btn bg-gradient-sx w-1/3 text-base text-black">Registrati</a>
        </div>
    </div>
</body>
</html>




