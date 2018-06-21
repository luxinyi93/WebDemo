/**
 * Created by jiaoshou on 2016/1/24.
 */
//创建XMLHttpRequest对象
function createXHR() {
    var xhr = null;
    if (XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xhr;
}

//type,url,data,async,fnSuccess,fnError

// var data = {type:"get",url:"",data:null,async:true,success:  ,error:  };
function ajax(data) {
    // 创建XMLHttpRequest对象
    var xhr = createXHR();
    var type,async;
	// 判断是get请求还是post请求
    type = data.type == "post" ? "post" : "get";
	// 判断是否要异步请求
    async = data.async?true:false;
    //2
    xhr.open(type,data.url,async);
    //如果是post，设置请求头
    if (type == "post") {
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    }
    //3
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                if (typeof  data.success == "function") {
                    //调用回调函数，传入服务器返回的结果
                    data.success(xhr.responseText);
                }
            }else{
                if(typeof data.error == "function") {
                    data.error();
                }

            }
        }
    }
    //4
    xhr.send(data.data);
}