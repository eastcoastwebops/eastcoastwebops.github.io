// controls

$(document).ready(function(){


$('html, body').animate({scrollTop:0}, 30);// goto top on refresh

/// build menu and slides 
// get 'window.title' from content.js
// then do this
  
	window.size=title.length;
	window.themenu = "";
	window.theslides ="";

		for (var s=0;s < (size);s++) // loop through s times (length of menu)
		{
				window.themenu +='<li><a href=\"\" class=\"slide'+(s+1)+'\">'+title[s]+'</a></li>';
				window.theslides +='<div id=\"slide'+(s+1)+'\" class=\"slidewrapper\"><t class=\"slidecontent\"/></div>';
		}
		// write out menu, slide div place holders
		$('#themenu').replaceWith(themenu);	
		$('#theslides').replaceWith(theslides);	
		// then replace all slides with this content (which can be pulled in later for specific slides)	
		$('.slidecontent').replaceWith($slidecontent1);	
// add customized slide
	$('#slide2 .slidebody').replaceWith($slidecontent2);	
// custom slide


		// then give each slide it's correct title
		for (var s=0;s <(size+1);s++){
		$('#slide'+s+' .slidetitle, .slide'+s).html(title[s-1]);
		}
		
//////////// green button
	window.$greenbutton="Save today!<a class=\"btn\" >Sign Up</a>";
	$('div.savetoday').append($greenbutton);
//////////// green button //////////////////


// write footer 
		$('#footer').append($footer);

	// determine width for each menu item
	window.cssmain=csswidth; //taken from 'content.js'
	window.cssmenu=Math.ceil( (cssmain / size)-(2) ); // divide menu into (size) pieces, then remove 2 pixels for each border left/right
	
	// but this is probably too big or too small to be evenly used across all items. So last one needs to be adjusted
	
	window.csslast= ( cssmain - (cssmenu*(size-1))   );  
	// since this doesn't always fit perfectly, 
	//take all the menu pieces (except the last one), add them up, 
	//then subtract this from menu width	
	
	// this new size for the last item is fine, except it doesn't take into account all the borders
	window.csslast =  (csslast - (size*2) )+ 1 + 1;    
	// so take this, remove (size borders) plus 1pixel for left and 1 for far right lack of borders
	
	// find best width for .expand_content
	
	
	window.csscontent = csswidth - 245 - 20 - 25;
	// Now write out special css to page
	window.cssstring="<style type=\"text/css\">";
	window.cssstring+='#header, #main, #footer {margin-left:auto;margin-right:auto;width:'+cssmain+'px;}\n';
	window.cssstring+='#header .bottom ul li {width:'+cssmenu+'px;}\n';
	window.cssstring+='#header .bottom ul li:last-child {width:'+(csslast)+'px;border-right:none;}\n';
	window.cssstring+='.expand_content{width:'+csscontent+'px;}'
	window.cssstring+="</style>";

	$('.cssstyle').replaceWith(cssstring);	

// load in slide order here (seems like best place)		
sortablelistRestoreOrder();
// load slide cookie		
		
});

// page is now "built" //

/* SORTABLE slides */
var sortablelistSelector = "#main";
var sortablelistCookieName = "sortablelistCookie";
var sortablelistCookieExp = 365;
function sortablelistOrder() {
    jQuery.cookie(sortablelistCookieName, jQuery(sortablelistSelector).sortable("toArray"), {
        expires: sortablelistCookieExp,
        path: "/"
    });
}
function sortablelistRestoreOrder() {
    var i, previousorder, cookie = jQuery.cookie(sortablelistCookieName);
    if (!cookie) {
        return;
    }
    previousorder = cookie.split(',');
    for (i = 0; i < previousorder.length; i++) {
        jQuery('#' + previousorder[i]).appendTo(jQuery(sortablelistSelector));
    }
}

/* SORTABLE COOKIE */
jQuery(sortablelistSelector).sortable({
    cursor: "move",
    update: function () {
        sortablelistOrder();
    }
});



	

// now run all functions
//////// on clicking these determine ID clicked on, then give it value from above
	function goHere() {
			var shortid = $(this).parent().parent().attr('id'); // get id name
			var speed = 900;
			var where = window[shortid]; 
			// get value of variable, using name of id
			$('html, body').animate({
				scrollTop: where - 25
			}, speed);
			}
			

// main functionalty to open/close relevant slides/buttons depending on where clicked 	 
	function openThis() {
		$(this).siblings('.expand').toggleClass('closed open', 800);
		$(this).parent().children('.clickme, .hideme').toggleClass('show hide', 800);
		// toggle PLUS in orange in THIS slide, stop all pulsing if needed
		$(this).parent().children().children('.easy_plus').toggleClass('pulseate plus_hide').stopPulse();
		$(this).parent().children().children('.ex').toggleClass('ex_hide', 800).stopPulse();
		// click on tip to open THIS window
		$(this).parent().parent('.closed').switchClass('closed', 'open', 800);
		$(this).parent().find('.easytip_closed').switchClass('min', 'max');
		$(this).parent().find('.max').switchClass('max', 'min');
        }


	function closeThis() {
		$(this)
			.parent().find('.easytip_closed').removeClass('max').addClass('min')
			.siblings('.expand').removeClass('open', 500, "easeInOutCubic").addClass('closed')
			.parent().children('.clickme').removeClass('hide',500).addClass('show',500)
			.parent().children('.hideme').removeClass('show',500).addClass('hide',500);
		$(this).parent().parent().find('.ex').addClass('ex_hide',500).stopPulse();
		$(this).parent().parent().find('.easy_plus').removeClass('plus_hide',500).addClass('pulseate',500).stopPulse();
        }

    function closeThat() {
       // find stuff in OTHER slides besides one clicked
		$(this).parent().parent().siblings().children().find('div.expand').switchClass('open', 'closed', 800); // close 
		$(this).parent().parent().siblings().children().children('.hideme').removeClass('show', 800).addClass('hide', 800);
		$(this).parent().parent().siblings().find('div.clickme').removeClass('hide', 800).addClass('show', 800);
		$(this).parent().parent().siblings().find('div.easytip_closed').removeClass('max').addClass('min');

// if slide (a) is open and you click slide (b)
		$(this).parent().parent().siblings().find('div.easy_plus').removeClass('plus_hide').addClass('pulseate').stopPulse();
		$(this).parent().parent().siblings().find('div.ex').addClass('ex_hide').stopPulse();
        }
		
	function closeAll(){
		s=300
			$(document.body).children().children('#main').find('div.easytip_closed').delay(500).removeClass('max').addClass('min');
			$(document.body).children().children('#main').find('div.expand').switchClass('open', 'closed', s);
			$(document.body).children().children('#main').find('div.clickme').removeClass('hide').addClass('show');
			$(document.body).children().children('#main').find('div.hideme').removeClass('show').addClass('hide');
			$(document.body).children().children('#main').find('div.easy_plus').removeClass('plus_hide').addClass('pulseate').stopPulse();
			$(document.body).children().children('#main').find('div.ex').addClass('ex_hide').stopPulse();
		}

	
/////////////////////////// Column Mathing for heights of divs
		function matchColHeights(col1, col2) {
			var col1Height = $(col1).height();
			console.log(col1Height);
			var col2Height = $(col2).height();
			console.log(col2Height);
			if (col1Height < col2Height) {
				$(col1).height(col2Height);
			} else {
				$(col2).height(col1Height);
				}
			}

///////////////////////////////		
		

         // jump from menu to div
		 $(function () {

				// find any class(menu item) in header with 'slide' in it
						   $('#header [class*="slide"]').click(function () {
							window.there = $(this).attr('class');
							closeAll();
							goThere.apply(there);
							openWhat.apply(there);
							
							return false;
							
						});
					
					});
	

		function openWhat(){
			divID="#"+there;
			$(divID).find('div.expand').delay(1000).switchClass('closed', 'open', 900);
			$(divID).children().find('div.easytip_closed').delay(1000).switchClass('min', 'max', 900);
			$(divID).find('div.clickme').delay(1000).addClass('hide', 500).removeClass('show', 500);
			$(divID).find('div.hideme').delay(1000).addClass('show', 500).removeClass('hide', 500);
			$(divID).find('div.easy_plus').delay(1000).removeClass('pulseate').addClass('plus_hide').stopPulse();
			$(divID).find('div.ex').delay(1000).removeClass('ex_hide').stopPulse();
			}
	
		
		 function goThere() {
			var shortid = there; // get id name
			var speed = 1200;
			var where = window[shortid]; 

			$('html, body').animate({
				scrollTop: where - 25
			}, speed);
		}

//////////////////// pulse for orange  & blue //////////

        $(function () {
            $.extend($.fn.pulse = function () {

                var fadeOutDuration = 300;
                var fadeInDuration = 200;
                $(this).attr('pulsing', 'y');

                $(this).animate({
                    opacity: .2,
                    fontSize: '20px',
                    color: '#ffffaa',
                    fontWeight: 'normal',
                    top: '45px',
                    right: '115px'

                }, fadeOutDuration, function () {
                    $(this).animate({
                        opacity: 1,
                        fontSize: '30px',
                        color: '#ffffff',
                        fontWeight: 'bold',
                        top: '40px',
                        right: '112px'
                    }, fadeInDuration, function () {
                        if ($(this).attr('pulsing') == 'y') $(this).pulse();
                    });
                });
                return $(this);
            });
            $.extend($.fn.stopPulse = function () {
                $(this).attr('pulsing', '').stop(true, true).animate({
                    opacity: 1,
                    fontSize: '20px',
                    fontWeight: 'normal',
                    color: '#ffffff',
                    top: '45px',
                    right: '115px'
                });
            });

            $('.pulseate').parent().hover(function () {
                $(this).children('.pulseate').pulse();
            }, function () {
                $(this).children('.pulseate').stopPulse();
            });
        });

 /////// pulse blue //////


        $(function () {
            $.extend($.fn.bluepulse = function () {

                var fadeOutDuration = 300;
                var fadeInDuration = 200;
                $(this).attr('pulsing', 'y');

                $(this).animate({
                    opacity: .2,
                    fontSize: '14px',
                    color: '#ffffaa',
                    top: '10px',
                    right: '10px'

                }, fadeOutDuration, function () {
                    $(this).animate({
                        opacity: 1,
                        fontSize: '20px',
                        color: '#ffffff',
                        top: '7px',
                        right: '8px'
                    }, fadeInDuration, function () {
                        if ($(this).attr('pulsing') == 'y') $(this).bluepulse();
                    });
                });
                return $(this);
            });
            $.extend($.fn.stopbluePulse = function () {
                $(this).attr('pulsing', '').stop(true, true).animate({
                    opacity: 1,
                    fontSize: '14px',
                    color: '#ffffff',
                    top: '10px',
                    right: '10px'
                });
            });

            $('.pulseblue').parent().hover(function () {
                $(this).children('.pulseblue').bluepulse();
            }, function () {
                $(this).children('.pulseblue').stopbluePulse();
            });
        });
////// end pulsing function(s)/////// 


///////// DOC READY STUFF that depends on slides being created first

$(document).ready(function(){


		$('div.toggle').click(function () {
			goHere.apply(this);
			closeThat.apply(this);
			openThis.apply(this);
		});

		$("div.top").click(function () {
			closeThat.apply(this);
			closeThis.apply(this);
			// delay a moment to let it close then smooth scroll to top			
			$('html, body').delay(700).animate({
				scrollTop: $('body').offset().top - 50
			}, 900);
		});


// loop through and match columns expand and orange
		for (var s=1; s<size+1; s++)
		{
       //     alert ('#slide'+s+' .easytip');
			matchColHeights('#slide'+s+' .easytip', '#slide'+s+' .expand_content');	
			var test = $('#slide'+s+' .expand_content').height();
		//	alert (test);
		//	$('#slide'+s+' .expand_content').height(900);
         }
//


// lightbox on button 
	$("#main a, #footer a").click(function () {
	$('#boxer').addClass('smallboxb').removeClass('smallboxa').switchClass('smallboxb', 'bigbox',400);
	$('.dis p').switchClass('disb',0).delay(500).switchClass('disb', 'disa');
	});

	$(".dis").click(function () {
	//$('.dis p').toggle('explode', {pieces: 16}, 1000);
	
	$('.dis p').switchClass('disa', 'disb',300).delay(500).switchClass('disb', 'disa');
	$('#boxer').delay(1300).switchClass('bigbox', 'smallboxb', 500).switchClass('smallboxb', 'smallboxa');
		});	
// lightbox on button

$(".reset").click(function () {
	$.removeCookie("sortablelistCookie", { path: '/' });
	alert('reset');
	//$('.dis p').toggle('explode', {pieces: 16}, 1000);
	});	
	
// get locations of each "slide" and store starting positions of main ID's. 
// Putting near end of doc to get most accurate positions

		for (var s=1;s < (size+1);s++)
		{
		window['slide'+s] = $("#slide"+s).offset().top - 0;
		}		

	
});

