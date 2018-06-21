$.ajax({
    type:"get",
    url:"http://.....",
    dataType:"jsonp",
	jsonp: "cb",
	jsonpCallBack: "callback",
	// 成功获得数据
    success: function (data) {
		//解析数据;
    },
    error: function () {
       
    }
});