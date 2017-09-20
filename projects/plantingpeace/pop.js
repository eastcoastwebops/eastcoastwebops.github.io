(function(e,t,n){function i(e){return e}function s(e){return o(decodeURIComponent(e.replace(r," ")))}function o(e){if(e.indexOf('"')===0){e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")}return e}function u(e){return a.json?JSON.parse(e):e}var r=/\+/g;var a=e.cookie=function(r,o,f){if(o!==n){f=e.extend({},a.defaults,f);if(o===null){f.expires=-1}if(typeof f.expires==="number"){var l=f.expires,c=f.expires=new Date;c.setDate(c.getDate()+l)}o=a.json?JSON.stringify(o):String(o);return t.cookie=[encodeURIComponent(r),"=",a.raw?o:encodeURIComponent(o),f.expires?"; expires="+f.expires.toUTCString():"",f.path?"; path="+f.path:"",f.domain?"; domain="+f.domain:"",f.secure?"; secure":""].join("")}var h=a.raw?i:s;var p=t.cookie.split("; ");var d=r?null:{};for(var v=0,m=p.length;v<m;v++){var g=p[v].split("=");var y=h(g.shift());var b=h(g.join("="));if(r&&r===y){d=u(b);break}if(!r){d[y]=u(b)}}return d};a.defaults={};e.removeCookie=function(t,n){if(e.cookie(t)!==null){e.cookie(t,null,n);return true}return false}})(jQuery,document)

// where is everything stored:
window.$uiscript ="<script src=\"https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js\"></script>";

window.$popcss = "<style type=\"text\/css\">";
window.$popcss += "#screenfill{";
window.$popcss += "position:fixed;";
window.$popcss += "border:solid 0px;top:0px;";
window.$popcss += "left:0px;";
window.$popcss += "height:100%;width:100%;";
window.$popcss += "background-image:url('https://dl.dropboxusercontent.com/u/508866/webcode/plantingpeace/light.png');";
window.$popcss += "z-index:1000;";
window.$popcss += "}";



window.$popcss += "#pop{display:table-cell;vertical-align:middle;margin-left:auto;}";


window.$popcss += "#popcontent{";
window.$popcss += "border:solid 1px;";
window.$popcss += "border-radius:5px;";
window.$popcss += "padding:0px;";
window.$popcss += "height:375px;";
window.$popcss += "width:600px;";
window.$popcss += "background:#ffffff;";
window.$popcss += "color:#000000;";
window.$popcss += "margin:auto;";
window.$popcss += "display:table;";
window.$popcss += "box-shadow:0px 5px 10px #000000;";
window.$popcss += "}";


window.$popcss += ".closepop{";
window.$popcss += "left:590px;";
window.$popcss += "top:-10px;";
window.$popcss += "border:solid 0px;";
window.$popcss += "background:url('https://dl.dropboxusercontent.com/u/508866/webcode/plantingpeace/closebox.png') no-repeat right;";
window.$popcss += "width:30px;height:30px;";
window.$popcss += "cursor:pointer;";
window.$popcss += "position:absolute;";
window.$popcss += "}";


window.$popcss += ".trans{opacity:0;display:none;}";
window.$popcss += ".op{opacity:1;display:block;position:relative;top:0px; left:0px;}";
window.$popcss += ".hidelight{display:none;}";
window.$popcss += ".showlight{display:table;}";

window.$popcss += ".mid{";
window.$popcss += "font-family:trebuchet ms;";
window.$popcss += "padding:0px;";
window.$popcss += "border:solid 0px;";
window.$popcss += "padding-top:0px;}";

window.$popcss += ".mid p{color:#ffffff;";
window.$popcss += "text-align:left;";
window.$popcss += "padding:0px;}";

window.$popcss += ".new{border:solid 2px #ff0000 !important;";
window.$popcss += "position:relative;left:-1000px;";
window.$popcss += "}";

window.$popcss += "</style>";

// pophtml content
window.$pophtml = '<img src=\"https://dl.dropboxusercontent.com/u/508866/webcode/plantingpeace/pp.jpg\" width=\"600\" height=\"375\" border=\"0\" usemap=\"#Map\">';
window.$pophtml +='<map name=\"Map\"><area shape=\"rect\" coords=\"320,276,547,354\" href=\"https://plantingpeace.org/deworm/\"></map>';

// end pop html content


// basic HTML that is generated just before closing </body>
window.$popcontent =	'<div id=\"screenfill\" class=\"trans hidelight\">';
window.$popcontent +=	'<div id=\"pop\">';
window.$popcontent += 	'<div id=\"popcontent\" class=\"trans\">';
window.$popcontent +=	'<div class=\"closepop\"></div>';
window.$popcontent +=	'<div class=\"mid\">';
window.$popcontent +=	'</div>';
window.$popcontent +=	'</div>';
window.$popcontent +=	'</div>';
window.$popcontent += 	'</div>';

// include necessary jquery, ui, and jquery cookie scripts



// redefine to avoid conflicts with other jquery
var $j = jQuery.noConflict();

  //detect the width on page load
      if (navigator.userAgent.match(/Android/i) ||
             navigator.userAgent.match(/webOS/i) ||
             navigator.userAgent.match(/iPhone/i) ||
             navigator.userAgent.match(/iPad/i) ||
             navigator.userAgent.match(/iPod/i) ||
             navigator.userAgent.match(/BlackBerry/) || 
             navigator.userAgent.match(/Windows Phone/i) || 
             navigator.userAgent.match(/ZuneWP7/i)
             ) {
                var $agent="mobile";
               }
  
  // check location
    $j(location).attr('href');
    var $dmn = window.location;
	//alert($dmn);
 // console.log($dmn);
	
	if ( ($dmn == "http://plantingpeace.org/")  || ($dmn == "http://www.plantingpeace.org/") )
		{
		window.$oktoshow = "yes";
		}
	
	else {
		window.$oktoshow = "no";
			}
	//	console.log($oktoshow);
// end check location

// if not mobile and page is correct page then run it all
  
		 if ($agent !="mobile" && $oktoshow == "yes")
		{ 


		$j('body').append($uiscript);
		$j('body').append($popcontent);
		$j('body').append($popcss);
		$j('.mid' ).append($pophtml); //need to be same domain //
		//alert('he');

			function showlight() {
				$j('#screenfill').addClass('showlight').removeClass('hidelight').addClass('op',1000);
				$j('#popcontent').delay(1500).addClass('op',500);
			//	$j('#popcontent').delay(500).addClass('new',500);
					}

			function hideLight() {
			$j('#screenfill').addClass('hidelight').removeClass('showlight');
			}		

		// if cookie doesn't exist, do this	




			if ($j.cookie("light5") == null) {

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
					 var cookm = 1400; // minutes
					 cookdate.setTime(cookdate.getTime() + (cookm * 60 * 1000)); // 1400 x 60 x 1000 milliseconds = approx 24 hours

					$j.cookie("light5", 1, {expires: cookdate, path:'/'});

			}

		else {
		// alert('waiting 30 seconds before we show popup again');
		}


		}

else{
//alert ('mobile');
} 




