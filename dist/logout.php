<?php
   session_start();
   unset($_SESSION["username"]);
   unset($_SESSION["password"]);
   
   echo 'Logout Effettuato Aspetta 1 secondo';
   header('Refresh: 1; URL = login.php');
?>