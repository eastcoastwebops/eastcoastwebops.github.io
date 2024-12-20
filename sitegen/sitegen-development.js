/***** 

All code copyright 2018, EKHolbrook.
SiteGen Version 3.0

******/

	sitetitle = 'East Coast Web Ops';
	subtitle = 'Web Development & Graphic Design';
/*
if (location.hostname == "eastcoastwebops.github.io") {
	sitetitle = 'East Coast Web Ops';
	subtitle = 'Web Development & Graphic Design';
} else {
	//sitetitle = 'ECWO';
	sitetitle = 'Sample';
	subtitle = 'Projects';
}
*/

// > creates childs after parent
// < creates start of NEW top level
// | comma, separates items in same list and | can be used to give Visible|url (page)
// final item in Menu must end in < to create correct balance

menu="Home>Site Gen|sitegen,About Me|about,Contact|contactus";
menu+="<Blog|blog>Articles|blog,Twitter Grid|twitter";
menu+="<Portfolio Of Work|portfolio>Work History|career,Code|portfolio,Graphic Design|graphics,Code Snippets,Contact|contactus"
menu+="<Tools>Quick Tools & Gadgets|tools,How To Host On GitHub|github,Reverse Calc|/projects/reversecalc.html,Encrypt|/projects/encrypt/index.html,Styling Page|sample_page,Dark Theme|sample_page&t=dark,Light Theme|sample_page&t=light";
menu+="<Learn><";



imagloc = '';
version = 22718; //
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
theme = gup('t');
article = gup('article');
//console.log(theme);
if (whichpage === null) {
	whichpage = "home";
}
if (whichimages == null) {
	whichimages = "demo_gallery";
}
if (theme === null) {
	theme = "dark";
}
if (article === null) {
	article = "0";
}
loc = window.location.pathname;

dir = loc.substring(0, loc.lastIndexOf('/')) + "/";
console.log(dir);
//var menu = "";
// menu = $.ajax({
// 	url: dir + "sitegen/content/menu.txt",
// 	async: false,
// 	contentType: "html",
// 	menuType: 'html'
// }).responseText;
menu = menu.replace(/\r?\n|\r/g, ''); // but then strip out all line breaks
title = menu.split(">").join(">,").split("<").join("<,").split(",");
//console.log (title);
fullsitetitle = '<a href="index.html?page=home"><div class="sitetitletext">' + sitetitle + '<div class="subtitletext">' + subtitle + '</div></div></a><div class="logo"></div>'; //may have to tweak #siteTitle css entry
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
	// build url
	console.log('--'+thelinkb+'--');
	
	//if normal url then skip url creation otherwise append with stuff as normal
	var target='';
	if (  thelinkb.charAt(0) == '/')  {
			url = dir+thelinkb.substring(1);
			target='_blank';
	}
	else {
	url = 'index.html?page=' + thelinkb;
	}
	if (thelinkb !='') {
	themenu += '<li class=\"' + thelinkb + needtap + '\"><a href="' + url + '\" target='+target+'>' + thetitle + '</a>';
	}
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
$(window).on("load", function() {
	$('#menu').html(themenu); // build menu
	reducecount = $("ul.toplevel > li").length;
	cssmenu = Math.floor(100 / (reducecount /* width minus submenus */ ));
	cssstring = "<style type=\"text/css\">"; // now write out custom css
	cssstring += '#menu > ul > li {width:' + cssmenu + '%;}\n';
	cssstring += '.article{display:none;}';
	cssstring += '#entry' + article + '{display:block;}';
	cssstring += "</style>";
	$('.cssstyle').replaceWith(cssstring); // build dynamic css based on # of menu items
	

	
	function upCase(inStr) { return inStr.replace(/\w\S*/g, function(tStr) { return tStr.charAt(0).toUpperCase() + tStr.substr(1).toLowerCase(); }); }
	
	function loadPage(whichpage) {
		$("body").hide(0, function() {
			var content = 'sitegen/content/' + whichpage + '.html';
			themecss = 'css/' + theme + '.css';
			$('<link>').prependTo('head').attr({
				type: 'text/css',
				rel: 'stylesheet',
				href: 'css/' + theme + '.css'
			});
			$("#content").load(content, function() {
	
// start to conform all links on page	
				$('a').each(function(i) {
				href = $(this).attr('href');
	// if page doesn't have page= then skip otherwise
		if(href.indexOf('page=') != -1){
	
				if(href.indexOf('t=') == -1){
				//	console.log(href);
					$(this).attr('href', href + '&t=' + theme);
             }
			 }			 
						 
			});
				
				
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
				$('.sitename').each(function() {
					$(this).html(sitetitle);
				});
			});
			if (whichpage == 'gallery') {
				//	alert ('yes');
				//	whichpage = (whichpage + '&gallery=' + whichimages);
			}
			
		
		
			// need way to get class of galleries
			$('li.' + whichpage).addClass('active');
			$('li.' + whichpage).parent().parent().addClass('semiactive');
			//	console.log ('which ' + whichpage);
			page = $('li.' + whichpage + ' > a:first').text();
			
			$(document).prop('title', page + ' | ' + sitetitle);
			$('#sitetitle').html(fullsitetitle);
			nicename = whichpage.replace(/_/g, ' ');
			//console.log (nicename);
			if (page == '') {page = upCase(nicename)};
			$("#title").text('Current Page: ' + nicename).css('text-transform', 'capitalize');
			//   $('#title').addClass("loaded").removeClass("unloaded")
			
			var d = new Date();
			var n = d.getFullYear();
									
			$('#footer').text(page + " is (c) " + n + ", Eric K. Holbrook");
			$('#thefootermenu').html('<a href="?page=privacy_policy">Privacy Policy</a>');
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
			$('#menu').slideUp();
		} else if ($('#menu').css('display') == 'none') {
			$('#menu').slideDown();
		}
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
}); // end doc ready	
var timer;
$(window).scroll(function() {

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

