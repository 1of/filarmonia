(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _menuselected = require('./modules/menuselected');

var _menuselected2 = _interopRequireDefault(_menuselected);

var _mobilemenuopened = require('./modules/mobilemenuopened');

var _mobilemenuopened2 = _interopRequireDefault(_mobilemenuopened);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

(function ($) {

  // When DOM is ready
  $(function () {

    (0, _menuselected2.default)();
    (0, _mobilemenuopened2.default)();

    //animate to top
    document.getElementById("topBtn").onclick = function () {
      var top = $('li a').offset().top;
      $('body,html').animate({ scrollTop: top }, 1500);
    };
  });
})(jQuery);

},{"./modules/menuselected":2,"./modules/mobilemenuopened":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var menuIsActive = function menuIsActive() {
	//Add active link
	$('li a').on('click', function (event) {
		$('li a').removeClass('menu-active');
		$(this).addClass('menu-active');
	});
};
exports.default = menuIsActive;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var menuIsActive = function menuIsActive() {
  //show mobile menu when clicked
  $('.mobile-menu').on('click', function (event) {
    event.preventDefault();
    if ($('#nav-panel').hasClass('display-toggle')) {
      $('#nav-panel').removeClass('display-toggle');
    } else {
      $('#nav-panel').addClass('display-toggle');
    }
  });
};
exports.default = menuIsActive;

},{}]},{},[1]);
