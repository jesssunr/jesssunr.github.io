$(document).ready(function() {
	$("#personalization").click(function() {
		$('html, body').animate({
			scrollTop: $("#personalize_container").offset().top}, 500);
		});
	$("#selections").click(function() {
		$('html, body').animate({
			scrollTop: $("#container").offset().top}, 500);
		});
	$("#subtitle").fadeIn(2500).removeClass('hidden');
	$("#about").click(function() {
		$('html, body').animate({
			scrollTop: $("#about_container").offset().top}, 500);
		});
});