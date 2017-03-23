$( document ).ready(function() {
	// $(window).scroll(function() {
	// 	if ($(this).scrollTop() > 1){  
	// 	    $('nav').addClass("nav-sticky");
	// 	}
	// 	else{
	// 	    $('nav').removeClass("nav-sticky");
	// 	  }
	// });

	$(document).on('click', '#about-me-link, #portfolio-link, #contact-button', function(event){
	    event.preventDefault();
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	});
});

