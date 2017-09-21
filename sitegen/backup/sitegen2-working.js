/***** 

All code copyright 2017, EKHolbrook.
SiteGen Version 2.0

******/
webtitle = 'Development of Web.';
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
    url: dir + "content/menu.txt",
    async: false,
    contentType: "text",
    dataType: 'html'
}).responseText;
data = data.replace(/\r?\n|\r/g, ''); // but then strip out all line breaks
title = data.split(">").join(">,").split("<").join("<,").split(",");
sitetitle = '<div class="sitetitletext">' + webtitle + '</div>'; //may have to tweak #siteTitle css entry
menusize = title.length; // find out how many titles
themenu = '<ul class="toplevel"><li class="leftspacer">&nbsp;</li>';
thelink = thetitle = '';
var i = 0;
for (i = 0; i < menusize;) {
    thelink = title[i].replace(/ /g, "_").toLowerCase(); // needed to 
    thelinkb = thelink.replace(/>|-|</g, "").toLowerCase();
    thetitle = title[i].replace(/>|-|</g, "");
    themenu += '<li class=\"' + thelinkb + '\"><a href="?page=' + thelinkb + '\">' + thetitle + '</a>';
    if (thelink.indexOf(">") > -1) {
        themenu += "<ul class='subitem'>";
    } else if (thelink.indexOf("<") > -1) {
        themenu += "</ul></li>";
    } else {
        themenu += '</li>';
    }
    i = i + 1;
}
themenu += '<li class="rightspacer">&nbsp;</li></ul>';
$(document).ready(function() {


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
            var content = 'content/' + whichpage + '.html';
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
	
	
	$(window).on('resize', function(){
     
	     winwidth = $(window).width(); 
		winheight = $(window).height();
		
		dim = winwidth + ' x ' + winheight ;
		
//		$('#dim').text(dim);
	 
});
	
	
	
    $(window).scroll(function() {
        mul = -1;
        winwidth = $(window).width(); 
		winheight = $(window).height();
		
				dim = winwidth + ' x ' + winheight ;
		
	//	$('#dim').text(dim);
	 

		
        if (winwidth > 1400) {
            winwidth = 1400
        }
      
        frac = (winheight / winwidth);
        speed = .2 * (1 - frac);
        //	console.log('actual speed ' + speed);
        if (speed <= .03) {
            speed = .03;
        }
        if ((winwidth > 480) && (ios() == false)) {
            var scrollTop = $(window).scrollTop();
            var slowPos = scrollTop * -0.5 + 'px';
            var slowDown = scrollTop * 0.5 + 'px';
            var largeimages = ((scrollTop * speed) * 1.2);
            if (winwidth < 736) {
                largeimages = ((scrollTop * speed) * 1.3);
            }
            var newheight = 400 + Math.abs(((scrollTop * speed) * mul));
			console.log(largeimages);
            $('.sitetitletext').css('transform', 'translateY(' + slowPos + ')');
            $('#title').css('transform', 'translateY(' + slowDown + ')');
            $('.full-bg-image').css('background-position', 'center  ' + (100-largeimages) + 'px');
          //  $('.full-bg-image').css('height', newheight + 'px');
        } else if ((winwidth <= 320) && (ios() == false)) {
		
     //       var scrollTop = $(window).scrollTop();
      //      var newheight = 400 - Math.abs(((scrollTop * speed) * mul));
      //      var largeimages = ((scrollTop * speed) * 1);
            //	console.log(speed + ' wid = ' + winwidth + ' height ' + newheight);
    //        $('.full-bg-image').css('background-position', 'center  ' + largeimages + 'px');
    //        $('.full-bg-image').css('height', newheight + 'px');
            // figure out way to tweak div height // 
        }
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