$(function(){
	$("#subscribe-gazette-submit").mouseover(function(){$(this).css("background","#35405f");});
	$("#subscribe-gazette-submit").mouseout(function(){$(this).css("background","#4d8cc8");});

	$(".heading-tab > li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		if($(".appear").is(":visible")){
			$(".appear").css("display","none");
		}else{
			$(".appear").css("display","block");
		}
		if($(".disappear").is(":visible")){
			$(".disappear").css("display","none");
		}else{
			$(".disappear").css("display","block");
		}
	});

	var distance = 0;
	$(".controls > .next-1").click(function(){
		if(distance > -1314){
		distance -= 219;
		var leftDistance = distance + "px";
		$(".wrapli").animate({left: leftDistance},1000);
	}
	if(distance < -1095){
		$(".controls > .next-1").addClass("disabled");
	}
	if(distance < 0){
		$(".controls > .prev-1").removeClass("disabled");
	}
	});

	$(".controls > .prev-1").click(function(){
		if(distance < 0){
		distance += 219;
		var leftDistance = distance + "px";
		$(".wrapli").animate({left: leftDistance},1000);
	}
	if(distance > -219){
		$(".controls > .prev-1").addClass("disabled");
	}
	if(distance > -1314){
		$(".controls > .next-1").removeClass("disabled");
	}
	});
});