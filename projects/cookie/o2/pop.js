//
/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function ($, document, undefined) {

	var pluses = /\+/g;

	function raw(s) {
		return s;
	}

	function decoded(s) {
		return unRfc2068(decodeURIComponent(s.replace(pluses, ' ')));
	}

	function unRfc2068(value) {
		if (value.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape
			value = value.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}
		return value;
	}

	function fromJSON(value) {
		return config.json ? JSON.parse(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// write
		if (value !== undefined) {
			options = $.extend({}, config.defaults, options);

			if (value === null) {
				options.expires = -1;
			}

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			value = config.json ? JSON.stringify(value) : String(value);

			return (document.cookie = [
				encodeURIComponent(key), '=', config.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// read
		var decode = config.raw ? raw : decoded;
		var cookies = document.cookie.split('; ');
		var result = key ? null : {};
		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = decode(parts.join('='));

			if (key && key === name) {
				result = fromJSON(cookie);
				break;
			}

			if (!key) {
				result[name] = fromJSON(cookie);
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) !== null) {
			$.cookie(key, null, options);
			return true;
		}
		return false;
	};

})(jQuery, document);

window.$popcontent =	'<div id=\"screenfill\" class=\"trans hidelight\">';
window.$popcontent +=	'<div id=\"pop\">';
window.$popcontent += 	'<div id=\"popcontent\" class=\"trans\">';
window.$popcontent +=	'<div class=\"closepop\"></div>';
window.$popcontent +=	'<div class=\"mid\">';
window.$popcontent +=	'</div>';
window.$popcontent +=	'</div>';
window.$popcontent +=	'</div>';
window.$popcontent += 	'</div>';

// now do something about inserting the html into mid
window.$uiscript="<script src=\"https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js\"></script>"

var $j = jQuery.noConflict();

$j('body').append($uiscript);
$j('body').append($popcontent);
$j('.mid' ).load('pop.html' ); //need to be same domain //
//alert('he');

function showlight() {
	$j('#screenfill').addClass('showlight').removeClass('hidelight').addClass('op',1000);
	$j('#popcontent').delay(1500).addClass('op',500);
//	$j('#popcontent').delay(500).addClass('new',500);
		}

function hideLight() {
$j('#screenfill').addClass('hidelight').removeClass('showlight');
}		
		
if ($j.cookie("light2") == null) {

$j(document).ready(function(){

setTimeout(function() {
      showlight();
     }, 1500);

	$j("#pop").click(function () {
	//$j('#popcontent').removeClass('op',3000);
	$j('#popcontent').switchClass('op', 'new',2000, 'easeInOutBack');
	//$j('#popcontent').hide('drop',{direction:'down'},1000);
	$j('#screenfill').delay(500).removeClass('op',1000);
	setTimeout(hideLight, 1500);
	 });
});

 var cookdate = new Date();
 var cookm = .25; // minutes
 cookdate.setTime(cookdate.getTime() + (cookm * 60 * 1000));

$j.cookie("light2", 1, {expires: cookdate, path:'/'});


}

else {

}

