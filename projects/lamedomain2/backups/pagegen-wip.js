

// url example index.html?gallery=cities
function gup(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results == null) return null;
    else return results[1];
}
var whichpage = gup('page');
var article = gup('article');
if (whichpage == null) {
    whichpage = "home";
}


var data = $.ajax({
	url: "https://dl.dropboxusercontent.com/u/508866/webcode/lamedomain/menu.txt",
        async: false
    }).responseText;
    window.title = data.split(",");
	
window.fileurl = "https://dl.dropboxusercontent.com/u/508866/webcode/lamedomain/";	
window.folderurl ="content/";
window.sitetitle = "A Domain With No Name";
window.sitetitleplus = sitetitle + '<img src=\"' + fileurl + 'logo/sitelogo_rot.png">';

window.menusize = title.length; // find out how many titles
window.cssmenu = Math.floor(100 / menusize); // divide this by 100 to get percentage to use for css.
//alert(cssmenu);
window.cssstring = "<style type=\"text/css\">"; // now write out custom css
window.cssstring += '#menu li {width:' + cssmenu + '%;}\n';
window.cssstring += "</style>";
window.themenu = ""; // define here to keep from undefined;
var thelink = "";
var thetitle = "";
var i=0;
for (i=0; i< menusize;) {

	//theTitle = 
//alert (i);
	thelink = title[i].replace(/ /g, "_").toLowerCase();
    if (title[i+1] !="") {
		thetitle = title[i+1];
		}
	else {thetitle = title[i];}
	
    window.themenu += '<li class=\"' + thelink + '\"><a href="?page=' + thelink + '\">' + thetitle + '</a></li>';
	i=i+2;
}


$(document).ready(function() {
    $('#themenu').replaceWith(themenu); // build menu
  //  $('#thefootermenu').replaceWith(themenu);
    $('.cssstyle').replaceWith(cssstring); // build dynamic css based on # of menu items


//************************************************** initialize first default page stuff, 
//************************************************** should only happen on a forced page refresh/reload
//************************************************** page starts faded out


	window.$which = whichpage;
	
	//var $page = "text page";
	// load content first and because images are not on this domain, go through each and replace with correct URL
pageInOut();
window.$page= whichpage;

        // finish default state

//************************************************** END INITIAL STATE



//************************************************** all the fun click stuff 
	
	$("body").on("click", "#menu li, #footermenu li, #content a.intlink", function(e) {
		window.$which = $(this).attr('class').split(' ')[0];
		window.$page = $(this).text();
			
		e.preventDefault();
		
		$(this).addClass('menuon'); // activate correct menu
		$(this).siblings().removeClass('menuon'); // disable other menu items
		
		alert ( $(this) );
		if ($page =="") { $page = "Test Page";}// get new page name
		$(document).prop('title', $page); // write to meta/title tag the new title
		
		pageInOut();
    }); 
//********************************************************* end all the click stuff


    $("a[href='#top']").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "fast");
    });


	// mobile and small screen checks
	
	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() ||
			isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
			
		}
	};
	
	

			// turn off all menu items
			$("#menu li").addClass(function(i){return "menuoff" });
			//		$("#menutrigger").removeClass('on').addClass('off');
			
			
			//if menu us shown, but click menu thingy, turn back off
			$("body").on("click", "#menutrigger", function() {
				
				
				if ( $("#menu li").hasClass("menuoff") ) {
					$("#menu li").removeClass(function(i){return "menuoff" });
					$("#menutrigger").addClass('on').removeClass('off');
				}
				
				else  {
					$("#menu li").addClass(function(i){return "menuoff" });
					$("#menutrigger").addClass('off').removeClass('on');
				}
				
			$("html, body").animate({ scrollTop: 0 }, "fast");
				
			});	
			
			$("#menu li").click(function() {
				$("#menutrigger").removeClass('on').addClass('off');
				$("#menu li").addClass(function(i){return "menuoff" });	
			});	
			
	/*		$("#footermenu li").click(function() {
				$("#menutrigger").removeClass('on').addClass('off');
				$("#menu > li").addClass(function(i){return "menuoff" });	
				
				
			});	
	*/		


	
	function checksize() {
		if( ($(window).width() < 768) || (isMobile.any()  ) )
		{   // do small screen stuff
	
			
		}  // end small device stuff 
		else
		{  // do big screen stuff
			
		}
	}  // end checksize
	
	//initialize
	checksize();
	
	//call when the page resizes.
	$(window).resize(function() {
		checksize();
	});
	
	// mobile	


}); // end doc ready	







function pageInOut() {
		
		
	history.pushState({}, '', '?page='+$which); // push html name to address bar
	
		
		
		
		$('#footer').fadeTo(100, 0.0);
         // get item clicked on and FIRST class, by finding space in class names (if any)
		$.ajax({
			url: fileurl + 'logo/' + $which + '.png',
			type: "HEAD",
			success: function () {
				$("#logo").html("<img src=" + fileurl + "logo/" + $which + ".png>");
			},
			error: function () { 
				$("#logo").html("<img src=" + fileurl + "logo/no_logo.png>");
				
			}
			
		});
		
		
		$("h1").text($page).fadeOut(700);
		$('#title').switchClass( "loaded", "unloaded", 500, "easeInOutQuad" );
		$("#main").hide('slide', {
            direction: 'left',
			easing: 'easeInBack'
        }, 900, function() {

	//********************** Now after everything is fade out, load and fade back in *****
			$( "#content" ).load( fileurl+folderurl+$which + ".html", function() {
				$("#content img").each(function() {
				$(this).attr("src", $(this).attr("src").replace("images", fileurl + "images"));
					});
				
			//*************** Once content loaded fade back in ******************
				$("#main").delay(90).show('slide', {
					direction: 'right',
					easing: 'easeInBack'
					}, 900, function() {
					
					$("h1").text($page).fadeIn(700)
					$('#title').switchClass( "unloaded", "loaded", 1000, "easeInOutQuad" );
					$('#footer').delay(1500).text($page + " is (c) 2015: Eric K. Holbrook").fadeTo(1000, 1.0);
					
					});
			});   
			//********************************** end fade everything back in
        });  
		
		

		
}