<?php
$cityName = $_GET['cityName'];
if($cityName == '北京'){
	echo '{"cityCode":"101010100"}';
}else if($cityName == '上海'){
	echo '{"cityCode":"101020100"}';
}else if($cityName == '广州'){
	echo '{"cityCode":"101280101"}';
}else if($cityName == '深圳'){
	echo '{"cityCode":"101280601"}';
}