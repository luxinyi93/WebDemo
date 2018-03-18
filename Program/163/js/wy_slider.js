window.onload = function () {
    function $(id) {return document.getElementById(id);}
    //获取需要的元素
    var js_slider = $("js_slider");
    var slider_content = $("slider_content");
    var slider_cirl = $("slider_cirl");
    var slider_main = $("slider_main");
    var slider_main_imgs = slider_main.children;

    //操作元素
    for (var i = 0; i < slider_main_imgs.length; i++){
        //动态添加下方的小方块
        var slider_ctrl_icon = document.createElement("span");
        slider_ctrl_icon.innerHTML = slider_main_imgs.length - i;
        slider_ctrl_icon.className = "slider-ctrl-icon";
        slider_cirl.insertBefore(slider_ctrl_icon, slider_cirl.children[1]);
    }

    var slider_cirl_spans = slider_cirl.children;
    //给第一个小方块添加选中的样式
    slider_cirl_spans[1].className = "slider-ctrl-icon current";
    //设置初始结构，第一张在左侧盒子里显示，其他的都放到右侧
    var scrollWidth = js_slider.clientWidth;
    for (var i = 1; i <slider_main_imgs.length; i++){
        slider_main_imgs[i].style.left = scrollWidth + "px";
    }

    //实现8个span的点击事件
    var key = 0; // 标记当前显示的是第几张图片
    for (var k in slider_cirl_spans){
        slider_cirl_spans[k].onclick = function () {
            if (this.className == "slider-ctrl-prev"){
                //console.log("这是左侧按钮");
                slowAnimation(slider_main_imgs[key], {left: scrollWidth});
                --key < 0 ? key = slider_main_imgs.length-1 : key;
                slider_main_imgs[key].style.left = -scrollWidth + "px";
                slowAnimation(slider_main_imgs[key], {left: 0});
                setSquare();
            }else if (this.className == "slider-ctrl-next"){
                autoPlayer();
            }else {
                var that = this.innerHTML - 1;
                //点击的图片是当前图片后面的图片
                if (that > key){
                    slowAnimation(slider_main_imgs[key], {left: -scrollWidth});
                    slider_main_imgs[that].style.left = scrollWidth + "px";

                //点击的图片是当前图片前面的
                }else if (that < key){
                    slowAnimation(slider_main_imgs[key], {left: scrollWidth});
                    slider_main_imgs[that].style.left = -scrollWidth + "px";
                }
                key = that;
                slowAnimation(slider_main_imgs[key], {left: 0});
                setSquare();
            }

        }
    }
    //封装了一个下方span移动的函数
    function setSquare() {
        for (var i = 1; i < slider_cirl_spans.length-1; i++){
            slider_cirl_spans[i].className = "slider-ctrl-icon";
        }
        //因为key是从0开始的，所以要用key+1。
        //比如：第1张图片的索引值是0，第一个小方块的索引值是1，要对应起来的话，就要+1
        slider_cirl_spans[key+1].className = "slider-ctrl-icon current";
    }
    //开启一个定时器
    var timer = null;
    timer = setInterval(autoPlayer, 2000);

    //这个运动的函数和右侧按钮的逻辑相同，
    function autoPlayer() {
        //点击按钮的时候执行动画，当前的图片移到左边，即left值为-310；
        //原来右边的图片向左移动，显示出来，即left值变为0；
        slowAnimation(slider_main_imgs[key], {left: -scrollWidth});
        //当前图片移动之后，key要+1，因为此时要移动的图片是下一张。
        key++;
        //判断是否已经到最后一张了，如果到了，就再从0开始
        if (key > slider_main_imgs.length-1){
            key = 0;
        }
        //每次点击右侧按钮，图片都是从当前想左移出，后面的图片从右边缓动进入
        //所以要先将当前图片的下一张图片的left值设置为320；
        slider_main_imgs[key].style.left = scrollWidth + "px";
        slowAnimation(slider_main_imgs[key], {left: 0});
        setSquare();
    }

    //关闭定时器
    js_slider.onmouseover = function () {
        clearInterval(timer);
    }
    js_slider.onmouseout = function () {
        //开启定时器之前要先关闭之前的定时器
        clearInterval(timer);
        timer = setInterval(autoPlayer, 2000);
    }
}



