
$(function(){

	function moveNext(){
		var itemWidth = $(".wrap.carousel-item").width();//获取轮播器宽度，变量1
		var windowWidth = $(window).width();
		var leftValue = (windowWidth - itemWidth)/2;
		var current = $(".current");//获取当前图片，变量2
		var childrenNum = $(".carousel div.wrap");//获取图片数量，变量3
		var imgNumber = childrenNum.length - 1;
		//若当前在动画中，则调用函数时不执行
		if(current.is(":animated")){
			return false;
		}
		//获取下张图片
		if(current.index() == imgNumber){
			var nextItem = $(".view-content > .wrap").eq(0);//获取第一张图片节点，变量4
		}
		else{
			var nextItem = current.next();
		}
		//更改下一张图片的位置，进入准备状态
		nextItem.removeClass("hide");
		nextItem.css("left",windowWidth);
		//当前图片隐藏
		current.animate({left:-itemWidth-leftValue,opacity:'0'},1000,function(){
			current.removeClass("current").addClass("carousel-item hide").removeAttr("style");
			current.css("left",-itemWidth);
		});
		//下一张图片出现
		nextItem.animate({left:leftValue,opacity:'1'},1000,function(){
			nextItem.addClass("current").removeClass("carousel-item").removeAttr("style");
			nextItem.css("left","0");
		});
	}

	function movePrev(){
		var itemWidth = $(".wrap.carousel-item").width();//获取轮播器宽度，变量1
		var windowWidth = $(window).width();
		var leftValue = (windowWidth - itemWidth)/2;
		var current = $(".current");//获取当前图片，变量2
		var childrenNum = $(".carousel div.wrap");//获取图片数量，变量3
		var imgNumber = childrenNum.length - 1;
		//若当前在动画中，则调用函数时不执行
		if(current.is(":animated")){
			return false;
		}

		if(current.index() == 0){
			var prevItem = $(".view-content > .wrap").eq(imgNumber);//获取最后一张图片节点，变量4
		}
		else{
			var prevItem = current.prev();
		}
		prevItem.removeClass("hide");
		prevItem.css("left",-itemWidth);
		prevItem.animate({left:leftValue,opacity:'1'},1000,function(){
			prevItem.addClass("current").removeClass("carousel-item").removeAttr("style").css("left","0");
		});
		current.animate({left:itemWidth+leftValue,opacity: '0'},1000,function(){
			current.removeClass("current").addClass("carousel-item hide").css("left","windowWidth");
		});
	}

	$(".next").click(function(){
		moveNext();
	});

	$(".previous").click(function(){
		movePrev();
	});

	var stopScroll = false;

	function stopScrolling(){
		$(".carousel-controls > .play").removeClass("pause");
		stopScroll = true;
	}

	function beginScrolling(){
		$(".carousel-controls > .play").addClass("pause");
		stopScroll = false;
	}

	$(".carousel-controls > .play").click(function(){
		if(stopScroll == false){
			stopScrolling();
		}else{
			beginScrolling();
		}

		return false;
	});

	setInterval(function autoScroll(){
		if(stopScroll == false)
			moveNext();
	},5000);
});