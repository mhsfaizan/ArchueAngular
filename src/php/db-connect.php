<?php
  class DBConnect{
    static private $server;
    static private $user;
    static private $password;
    static private $database;
    public static function dataBaseConnect(){
      self::$server = "localhost";
      self::$user = "root";
      self::$password = "";
      self::$database  = "archue";
      $conn = new mysqli(self::$server,self::$user,self::$password,self::$database);
      if($conn->connect_error){
        return $conn->connect_error;
      }
      else{
        return $conn;
      }
    }
  }
?>