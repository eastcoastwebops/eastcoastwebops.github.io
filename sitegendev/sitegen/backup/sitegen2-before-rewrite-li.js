/***** 

All code copyright 2017, EKHolbrook.
SiteGen Version 2.0

******/

webtitle = 'Development of Web. Test. Gator. Motor';

function gup(name) {
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regexS = "[\\?&]" + name + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(window.location.href);
	if (results === null) return null;
	else return results[1];
}
var whichpage = gup('page');
var article = gup('article');
if (whichpage === null) {
	whichpage = "home";
}
if (article === null) {
	article = "0";
}
var loc = window.location.pathname;
var dir = loc.substring(0, loc.lastIndexOf('/')) + "/";

//internal  loading div method -- for use with Chrome when running as local file only
//var data = $('#menu_data').text(); // third method -- load content from div (easier to read)
//external file method
var data = $.ajax({
	url: dir + "content/menu.txt",
	async: false
}).responseText;
var data = data.replace(/\r?\n|\r/g, ''); // but then strip out all line breaks
title = data.split("[").join("[,").split("]").join("],").split(",");
fileurl = dir;
folderurl = "content/";
sitetitle = '<div class="sitetitletext">' + webtitle + '</div>'; //may have to tweak #siteTitle css entry
menusize = title.length; // find out how many titles
themenu = ""; // define here to keep from undefined;
var thelink = "";
var thetitle = "";
var reducecount = 0; // used to keep track of top level menu items
var isSubmenu = "false";
var topLevel = "true";
var i = 0;
for (i = 0; i < menusize;) {
	thelink = title[i].replace(/ /g, "_").toLowerCase(); // needed to 
	thelinkb = thelink.replace(/-/g, "").toLowerCase();
	thetitle = title[i].replace(/-/g, "");
	if (thelink.indexOf("[") > -1) {
		themenu += "<ul class='subitem'>";
		isSubmenu = "true";
		topLevel = "false";
		reducecount = reducecount - 1;
	} else if (thelink.indexOf("]") > -1) {
		themenu += "</ul></li>";
		isSubmenu = "false"
		topLevel = "true";
	} else if (thelink.indexOf("/") > -1) {
		reducecount = reducecount - 1;
		i = i + 1;
	} else {
		themenu += '<li class=\"' + thelinkb + '\"><a href="?page=' + thelinkb + '\"><span class=\"placement\">' + thetitle + '</span></a>';
		isSubmenu = "false";
	}
	if (topLevel == "true") {
		reducecount++; // keep track of top menu items
	}
	i = i + 1;
}

console.log(themenu);
cssmenu = Math.floor(100 / (reducecount /* width minus submenus */ ));
cssstring = "<style type=\"text/css\">"; // now write out custom css
cssstring += '#menu > ul > li {width:' + cssmenu + '%;}\n';
cssstring += '.article{display:none;}';
cssstring += '#entry' + article + '{display:block;}';
cssstring += "</style>";
$(document).ready(function() {
	$('#themenu').replaceWith(themenu); // build menu
	$('.cssstyle').replaceWith(cssstring); // build dynamic css based on # of menu items
	function loadPage(whichpage) {
		$("body").hide(0, function() {
			var content = 'content/' + whichpage + '.html';
			$("#content").load(content, function() {
				$('body').attr('id', whichpage);
				if ($('#menutrigger').css('display') == 'block') {
					$('#menu').css('display', 'none');
				} else {
					$('#menu').css('display', 'block');
				}
			});
			$('li.' + whichpage).addClass('menuon'); // activate first menu item (from above)
			page = $('li.' + whichpage).text();
			$(document).prop('title', page + ' | ' + webtitle);
			$('#sitetitle').html(sitetitle);
			nicename = whichpage.replace(/_/g, ' ');
			$("#title").text('Current Page: ' + nicename).css('text-transform', 'capitalize');
			//   $('#title').addClass("loaded").removeClass("unloaded")
			$('#footer').text(page + " is (c) 2017, Eric K. Holbrook");
			$("body").delay(300).fadeIn(1500, 'swing');
		});
	}
	loadPage(whichpage);
	$("body").on("click", "#menu li a, #footermenu li a, #content a.intlink", function(e) {
		e.preventDefault();
		var whichthis = $(this);
		$("body").fadeOut(600, 'swing').promise().done(function() {
			$(whichthis).closest('#menu').find('.menuon').removeClass('menuon');
			$(whichthis).parent().parent().closest('li').addClass('menuon');
			$(whichthis).parent().addClass('menuon');
			var $which = $(whichthis).parent().attr('class').split(' ')[0];
			var $name = $(whichthis).text();
			history.pushState({}, '', '?page=' + $which); // push html name to address bar 
			page = $(whichthis).text(); // get new page name
			loadPage($which);
		});
	});
	$('a[href="#top"], #menutrigger').click(function() {
		$(window).scrollTop(0);
	});
	$('#menutrigger').click(function() {
		if ($('#menu').css('display') == 'block') {
			$('#menu').css('display', 'none');
		} else if ($('#menu').css('display') == 'none') {
			$('#menu').css('display', 'block');
		}
	});
	$("#menu li").addClass(function(i) {
		return "menuoff";
	});
	$("body").on("click", "#menutrigger", function() {
		$("html, body").animate({
			scrollTop: 0
		}, "slow");
		if ($("#menu li").hasClass("menuoff")) {
			$("#menu li").removeClass(function(i) {
				return "menuoff";
			});
			$("#menutrigger").addClass('on').removeClass('off');
		} else {
			$("#menu li").addClass(function(i) {
				return "menuoff";
			});
			$("#menutrigger").addClass('off').removeClass('on');
		}
		$("html, body").animate({
			scrollTop: 0
		}, "fast");
	});
	$("#menu li").click(function() {
		$("#menutrigger").removeClass('on').addClass('off');
		$("#menu li").addClass(function(i) {
			return "menuoff";
		});
	});
	

	
	
}); // end doc ready	
var timer;
$(window).scroll(function() {
	if (timer) {
		window.clearTimeout(timer);
	}
	timer = window.setTimeout(function() {
		// actual code here. Your call back function.
		if ($(window).scrollTop() > 300) {
			$('#menu').addClass('fixed');
		} else {
			$('#menu').removeClass('fixed');
		}
		//  console.log( "Firing!" );
	}, 10);
});



$(document).ready(function(){
	
	});