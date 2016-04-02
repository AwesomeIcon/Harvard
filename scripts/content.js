$(function(){
	function scrollFixed(){
		if($(window).scrollTop()>=702){
			$("#filter-drop").addClass("fixed");
		}else{
			$("#filter-drop").removeClass("fixed");		
		}
	}
	setInterval(scrollFixed,10);
});