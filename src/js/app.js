// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

 import menuIsActive from './modules/menuselected';
 import mobileMenuToggle from './modules/mobilemenuopened';

( ($) => {

  // When DOM is ready
  $(() => {

menuIsActive();
mobileMenuToggle();

//animate to top
document.getElementById("topBtn").onclick = function() {
      var top = $('li a').offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
	};

  });

})(jQuery);