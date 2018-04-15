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

//Language
var languageAnimate = function() {
	if($('#language').length > 0) {

		$('#language').waypoint( function ( direction ) {
			if(direction === 'down' && !$(this.element).hasClass('animated')) {
				setTimeout(function () {
					$('#language .to-animate').each(function ( k ) {
						var el = $(this);
						
						setTimeout(function () {
							el.addClass('fadeInLeft animated');
						}, k * 200, 'easeInOutExpo');
					});
				}, 200);

				$(this.element).addClass('animated');
			}
		}, { offset: '80%'});
	}
};

//Callout
var calloutAnimate = function() {
	if($('#callout').length > 0) {

		$('#callout').waypoint( function ( direction ) {
			if(direction === 'down' && !$(this.element).hasClass('animated')) {
				setTimeout(function () {
					$('#callout .to-animate').each(function( k ){
						var el = $(this);

						setTimeout( function (){
							el.addClass('fadeIn animated');
						}, k * 300, 'easeInOutExpo');
					});
				}, 300);

				$(this.element).addClass('animated');
			}
		}, { offset: '80%'});
	}
};

//Project
var projectAnimate = function() {
	if( $('#project').length > 0) {

		$('#project').waypoint( function ( direction ) {
			if(direction === 'down' && !$(this.element).hasClass('animated')) {
				setTimeout(function() {
					$('#project .to-animate').each(function( k ) {
						var el = $(this);

						setTimeout( function () {
							el.addClass('fadeInRight animated');
						}, k * 200, 'easeInOutExpo');
					});
				}, 200);

				$(this.element).addClass('animated');
			}
		}, { offset: '80%'});
	}
};

//Contact
var contactAnimate = function() {
	if( $('#contact').length > 0) {

		$('#contact').waypoint( function ( direction ) {
			if(direction === 'down' && !$(this.element).hasClass('animated')) {
				setTimeout(function() {
					$('#contact .to-animate').each(function( k ) {
						var el= $(this);

						setTimeout( function (){
							el.addClass('fadeInDown animated');
						}, k * 200, 'easeInOutExpo');
					});
				}, 200);

				$(this.element).addClass('animated');
			}
		}, { offset: '80%'});
	}
};

//Doucment to load
$(function(){
	headerAnimate();
	aboutAnimate();
	whyAnimate();
	languageAnimate();
	calloutAnimate();
	projectAnimate();
	contactAnimate();
});


}());