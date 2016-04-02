$(document).ready(function(){
	$("#main-nav a").each(function(){
		$(this).mouseover(function(){
			$(this).css("background-position-y","-40px");
			$(this).css("z-index","110");
			$(this).next("ul").css("display","block");
		});
		$(this).mouseout(function(){
			$(this).css("background-position-y","0");
			$(this).css("z-index","0");
			$(this).next("ul").css("display","none");
		});
	});
	$("#main-nav ul").each(function(){
		$(this).mouseover(function(){
			$(this).css("display","block");
			$(this).prev("a").css("background-position-y","-40px");
			$(this).prev("a").css("z-index","110");
		});
		$(this).mouseout(function(){
			$(this).css("display","none");
			$(this).prev("a").css("background-position-y","0px");
			$(this).prev("a").css("z-index","0");
		});
	});
	$("#main-nav ul li").each(function(){
		$(this).mouseover(function(){
			$(this).css("background-color","#a61d31");
			$(this).find("a").css("color","#fff");
		});
		$(this).mouseout(function(){
			$(this).css("background-color","#fff");
			$(this).find("a").css("color","#6c6c6c");
		});
	});
});