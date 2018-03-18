

function hide(obj) {
    obj.style.display = "none";
}

function show(obj) {
    obj.style.display = "block";
}

function scroll() {
    if (window.pageXOffset != null){
        return{
            left: window.pageXOffset,
            top: window.pageYOffset
        }
        //判断当前是否是怪异模式浏览器
    }else if (document.compatMode == "CSS1Compat"){ //当前是已经生命了DTD的正常浏览器
        return{
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }else {
        return{
            left: document.body.scrollLeft,
            top: document.body.scrollTop
        }
    }
}

function client() {
    if (window.innerWidth != null){
        return{
            width: window.innerWidth,
            height: window.innerHeight
        }
    }else if (document.compatMode == "CSS1Compat"){
        return{
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    }else {
        return{
            width: document.body.clientWidth,
            height: document.body.clientHeight
        }
    }
}

//获得当前样式属性的值函数
function getStyle(obj, attr) {
    if (obj.currentStyle){
        return obj.currentStyle[attr]; //兼容ie浏览器
    }else {
        // 兼容标准浏览器的
        return window.getComputedStyle(obj, null)[attr];
    }
}

//    封装的缓动动画函数
function slowAnimation(obj, json, fn) {
    clearInterval(obj.timer);
    var flag = true;
    obj.timer = setInterval(function () {
        for (var key in json){
            // 得到目前某个属性的值
            var current = 0;
            if (key == "opacity"){
                current = Math.round(parseInt(getStyle(obj, key) * 100)) || 0;
            }else {
                current = parseInt(getStyle(obj, key));
            }

            // 得到 步长
            var step = (json[key] - current) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            // 赋值给需要移动的对象
            //判断透明度
            if (key == "opacity"){
                //判断该浏览器是否支持opacity
                if ("opacity" in obj.style){
                    obj.style.opacity = (current + step) / 100;
                }else {
                    obj.style.filter = "alpha(opacity = "+json[key]*100+")"
                }
            }else if (key == "zIndex"){
                obj.style.zIndex = json[key];
            }else {
                obj.style[key] = current + step + "px";
            }

            // 判断当前是否有属性还没有运动到终点
            if (current != json[key]){
                flag = false;
            }
        }
        if (flag){
            clearInterval(obj.timer);

            //当计时器结束以后，才开始执行回调函数
            // 执行回调函数
            if (fn){
                fn();
            }
        }
    }, 20);
}

//  封装匀速运动的函数
function uniformAnimate(obj,target){
    clearInterval(obj.timer);  // 先清除定时器
    var speed = obj.offsetLeft < target ? 10 : -10;  // 用来判断 应该 +  还是 -
    obj.timer = setInterval(function() {
        var result = target - obj.offsetLeft; // 因为他们的差值不会超过10
        obj.style.left = obj.offsetLeft + speed + "px";
        if(Math.abs(result)<=10)  // 如果差值不小于 10 说明到位置了
        {
            clearInterval(obj.timer);
            obj.style.left = target + "px";  // 有 10 像素差距   我们直接跳转目标位置
        }
    },10)
}

