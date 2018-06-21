// 项目的js入口文件

// 导入jQuery
import $ from 'jquery'

$(function(){
    $('li:odd').css('background-color', 'lightblue');
    $('li:even').css('background-color', 'yellow');
})