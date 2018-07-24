<?php
	require_once('db-connect.php');
	class loginSignupApp extends DBConnect{
		private static $conn;
		public static function connect(){
			self::$conn = self::dataBaseConnect();
			// $resp['message'] = self::$conn;
			// $resp['status'] = "ok";
			// echo json_encode($resp);
		}
		public static function login($post){
			$username = $post['username'];
			$password = $post['password'];
			$sql = "SELECT name FROM users WHERE email='$username' AND password='$password'";
			echo json_encode(self::runQuery($sql));
		}
		public static function runQuery($sql){
			if($res = self::$conn->query($sql)){
				if($res->num_rows>0){
					$resp['data'] = $res->fetch_assoc();
					$resp['status'] = "ok";
				}
				else{
					$resp['data'] = "No rows Found";
					$resp['status'] = "no";
				}
			}
			else{
				$resp['data'] = "Query Error";
				$resp['status'] = "no";
			}
			return $resp;
		}
	}
	loginSignupApp::connect();
?>