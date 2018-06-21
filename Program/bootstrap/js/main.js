
$(function() {
    function resize() {
        //获取当前的屏幕宽度
        var windowWidth = $(window).width();
        // 判断当前的屏幕尺寸是否是小屏幕
        var isSmallScreen = windowWidth < 768;
        // 根据大小设置每一张图片的尺寸
        $("#index_lunbotu > .carousel-inner > .item").each(function (i, item) {
            // 因为item是dom对象,所以要先转化为jQuery对象
            var $item = $(item);
            // 如果是小屏幕就用小图,如果是大屏幕就用大图
            // $element.data():
            // 是一个函数,专门用于取元素上的自定义属性(data-xxx)
            // 函数的参数使我们要取得属性名称(xxx);
            var imgUrl = isSmallScreen ? $item.data("img-xs") : $item.data("img-lage");
            $item.css("backgroundImage", "url('"+imgUrl+"')");
            // 当屏幕非常小的时候,我们希望图片能跟随屏幕变小而变小
            // 所以这个时候就不能再用backgroundImage, 而是采用插入img标签的形式
            if (isSmallScreen){
                $item.html("<img src='"+imgUrl+"'>");
            }else {
                // 当屏幕不再是小图时候,将img标签清除
                $item.empty();
            }
        });
        // 控制便签页的便签宽度
        var $navContainer = $(".nav-tabs");
        // 获取所有li的宽度,求和
        var width = 20; // 因为原本的ul上面有padding-left,
        $navContainer.children().each(function (i, element) {
            width += element.clientWidth;
        });
        // 判断当前ul的宽度是否超出了屏幕的宽度.如果超出了,就用横向滚动条
        if (width > $(window).width()){
            $navContainer.css("width", width)
                .parent().css("overflow-x", "scroll");
        }
    }
    // trigger('resize'); 是直接调用resize方法, 否则页面刚刷新出来的时候是不加载图片的
    $(window).on('resize', resize).trigger('resize');
    // 初始化提示效果
    $('[data-toggle="tooltip"]').tooltip();

    var $newsTitleDiv = $(".news-title")
    // 给新闻里表中的a标签添加点击事件
    $(".news .nav-pills a").on("click", function () {
        //获取当前点击的元素,将dom对象转换为jQuery对象
        var $this = $(this);
        //获取对应的点击的值
        var newsNavTitle = $this.data("title");
        //将title值设置到相应的位置
        $newsTitleDiv.text(newsNavTitle);
    });

    //  获取界面上的轮播图组件,轮播图的效果实现是相同的
    // 所以在获取轮播图组建的的时候尽量不要写死
    var $carousel = $(".carousel");
    var startX, endX;
    var offsetX = 50;
    // 注册滑动事件
    $carousel.on("touchstart",function (e) {
        // 记录下触摸开始时 的X坐标
        startX = e.originalEvent.touches[0].clientX;
    });
    $carousel.on("touchmove",function (e) {
        // 利用变量的重复赋值记录下触摸结束时X的坐标
        endX = e.originalEvent.touches[0].clientX;
    });
    $carousel.on("touchend",function (e) {
        // 在触摸结束时,比较开始位置和结束位置的X的大小
        var distance = Math.abs(endX-startX);
        if (distance > offsetX){
            // 2. 根据获得的方向,选择上一张或者下一张
            // 此处用this可以区分同一页面上的不同的轮播图
            // 谁触发的时间this就指向谁
            $(this).carousel(startX > endX ? "next" : "prev");
        }
    });


    // 1. 先获取手指在轮播图上的滑动方向:针对移动端的效果




});
