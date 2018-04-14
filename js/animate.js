;(function () {

'use strict';
//Animations


//Header
var headerAnimate= function() {
	if($('#top').length > 0 ) {

		$('#top').waypoint( function( direction ) {
			 if(direction === 'down' && !$(this.element).hasClass('animated')) {
			 	setTimeout(function() {
			 		$('#top .to-animate').each(function( k ) {
			 			var el= $(this);

			 			setTimeout ( function () {
			 				el.addClass('fadeInDown animated');
			 			}, k * 200, 'easeInOutExpo' );
			 		});
			 	}, 200);

			 	$(this.element).addClass('animated');
			 }
		}, { offset: '80%'});
	}
};

//About
var aboutAnimate= function() {
	if( $('#about').length > 0) {

		$('#about').waypoint( function( direction ) {
			 if(direction === 'down' && !$(this.element).hasClass('animated')) {
			 	setTimeout(function() {
			 		$('#about .to-animate').each(function( k ) {
			 			var el= $(this);

			 			setTimeout ( function () {
			 				el.addClass('fadeInDown animated');
			 			}, k * 200, 'easeInOutExpo' );
			 		});
			 	}, 200);

			 	$(this.element).addClass('animated');
			 }
		}, { offset: '80%'});
	}
};

//Why Section
var whyAnimate = function() {
	if( $('#why').length > 0) {

		$('#why').waypoint( function( direction ) {
			if(direction ==='down' && !$(this.element).hasClass('animated')) {
				setTimeout(function() {
					$('#why .to-animate').each(function( k ) {
						var el = $(this);

						setTimeout ( function () {
							el.addClass('fadeInDown animated');
						}, k * 200, 'easeInOutExpo');
					});
				}, 200);

				$(this.element).addClass('animated');
			}
		}, { offset:'80%'});
	}
};

//Doucment to load
$(function(){
	headerAnimate();
	aboutAnimate();
	whyAnimate();
});






}());