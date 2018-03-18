## **1** 选择器

> 一个标签可以被多个选择器选中，共同作用；

### 标签选择器

1. 优点：所有标签都能作为选择器；无论这个标签藏得多深，都能被找到；选择的是所有而不是一个。
2. 定义：标签选择器选择的是页面上所有这种类型的标签，所以描述的是共性，无法描述一个元素的特性。

```
<h1>我是标题</h1>

<style type="text/css">
	h1{
		color: red;
	}
</style>
```



### id选择器

1. 任何的html标签都可以有id属性，表示这个标签的名字

2. 命名：这个标签的名字可以任取，但是只能有字母、下划线、数字组成，必须以字母开头；不能和标签同名。

3. 一个html文件中不能出现相同的id。

   > 一个html标签中可以有多个id，只是这种写法不太符合w3c的标准，尽量避免这么写，但是如果这么写了，在css里不会有什么错误,但是在JS中会依照第一个来识别.

4. 选择符是#

```
<h1 id="id_1">我是标题</h1>

<style type="text/css">
		#id_1{
			background-color: #ddd;
			font-size: 26px;
		}
	</style>
```

### 类选择器

1. 类选择器的符号是“.”
2. 类就是class属性，任何标签都可以携带class属性。class属性可以重复。
3. 同一个标签可以同时携带多个类，类名之间用空格隔开
4. 类是提供公共服务的，凡是携带某个类就有这个类的效果；不要试图用一个类把这个标签的所有样式写完；
5. 每个类要尽可能的小，有“公共”的概念，能让更多的标签使用。使用多个类来实现标签的样式
6. 尽可能的使用class，js要通过id属性得到标签；一般情况下我们会认为有id的元素有动态效果；

```
<style type="text/css">
	.color_green{
		color:green;
	}
	.set_fontSize{
		font-size: 30px;
	}
	.set_fontDirection{
		text-decoration: underline;
	}
</style>

<p class="color_green set_fontSize">我是段落1</p>
<p class="set_fontDirection">我是段落2</p>
<p class="set_fontDirection set_fontSize">我是段落3</p>
```

### 后代选择器

1. 后代选择器用空格表示
2. 后代元素并不只是指其直接子元素还包括其他子元素。

```
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<title>后代选择器</title>
	<style type="text/css">
		.box p{
			color: red;
		}
		.box1 p{
			text-decoration: underline;
		}
	</style>
</head>
<body>
	<div class="box">
		<p>段落1</p>
		<p>段落1</p>
		<p>段落1</p>
	</div>
	<div class="box1">
		<p>我是p标签</p>
		<ul>
			<li><p>我是段落</p></li>
		</ul>
	</div>

</body>
```

### 交集选择器

1. 交集选择器之间没有空格,直接用"."连接,可以连接多个
2. 兼容到IE7,IE6不兼容
3. 交集选择器一般是以标签开头的

```
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<title>交集选择器</title>
	<style type="text/css">
		h3.special{
			color: red;
		}
	</style>
</head>
<body>
	<h3 class="special">我是标题</h3>
	<h3>我是标题</h3>
	<h3 class="special">我是标题</h3>
	<p>我是段落</p>
	<p class="special">我是段落</p>
	<p>我是段落</p>
	<p class="special">我是段落</p>
	<p class="special">我是段落</p>
	<p>我是段落</p>

</body>
```

### 并集选择器

1. 并集选择器之间是用“,”隔开的。

```
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<title>并集选择器</title>
	<style type="text/css">
		h3,li{
			color: red;
		}
	</style>
</head>
<body>
	<h3>我是标题</h3>
	<p>我是段落</p>
	<ul>
		<li>我是111</li>
		<li>我是222</li>
	</ul>
</body>
```

### 通配符选择器

1. 通配符“*”表示页面上所有的元素
2. 页面上的标签越多，效率越低，所以页面上基本不出现这个选择器。

### 儿子元素选择器

1. 儿子选择器用“>”表示。
2. 儿子和后代不同，只能选择儿子，不能选择其他的。
3. 兼容到IE7,IE6不兼容

```
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<title>儿子集选择器</title>
	<style type="text/css">
		div>p{
			color: red;
		}
	</style>
</head>
<body>
	<div>
		<h3>我是标题</h3>
		<!-- 能被选中 -->
		<p>我是段落</p> 
		<ul>
			<!-- 不能被选中 -->
			<li><p>djfgh，这是div的重孙子</p></li>
		</ul>
	</div>
</body>
```

### 序选择器

1. IE8开始兼容，6和7都不兼容。
2. 如果要兼容6和7，就要添加类名

```
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<title>序选择器</title>
	<style type="text/css">
		/*选择第一个*/
		ul li:first-child{
			color: red;
		}
		/*选择最后一个*/
		ul li:last-child{
			color: green;
		}
		ul li:
	</style>
</head>
<body>
	<div>
		<ul>
			<li>1111</li>
			<li>2222</li>
			<li>3333</li>
			<li>4444</li>
			<li>5555</li>
		</ul>
	</div>
</body>
```


## **2** 浏览器

windows xp操作系统安装的是IE6

windows 7操作系统安装的是IE8

windows 8操作系统安装的是IE9

windows 10操作系统安装的是edge

> 浏览器的兼容问题基本上就是出现在IE6和IE7身上,这两个是特别低级的浏览器







## **3** 字符属性

1. color:red; 字符颜色
2. font-size:40px;字体大小
3. font-weight:blod;加粗
4. font-weight:normal;正常
5. font-style：italic; 斜体
6. font-style:normal; 正常
7. text-decoration:underline; 下划线



## **4**  浮动

1. 浮动的元素会脱标
2. 目的：让多个块级元素浮动在同一行；
3. 取值：left；right；none；

### 清除浮动
1. 根据情况需要来清除浮动
2. 目的：为了解决父盒子高度为0的问题

#### 清除浮动的方式
1. 额外标签法
2. overflow：hidden；
3. 伪元素清除法(最常用)

```
    .clearfix:after{
        content:"";
        visibility:hidden;
        display:block;
        height:0;
        clear:both;
    }
```
4. 双伪元素

```
.clearfix:before, .clearfix:after{
    display: table;
    content:"";
}
.clearfix:after{
    clear: both;
}
```
## **5**  鼠标样式
1. cursor:pointer; 鼠标变成小手的形状
2. cursor:default; 默认形状小箭头
3. cursor:move; 移动时显示的样式
4. cursor:text; 输入时显示光标的形状


**如果喜欢，欢迎关注我的微信公众号：**

![敲行代码再睡觉](http://upload-images.jianshu.io/upload_images/3118842-f6a03f84db16dbf5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




