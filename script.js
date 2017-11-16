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
	$(".emoji-eyes").click(function(){
		var id = $(this).attr('id');
		var eyes = document.getElementById(id); 
		var eyes_txt = eyes.textContent || eyes.innerText;
		var str = String(eyes_txt); 
		var eyes_splitted = str.split(" ");
		console.log(eyes_splitted[0]);
		console.log(eyes_splitted[1]);
		$("#left-eye-holder").text(eyes_splitted[0]);
		$("#right-eye-holder").text(eyes_splitted[1]);
		$("#left-eye-holder").show();
		$("#right-eye-holder").show();
	});
	$("#face-holder").hide();
	$("#next1").click(function(){

		$(".emoji-eyes").hide();
		$(".emoji-face").show();
		$("#left-eye-holder").show();
		$("#right-eye-holder").show();
		$("#next1").hide();
		$("#next2").show();
		$("#title").text("Choose Face");

		$(".emoji-face").click(function(){
			$("#help").hide();
			$("#back1").show();
			$("#left-eye-holder").show();
			$("#right-eye-holder").show();
			var id = $(this).attr('id');
			var face = document.getElementById(id).innerText; 
			// var face = face.textContent || face.innerText;
			var str = String(face); 
			var face_splitted = str.split(" ");
			console.log(face_splitted[0]);
			console.log(face_splitted[1]);
			$("#left-face-holder").text(face_splitted[0]);
			$("#right-face-holder").text(face_splitted[1]);
			$("#left-face-holder").show();
			$("#right-face-holder").show();
			$("#back1").click(function(){ 
			$(".emoji-face").hide();
			$(".emoji-eyes").show();
			$("#help").show();
			$("#title").text("Change Eyes");	
				$("#back1").hide();
					$("#next2").click(function(){ 
						$(".emoji-eyes").hide();
						$(".emoji-face").show();
						$(".emoji-mouth").hide();
						$("#title").text("Choose Face");	
						$("#next2").show();
						$("#back2").hide();
						$("#done").hide();
						$("#next2").click(function(){ 
							$("#title").text("Choose Mouth");	
							$(".emoji-eyes").hide();
							$(".emoji-face").hide();
							$(".emoji-mouth").show();
							$("#next2").hide();
							$("#done").show();
							
						});
						
					})
			
		});
	});

	$("#next2").click(function(){ 
		$("#back1").hide();
		$(".emoji-face").hide();
		$(".emoji-mouth").show();
		$("#eye-holder").show();
		$("#left-face-holder").show();
		$("#right-face-holder").show();
		$("#title").text("Choose Mouth");
		$("#help").show();
		$("#done").show();
		$(".emoji-mouth").click(function(){
			$("#help").hide();
			$("#eye-holder").show();
			$("#face-holder").show();
			var id = $(this).attr('id');
			var str = document.getElementById(id).innerText; 
			$("#mouth-holder").text(str);
			$("#mouth-holder").show();
			$("#done").show();	
			$("#back2").show();
			$("#back2").click(function(){ 
					$("#title").text("Change Face");
					$("#help").show();	
					$(".emoji-mouth").hide();
					$(".emoji-face").show();
					$("#done").hide();
					$("#next2").show();
					$("#back2").hide();
					$("#next2").click(function(){ 
						$(".emoji-mouth").show();
						$(".emoji-face").hide();

				});
			});
		});
	$("#next2").hide();
	
	});
	$("#done").click(function(){ 
		$("#left-eye-holder").show();
		$("#right-eye-holder").show();
		$("#left-face-holder").show();
		$("#right-face-holder").show();
		$("#mouth-holder").show();
		$("#back2").hide();
		$("#title").text("Copy Your Custom Emoji");	
		$("#help").show();
		$("#done").hide();
		$("#clear").show();
		$(".emoji-mouth").off("click");
	});
	$("#clear").click(function(){ 
		$("#left-eye-holder").hide();
		$("#right-eye-holder").hide();
		$("#left-face-holder").hide();
		$("#right-face-holder").hide();
		$("#mouth-holder").hide();
		$(".emoji-mouth").hide();
		$(".emoji-eyes").show();
		$("#title").text("Choose Eyes");
		$("#clear").hide();
		$("#next1").show();
	});

	}); 
}); 

