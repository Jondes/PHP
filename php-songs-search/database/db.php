<?php
    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $dbname = "php_song_search";
    $connection = mysqli_connect($servername, $username, $password, $dbname);
      
    // Check connection
    if(!$connection){
        die('Database connection error : ' .mysql_error());
    }
    
?>