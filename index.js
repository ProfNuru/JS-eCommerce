$("document").ready(function(){
	//Toggle small screen menu
	$(".toggle-menu").on("click", function(){
		if($(".hidden-nav-list > a").css("right") == "-95px"){
			$(".hidden-nav-list > a").each(function(i){
				//Slide in
				$(this).animate({
					right: 0
				},
				500 + (300 * (i+1)));
			});
		}else{
			$(".hidden-nav-list > a").each(function(i){
				//Slide out
				$(this).animate({
					right: -95
				},
				500 + (200 * (i+1)));
			});
		}
	});

});