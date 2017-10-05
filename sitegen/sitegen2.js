/***** 

All code copyright 2017, EKHolbrook.
SiteGen Version 2.0

******/
if(location.hostname == "eastcoastwebops.github.io"){
webtitle = 'East Coast Web Operations';
}

else {
	
webtitle = 'ECWO';
//webtitle = 'Think Vacuu Web Operations';
}

imagloc = '';
version = 17; //
//document.addEventListener('contextmenu', event => event.preventDefault());
function gup(name) {
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	regexS = "[\\?&]" + name + "=([^&#]*)";
	regex = new RegExp(regexS);
	results = regex.exec(window.location.href);
	if (results === null) return null;
	else return results[1];
}
whichpage = gup('page');
whichimages = gup('gallery');
//console.log(whichimages);
if (whichimages == null) {
	whichimages = "demo_gallery";
}
article = gup('article');
if (whichpage === null) {
	whichpage = "home";
}
if (article === null) {
	article = "0";
}
loc = window.location.pathname;
dir = loc.substring(0, loc.lastIndexOf('/')) + "/";
var data = "";
data = $.ajax({
	url: dir + "sitegen/content/menu.txt",
	async: false,
	contentType: "text",
	dataType: 'html'
}).responseText;
data = data.replace(/\r?\n|\r/g, ''); // but then strip out all line breaks
title = data.split(">").join(">,").split("<").join("<,").split(",");
//console.log (title);
sitetitle = '<div class="sitetitletext">' + webtitle + '</div>'; //may have to tweak #siteTitle css entry
menusize = title.length; // find out how many titles
themenu = '<ul class="toplevel"><li class="spacer">&nbsp;</li>';
thelink = thetitle = '';
var i = 0;
for (i = 0; i < menusize;) {
	alllinks = title[i].split('|');
	if (typeof alllinks[1] !== "undefined") {
		thelinkb = alllinks[1];
	} else {
		thelinkb = alllinks[0].replace(/ /g, "_").toLowerCase();
	}
	thelink = alllinks[0].replace(/ /g, "_").toLowerCase(); // needed to 	
	thelinkb = thelinkb.replace(/>|-|</g, "").toLowerCase();
	thetitle = alllinks[0].replace(/>|-|</g, "");
	needtap = " ";
	menucheck = alllinks[0] + alllinks[1];
	if (menucheck.indexOf(">") > -1) {
		needtap = " trigger";
	}
	themenu += '<li class=\"' + thelinkb + needtap + '\"><a href="index.html?page=' + thelinkb + '\">' + thetitle + '</a>';
	if (menucheck.indexOf(">") > -1) {
		themenu += "<ul class='subitem'>";
	} else if (menucheck.indexOf("<") > -1) {
		themenu += "</ul></li>";
	} else {
		themenu += '</li>';
	}
	i = i + 1;
}
themenu += '<li class="spacer">&nbsp;</li></ul>';

//$(document).ready(function() {
$(window).on("load",function() {
	$('#menu').html(themenu); // build menu
	reducecount = $("ul.toplevel > li").length;
	cssmenu = Math.floor(100 / (reducecount /* width minus submenus */ ));
	cssstring = "<style type=\"text/css\">"; // now write out custom css
	cssstring += '#menu > ul > li {width:' + cssmenu + '%;}\n';
	cssstring += '.article{display:none;}';
	cssstring += '#entry' + article + '{display:block;}';
	cssstring += "</style>";
	$('.cssstyle').replaceWith(cssstring); // build dynamic css based on # of menu items
	function loadPage(whichpage) {
		$("body").hide(0, function() {
			var content = 'sitegen/content/' + whichpage + '.html';
			$("#content").load(content, function() {
				$('body').attr('id', whichpage);
				setTimeout(function() {
					if (ios() != false) {
						$('.full-bg-image').each(function() {
							$(this).addClass('iosimage').removeClass('full-bg-image');
						});
					}
					winw = $(window).width();
					winh = $(window).height();
					//		alert (winw + ' x ' + winh);
				}, 30);
				if ($('#menutrigger').css('display') == 'block') {
					$('#menu').css('display', 'none');
				} else {
					$('#menu').css('display', 'block');
				}
			});
			
			
			
			if (whichpage == 'gallery') {
		//	alert ('yes');
		//	whichpage = (whichpage + '&gallery=' + whichimages);
			}
			console.log(whichpage);
			// need way to get class of galleries
			
			$('li.' + whichpage).addClass('active');
			$('li.' + whichpage).parent().parent().addClass('active');
			
			console.log (whichpage);
			
			page = $('li.' + whichpage + ' > a:first').text();
			$(document).prop('title', page + ' | ' + webtitle);
			$('#sitetitle').html(sitetitle);
			nicename = whichpage.replace(/_/g, ' ');
			$("#title").text('Current Page: ' + nicename).css('text-transform', 'capitalize');
			//   $('#title').addClass("loaded").removeClass("unloaded")
			$('#footer').text(page + " is (c) 2017, Eric K. Holbrook");
			$("body").delay(450).fadeIn(1700, 'swing');
			$('.sitetitletext').delay(1000).animate({
				//'left' : "-=70%",
				'opacity': '+=1'
			}, 1500, 'swing');
			$('#title').css('opacity', '0.0').delay(1700).animate({
				'opacity': '+=1'
			}, 2200, 'swing');
		});
	}
	
	loadPage(whichpage);
	
	$("body").on("click", "#menu ul li a, #footermenu li a, #content a.intlink", function(e) {
		var whichthis = $(this);
		var $which = $(whichthis).parent().attr('class').split(' ')[0];
		special = false; // if one of the gallery pages with parameters, force a reload
		if ($which.indexOf('&') >= 0) {
			special = true;
		}
		e.preventDefault();
		newLocation = this.href;
		wwidth = $(window).width();
		if (wwidth <= 700) {
			$('#menu').slideUp();
		}
		$("body").delay(200).fadeOut(800, 'swing').promise().done(function() {
			window.location = newLocation;
		});
	});
	$('a[href="#top"], #menutrigger').click(function() {
		$(window).scrollTop(0);
	});
	$('#menutrigger').click(function() {
		if ($('#menu').css('display') == 'block') {
			//      $('#menu').css('display', 'none');
			$('#menu').slideUp();
		} else if ($('#menu').css('display') == 'none') {
			//       $('#menu').css('display', 'block');
			$('#menu').slideDown();
		}
	});
	/*	
	   $("#menu li").addClass(function(i) {
	      return "menuoff";
	   });
		 
	*/
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
	$(window).on('resize', function() {
		winwidth = $(window).width();
		winheight = $(window).height();
		dim = winwidth + ' x ' + winheight;
				$('#dim').text(dim);
	});
	$(window).scroll(function() {
		mul = -1;
		winwidth = $(window).width();
		winheight = $(window).height();
		dim = winwidth + ' x ' + winheight;
			$('#dim').text(dim);
		//$('#dim').text(version);
		if (winwidth > 1400) {
			winwidth = 1400
		}
		frac = (winheight / winwidth);
		speed = .2 * (1 - frac);
		//	console.log('actual speed ' + speed);
		if (speed <= .03) {
			speed = .03;
		}
		if ((winwidth >= 320) && (ios() == false)) {
			var scrollTop = $(window).scrollTop();
			var slowPos = scrollTop * -0.5 + 'px';
			var slowDown = scrollTop * 0.5 + 'px';
			var largeimages = ((scrollTop * speed) * 1.2);
			if (winwidth < 736) {
				largeimages = ((scrollTop * speed) * 1.3);
			}
			var newheight = 400 + Math.abs(((scrollTop * speed) * mul));
			//			console.log(largeimages);
			$('.sitetitletext').css('transform', 'translateY(' + slowPos + ')');
			$('#title').css('transform', 'translateY(' + slowDown + ')');
			$('.full-bg-image').css('background-position', 'center  ' + (100 - largeimages) + 'px');
			//  $('.full-bg-image').css('height', newheight + 'px');
		} else if ((winwidth < 320) && (ios() == false)) {}
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
// scoller
// check ios
function ios() {
	var iDevices = ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'];
	if (!!navigator.platform) {
		while (iDevices.length) {
			if (navigator.platform === iDevices.pop()) {
				return true;
			}
		}
	}
	return false;
}