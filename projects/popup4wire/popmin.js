(function(e,t,n){function i(e){return e}function s(e){return o(decodeURIComponent(e.replace(r," ")))}function o(e){if(e.indexOf('"')===0){e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")}return e}function u(e){return a.json?JSON.parse(e):e}var r=/\+/g;var a=e.cookie=function(r,o,f){if(o!==n){f=e.extend({},a.defaults,f);if(o===null){f.expires=-1}if(typeof f.expires==="number"){var l=f.expires,c=f.expires=new Date;c.setDate(c.getDate()+l)}o=a.json?JSON.stringify(o):String(o);return t.cookie=[encodeURIComponent(r),"=",a.raw?o:encodeURIComponent(o),f.expires?"; expires="+f.expires.toUTCString():"",f.path?"; path="+f.path:"",f.domain?"; domain="+f.domain:"",f.secure?"; secure":""].join("")}var h=a.raw?i:s;var p=t.cookie.split("; ");var d=r?null:{};for(var v=0,m=p.length;v<m;v++){var g=p[v].split("=");var y=h(g.shift());var b=h(g.join("="));if(r&&r===y){d=u(b);break}if(!r){d[y]=u(b)}}return d};a.defaults={};e.removeCookie=function(t,n){if(e.cookie(t)!==null){e.cookie(t,null,n);return true}return false}})(jQuery,document)

// where is everything stored:
window.$uiscript ="<script src=\"https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js\"></script>";

window.$popcss = "<style type=\"text\/css\">";
window.$popcss += "#screenfill{";
window.$popcss += "position:fixed;";
window.$popcss += "border:solid 0px;top:0px;";
window.$popcss += "left:0px;";
window.$popcss += "height:100%;width:100%;";
window.$popcss += "background-image:url('https://dl.dropboxusercontent.com/u/508866/webcode/popup4wire/popimages/light.png');";
window.$popcss += "z-index:1000;";
window.$popcss += "}";


window.$popcss += "#pop{display:table-cell;vertical-align:middle;margin-left:auto;}";


window.$popcss += "#popcontent{";
window.$popcss += "border:solid 2px;";
window.$popcss += "border-radius:10px;";
window.$popcss += "padding:0px;";
window.$popcss += "height:400px;";
window.$popcss += "width:700px; \/* see position of .closepop below *\/";
window.$popcss += "background:#ff9966;";
window.$popcss += "color:#000000;";
window.$popcss += "margin:auto;";
window.$popcss += "display:table;";
window.$popcss += "box-shadow:0px 5px 10px #000000;";
window.$popcss += "}";


window.$popcss += ".closepop{";
window.$popcss += "left:680px; \/* make this .mid padding pixels less than width of #popcontent *\/";
window.$popcss += "top:-10px;";
window.$popcss += "border:solid 0px;";
window.$popcss += "background:url('https://dl.dropboxusercontent.com/u/508866/webcode/popup4wire/popimages/closebox.png') no-repeat right;";
window.$popcss += "width:30px;height:30px;";
window.$popcss += "cursor:pointer;";
window.$popcss += "position:relative;";
window.$popcss += "}";


window.$popcss += ".trans{opacity:0;display:none;}";
window.$popcss += ".op{opacity:1;display:block;position:relative;top:0px; left:0px;}";
window.$popcss += ".hidelight{display:none;}";
window.$popcss += ".showlight{display:table;}";


window.$popcss += "\/* everything in popup content goes under this class *\/";
window.$popcss += ".mid{";
window.$popcss += "font-family:trebuchet ms;";
window.$popcss += "padding:20px; \/* see above for .closepop position *\/";
window.$popcss += "border:solid 0px;";
window.$popcss += "display:table-cell;";
window.$popcss += "vertical-align:middle;";
window.$popcss += "padding-top:0px;}";


window.$popcss += ".mid p{color:#ffffff;";
window.$popcss += "text-align:left;";
window.$popcss += "padding:5px;}";


window.$popcss += ".new{border:solid 2px #ff0000 !important;";
window.$popcss += "position:relative;left:-1000px;";
window.$popcss += "}";

window.$popcss += "</style>";




// pophtml content
window.$pophtml = "<h2>Custom PopUp Script (c) 2014 - E.K.Holbrook</h2>";
window.$pophtml +="<p>This message will appear approximately every 1 minute or as defined in the code. <br/><br/>ntaining Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>";

window.$pophtml +="<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>";


// end pop html content

window.$popcontent='<div id="screenfill" class="trans hidelight">';window.$popcontent+='<div id="pop">';window.$popcontent+='<div id="popcontent" class="trans">';window.$popcontent+='<div class="closepop"></div>';window.$popcontent+='<div class="mid">';window.$popcontent+="</div>";window.$popcontent+="</div>";window.$popcontent+="</div>";window.$popcontent+="</div>";var $j=jQuery.noConflict();if(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/)||navigator.userAgent.match(/Windows Phone/i)||navigator.userAgent.match(/ZuneWP7/i)){var $agent="mobile"}if($agent!="mobile"){$j("body").append($uiscript);$j("body").append($popcontent);$j("body").append($popcss);$j(".mid").append($pophtml);function showlight(){$j("#screenfill").addClass("showlight").removeClass("hidelight").addClass("op",1e3);$j("#popcontent").delay(1500).addClass("op",500)}function hideLight(){$j("#screenfill").addClass("hidelight").removeClass("showlight")}if($j.cookie("light3")==null){$j(document).ready(function(){setTimeout(function(){showlight()},1500);$j("#pop").click(function(){$j("#popcontent").switchClass("op","new",2e3,"easeInOutBack");$j("#screenfill").delay(500).removeClass("op",1e3);setTimeout(hideLight,1500)})});var cookdate=new Date;var cookm=.5;cookdate.setTime(cookdate.getTime()+cookm*60*1e3);$j.cookie("light3",1,{expires:cookdate,path:"/"})}else{}}else{}




