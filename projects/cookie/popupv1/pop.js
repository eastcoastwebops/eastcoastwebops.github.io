	

window.$popcontent =		'<div id=\"screenfill\" class=\"trans hidelight\">';
window.$popcontent +=	'<div id=\"pop\">';
window.$popcontent += 	'<div id=\"popcontent\" class=\"trans\">';
window.$popcontent +=	'<div class=\"closepop\"></div>';
window.$popcontent +=	'<div class=\"mid\">';
window.$popcontent +=	'This is the actual box for the content and sizing';
window.$popcontent +=	'</div>';
window.$popcontent +=	'</div>';
window.$popcontent +=	'</div>';
window.$popcontent += 	'</div>';




var $j = jQuery.noConflict();

$j('body').append($popcontent);
//alert('he');

function showlight() {
	$j('#screenfill').addClass('showlight').removeClass('hidelight').addClass('op',500);
	$j('#popcontent').delay(500).addClass('op',500);
		}

if ($j.cookie("light1") == null) {

$j(document).ready(function(){



setTimeout(function() {
      showlight();
     }, 500);

	$j("#pop").click(function () {
	$j('#popcontent').removeClass('op',500);
	$j('#screenfill').delay(500).removeClass('op',1000);
	$j('#screenfill').delay(1000).removeClass('showlight').addClass('hidelight');
	
		});
});

 var cookdate = new Date();
 var cookm = 1;
 cookdate.setTime(cookdate.getTime() + (cookm * 60 * 1000));

$j.cookie("light1", 1, {expires: cookdate, path:'/'});


}

else {

}

