$(function() {
	var ROOT_URL = 'https://api.douban.com/v2/';
	var RECENT_MOVIE = ROOT_URL + 'movie/in_theaters';
	var TOP10_MOVIE = ROOT_URL + 'movie/top250';
	requestDataFromNet(RECENT_MOVIE, setHtmlRecentMovieData);
	requestDataFromNet(TOP10_MOVIE, setHtmlTop10Movie);
});
// 获取正在热映的电影的数据
function setHtmlRecentMovieData(data){
	var html = template("hot_movie_html", data);
	$("#any_movies").html(html);
	// 正在热映部分的margin设置
    $("#index_movie .hot-movie  ul > li").each(function(i, li) {
    	var $this = $(this);
    	if (i % 4 == 0) {
    		$this.css("margin-left", "15px");
    	}else{
    		$this.css("margin-left", "30px");
    	}
    	// 正在热映部分的分数设置
    	var score = parseInt(data.subjects[i].rating.average);
    	console.log(score);
    	$this.find('.item-stars').css("background-position", "0 "+ (-11*(10-score)) +"px");
    });
    


};
// 获取top10的电影数据
function setHtmlTop10Movie(data){
	var html = template("top10_movie_html", data);
	$("#top10-movie").html(html);

}
// 封装的ajax, 获取网络上的数据
function requestDataFromNet(url, callback){
	$.ajax({
		url: url,
		type: 'get',
		dataType: 'jsonp',
	})
	.done(function(data) {
		callback(data);
	})
	.fail(function() {
		console.log("error");
	});
}