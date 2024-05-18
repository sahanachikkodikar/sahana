<?php
error_reporting(0);
$servername="localhost";
$username="root";
$password="";
$database_name="test";
$conn=new mysqli($servername,$username,$Password,$database_name);
if($conn->connect_error)
{
	die("Connection Failed:" .$conn->connect_error);
}
echo "connection succesfully";
?>