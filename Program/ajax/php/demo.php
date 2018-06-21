<?php
$flag = 1;
$host="localhost";
$db_user="root";
$db_pass="";
$db_name="address";
$timezone="Asia/Beijing";

$link=mysqli_connect($host,$db_user,$db_pass);

if($link){
	echo 'success';
}else{
	echo 'failure';
}
?>

