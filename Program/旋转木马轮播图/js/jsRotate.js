window.onload = function () {
    var rotate_box = $("rotate_box");
    var arrow = $("arrow");

    rotate_box.onmouseover = function () {
        slowAnimation(arrow, {opacity: 100});
    }
    rotate_box.onmouseout = function () {
        slowAnimation(arrow, {opacity: 0});
    }
}