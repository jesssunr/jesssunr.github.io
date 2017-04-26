$(document).ready(function() { 
	$(".header_item").hover(function(){
		var $text = $(this).find(".text");
		$text.css("opacity", "1");
		$text.css("font-weight", "bold")

		var $black = $(this).find(".black-text");
		$black.css("opacity", "1");
		$black.css("font-weight", "bold")

		var $image = $(this).find("img");
		$image.css("opacity", "0.8");
	},
	function(){ 
		var $text = $(this).find(".text");
		$text.css("opacity", "0.5");

		var $black = $(this).find(".black-text");
		$black.css("opacity", "0.5");

		var $image = $(this).find("img");
		$image.css("opacity", "1");
	});
})