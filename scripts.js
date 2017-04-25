$( document ).ready(function() {
	$(document).on('click', '#about-me-link, #portfolio-link', function(event){
	    event.preventDefault();
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	});
	$(document).on('click', '#contact-button', function(event){
			event.preventDefault();
			$('html, body').animate({
					scrollTop: $( $.attr(this, 'href') ).offset().top
			}, 1500);
	});
});
