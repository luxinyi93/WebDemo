<?php
error_reporting(E_ALL ^ E_NOTICE); 
$flag = 1;
$host="localhost";
$db_user="root";
$db_pass="";
$db_name="address";
$link=mysqli_connect($host,$db_user,$db_pass, $db_name);


if(!$link){
	echo 'failure';
}
mysqli_set_charset($link,"utf8");

header("Content-Type: text/html; charset=utf-8");
// $result = mysqli_query("SELECT * FROM area");

// while($row = mysqli_fetch_array($result)){
	// echo "城市名称：" . $row['name'] . " 城市代号：" . $row['citycode'];
	// echo "<br />";
// }

$code = $_GET['citycode'];//获取省市区的编码
$callback = $_GET['callback'];
$flag = $_GET['flag'];//标志位：用来区分是省市区哪一个

if($flag == 1){
	$query=mysqli_query($link, "select * from province order by id");
}else if($flag == 2){
	$query=mysqli_query($link, "select * from city where provincecode = '".$code."' order by id" );
}else if($flag == 3){
	$query=mysqli_query($link, "select * from area where citycode = '".$code."' order by id" );
}

if (!$query) {
    echo "Error: %s\n" . mysqli_error($link);
    exit();
}

$sayList = [];
while ($row=mysqli_fetch_array($query, MYSQLI_ASSOC)) {
	$sayList[] = array(
		'code'=>$row['code'],
		'name'=>$row['name']
    );
}



if($sayList){
	echo $callback.'('.json_encode($sayList).')';//callback(Object)
}else{
	echo $callback.'('.'[]'.')';
}



mysqli_close($link);

?>

