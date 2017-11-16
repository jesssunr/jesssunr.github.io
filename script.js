$(document).ready(function() {
	$(".emoji-face").hide();
	$(".emoji-mouth").hide();
	$(".text-holder").hide();
	$("#next2").hide();
	$("#back1").hide();
	$("#back2").hide();
	$("#done").hide();
	$("#clear").hide();
	$("#help").show();
	$("#effect").hide();

	$(".emoji-eyes").click(function(){
		var id = $(this).attr('id');
		var eyes = document.getElementById(id); 
		var eyes_txt = eyes.textContent || eyes.innerText;
		var str = String(eyes_txt); 
		var eyes_splitted = str.split(" ");
		$("#left-eye-holder").text(eyes_splitted[0]);
		$("#right-eye-holder").text(eyes_splitted[1]);
		$("#left-eye-holder").show();
		$("#right-eye-holder").show();
	});

	$(".emoji-face").click(function(){
		$("#left-eye-holder").show();
		$("#right-eye-holder").show();
		var id = $(this).attr('id');
		var face = document.getElementById(id).innerText;
		var str = String(face); 
		var face_splitted = str.split(" ");
		$("#left-face-holder").text(face_splitted[0]);
		$("#right-face-holder").text(face_splitted[1]);
		$("#left-face-holder").show();
		$("#right-face-holder").show();
	});

	$(".emoji-mouth").click(function(){
		$("#help").hide();
		var id = $(this).attr('id');
		var str = document.getElementById(id).innerText; 
		$("#mouth-holder").text(str);
		$("#mouth-holder").show();
	});

	$("#next1").click(function(){
		$(".emoji-eyes").hide();
		$(".emoji-face").show();
		$("#left-eye-holder").show();
		$("#right-eye-holder").show();
		$("#next1").hide();
		$("#next2").show();
		$("#title").text("Choose my face!");
		$("#back1").show();
		$("#help").hide();
	});

	$("#next2").click(function(){ 
		$("#next2").hide();
		$("#back1").hide();
		$("#back2").show();
		$(".emoji-face").hide();
		$(".emoji-mouth").show();
		$("#eye-holder").show();
		$("#left-face-holder").show();
		$("#right-face-holder").show();
		$("#title").text("Choose my mouth!");
		$("#done").show();
	});

	$("#back1").click(function(){ 
		$(".emoji-face").hide();
		$(".emoji-eyes").show();
		$("#help").show();
		$("#title").text("Change my eyes!");	
		$("#back1").hide();
		$("#next2").hide();
		$("#next1").show();
	});

	$("#back2").click(function(){ 
		$("#title").text("Choose my face!");
		$(".emoji-mouth").hide();
		$(".emoji-face").show();
		$("#done").hide();
		$("#next2").show();
		$("#back1").show();
		$("#back2").hide();
	});

	$("#done").click(function(){ 
		$("#left-eye-holder").show();
		$("#right-eye-holder").show();
		$("#left-face-holder").show();
		$("#right-face-holder").show();
		$("#mouth-holder").show();
		$("#back2").hide();
		$("#title").text("Copy me, copy me!!");	
		$("#help").show();
		$("#done").hide();
		$("#clear").show();
		$(".emoji-mouth").off("click");
		loop.start();
	});

	$("#clear").click(function(){ 
		$("#left-eye-holder").hide();
		$("#right-eye-holder").hide();
		$("#left-face-holder").hide();
		$("#right-face-holder").hide();
		$("#mouth-holder").hide();
		$(".emoji-mouth").hide();
		$(".emoji-eyes").show();
		$("#title").text("Choose my eyes!");
		$("#clear").hide();
		$("#next1").show();
		$('.star').remove();
	});

	var limit = 100,
    body = document.body;
	loop = {
	    start: function() {
	        for (var i = 0; i <= limit; i++) {
	            var star = this.newStar();
	            star.style.top = this.rand() * 100 + "%";
	            star.style.left = this.rand() * 100 + "%";
	            star.style.webkitAnimationDelay = this.rand() + "s";
	            star.style.mozAnimationDelay = this.rand() + "s";
	            body.appendChild(star);
	        };
	    },
	    rand: function() {
	        return Math.random();
	    },
	    newStar: function() {
	        var d = document.createElement('div');
	        d.innerHTML = '<figure class="star"><figure class="star-top"></figure><figure class="star-bottom"></figure></figure>';
	        return d.firstChild;
	    },
	};

});
