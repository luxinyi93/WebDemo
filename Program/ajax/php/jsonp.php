<?php
	// get到前端的回调方法,得到的是回调方法的名字
	// 此处的$callback值为liudehua
	$callback = $_GET["_jsonp"];
	$arr = array("zhangsan", "lisi", "wangwu", "zhaoliu");
	// 相当于 handResponse(json_encode($arr));
	echo $callback."(".json_encode($arr).")";
?>