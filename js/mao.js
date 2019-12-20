$(function(){
	// 右边图片下方文字动效js
	// 鼠标移上
	//jquery live $(selector).live(event,data,function) 当鼠标移上，执行函数寻找div里的class i 并停止当前的顶格元素效果，animate改变 "div" 元素的高度为负值向上移动文字实现动效
	$(".listtyle1").live("mouseenter",function(){
		var _this = $(this);
		_this.find("div.i").stop().animate({marginTop:"-100px"},400,function(){});
	});
	//鼠标离开
	$(".listtyle1").live("mouseleave",function(){
		var _this = $(this);
		_this.find("div.i").stop().animate({marginTop:"0px"},400,function(){});
	});


	// 左方下拉列表js
	// 控制展开和收起来
	$(".filter_otherbtn").toggle(function(){
		var _this = $(this);
		_this.html("<< 收起");
		$(this).prev().find(".others").fadeIn(function(){

		});
	},function(){
		var _this = $(this);
		_this.html("展开全部 >>");
		$(this).prev().find(".others").fadeOut(function(){

		});
	});
	// 	普通筛选展开
	$("#fliterstyle1 dt").click(function(){
		var _this=$(this);
		if(_this.parent().hasClass("on")){
		}else{
			_this.parents(".tabcon").find("dl.on").find("dd").slideUp(function(){
			});
			_this.parents(".tabcon").find("dl.on").removeClass("on");
			_this.next().slideDown(function(){
				_this.parent().find(".long").slideDown();
			});
			_this.parent().addClass("on");
		}
	});
	// 普通筛选切换
	$("#fliterstyle1 .tab li").click(function(){
		var po = $(this).attr("po");
		if(!$(this).hasClass("current")){
			$(this).siblings().removeClass("current");
			$(this).addClass("current");
		}
		$("#fliterstyle1 .tabcon").each(function(){
			if($(this).attr("po") == po){
				$(this).siblings(".tabcon").hide();
				$(this).show();
			}
		});
	});
});