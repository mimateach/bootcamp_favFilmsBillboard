<?php

 //datos de conexión a la base de datos

$server = "localhost";
$user = "root";
$password = "" ; //para mamp hay que poner contraseña, poner "root"
$nameDataBase = "ListOfFilms";

try {
    $conexion = new PDO("mysql:host=$server:dbname=$nameDataBase, $user, $password");
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "WELL DONE";
}

catch (PDOException $e)
{
    echo "Conection failed: " . $e->getMessage();""

}