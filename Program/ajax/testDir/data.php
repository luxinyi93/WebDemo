<?php
require_once('connect.php');

$code = $_GET['citycode'];//��ȡʡ�����ı���
$callback = $_GET['callback'];
$flag = $_GET['flag'];//��־λ������������ʡ������һ��

if($flag == 1){
	$query=mysql_query("select * from province order by id");
}else if($flag == 2){
	$query=mysql_query("select * from city where provincecode = '".$code."' order by id" );
}else if($flag == 3){
	$query=mysql_query("select * from area where citycode = '".$code."' order by id" );
}
$sayList = [];
while ($row=mysql_fetch_array($query)) {
	$sayList[] = array(
		'code'=>$row['code'],
		'name'=>$row['name']
    );
}
if($sayList){
	echo $callback.'('.json_encode($sayList).')';
}else{
	echo $callback.'('.'[]'.')';
}

?>