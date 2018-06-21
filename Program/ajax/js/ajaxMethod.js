// 获得一个XMLHttpRequest对象，并且兼容ie浏览器
function getHttpObject() {
    if (typeof XMLHttpRequest == "undefined"){
        XMLHttpRequest = function () {
            try {return new ActiveXObject("Msxml2.XMLHTTP.6.0");}
            catch (e){}
            try {return new ActiveXObject("Msxml2.XMLHTTP.3.0");}
            catch (e){}
            try {return new ActiveXObject("Msxml2.XMLHTTP.6.0");}
            catch (e){}
        }
    }else if (typeof XMLHttpRequest != "undefined"){
        return new XMLHttpRequest();
    }else {
        throw new Error("NO XHR OBJECT");
    }
}

// 执行XMLHttpRequest对象方法
// 参数1：XMLHttpRequest对象；参数2：url地址
function getNewContent(requestObj, url) {
    if (requestObj){
        requestObj.open("GET", url, true);
        // 这是一个回调函数，请求之后要进行的操作在这里执行
        requestObj.onreadystatechange = function () {
            if (requestObj.readyState == 4 && requestObj.status ==200){

            }
        };
        requestObj.send(null);
    }else {
        console.log("requestObj is undefined");
    }
}