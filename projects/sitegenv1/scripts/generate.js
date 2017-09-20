	
$( document ).ready(function() {
	
		$(window).bind('scroll',function(e){
			parallaxScroll();
	});
	
	
	 // url example index.html?gallery=cities
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
	var loc = window.location.pathname;
	var dir = loc.substring(0, loc.lastIndexOf('/')) + "/";
	 // use dir as root where all files will be referenced from
	 <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx MENU xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  -->	
	//   use this if you want to use external 
		var data = $.ajax({
		url: dir + "content/sitemenu.txt",
		async: false
		}).responseText;
//alert (data);	
	 // remove this if external
	// var data = $('#menu_data').text(); // third method -- load content from div (easier to read)
	 var data = data.replace(/\r?\n|\r/g, ''); // but then strip out all line breaks

	//window.title = data.split(",");
	window.title = data.split("[").join("[,").split("]").join("],").split(",");
	//title = title.replace(/,\s*$/, "");
//	window.title = data.split(",");
	
	
//	window.title = window.title.replace(/,\s*$/, "");
	
  //alert (title);

	window.fileurl = dir;
	window.folderurl = "content/";
	window.sitetitle = "Eric. Knight. Holbrook"; //may have to tweak #siteTitle css entry
	window.sitetitleplus = sitetitle + '<img src=\"' + fileurl +
	    'logo/sitelogo_rot.png">';
	window.menusize = title.length; // find out how many titles
	window.themenu = ""; // define here to keep from undefined;
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
	        window.themenu += "<ul class='subitem'>";
			isSubmenu = "true";
			topLevel = "false";
			reducecount=reducecount-1;
			
	    } else if (thelink.indexOf("]") > -1) {
	        window.themenu += "</ul></li>";

			isSubmenu = "false"
				topLevel = "true";
				//reducecount=reducecount-1;
	    } 
		
		 else if (thelink.indexOf("/") > -1) {
		reducecount=reducecount-1;
			i = i + 1;
	}
		
		
		else {
	        window.themenu += '<li class=\"' + thelinkb + '\"><a href="?page=' +
	            thelinkb + '\"><span class=\"placement\">' + thetitle +
	            '</span></a>';
				isSubmenu = "false";
	    }
		

		
	    // else {window.themenu += "<li>";}

		if (topLevel == "true") {
		reducecount++; // keep track of top menu items
	    } 
		
		i = i + 1;
//	alert (isSubmenu);
	}

	window.cssmenu = Math.floor(100 / (reducecount /* width minus submenus */ ));
	 // divide this by 100 to get percentage to use for css.
	 //alert(cssmenu);
	window.cssstring = "<style type=\"text/css\">"; // now write out custom css
	window.cssstring += '#menu ul > li {width:' + cssmenu + '%;}\n';
	//window.cssstring += '#menu .subitem{width:' + cssmenu + '%;}\n';
	window.cssstring += "</style>";
	$(document).ready(function() {
	    $('#themenu').replaceWith(themenu); // build menu
	    //  $('#thefootermenu').replaceWith(themenu);
	    $('.cssstyle').replaceWith(cssstring); // build dynamic css based on # of menu items
	    //************************************************** initialize first default page stuff, 
	    //************************************************** should only happen on a forced page refresh/reload
	    //************************************************** page starts faded out
	    $("body").hide(0, function() {
	        // load content first and because images are not on this domain, go through each and replace with correct URL
	        //alert (whichpage);
	                $("#content").load(fileurl + folderurl + whichpage + ".html", function() {

			$('li.' + whichpage).addClass('menuon'); // activate first menu item (from above)
	                $page = $('li.' + whichpage).text();
	                //	$page = "this";
	                $(document).prop('title', $page);
	                $('#siteTitle').html(sitetitleplus);
	                $("h1").text($page);
	                $('#title').switchClass("unloaded",
	                    "loaded", 500, "easeInOutQuad").fadeIn(
	                    1700);
	                $('#footer').text($page +
	                    " is (c) 2016, Eric K. Holbrook");
	                $("body").delay(1000).fadeIn(1200);
					});
	    });
	    //************************************************** END INITIAL STATE
	    //************************************************** all the fun click stuff 
	    $("body").on("click",
	        "#menu li a, #footermenu li a, #content a.intlink",
	        function(e) {
		    $("html, body").animate({
	            scrollTop: 0
	        }, "fast");
		    
		
			$("h1").text($name).fadeOut(700);
			$(this).closest('#menu').find('.menuon').removeClass('menuon');
			$(this).parent().parent().closest('li').addClass('menuon'); 
		    $(this).parent().addClass('menuon'); 
		
			
	            var $which = $(this).parent().attr('class').split(' ')[0];
	            var $name = $(this).text();

				e.preventDefault();
	            $('#footer').fadeTo(100, 0.0);
	            // get item clicked on and FIRST class, by finding space in class names (if any)
	            $.ajax({
	                url: fileurl + 'logo/' + $which + '.png',
	                type: "HEAD",
	                success: function() {
	                    $("#logo").html("<img src=" +
	                        fileurl + "logo/" + $which +
	                        ".png>");
	                },
	                error: function() {
	                    $("#logo").html("<img src=" +
	                        fileurl +
	                        "logo/no_logo.png>");
	                }
	            });
	         
		var $randirection = ['left','right','up','down'];
		var rand = Math.floor(Math.random() * (4 - 0 + 0)) + 0;
		
		$("h1").text($page).fadeOut(700);
		$('#title').switchClass( "loaded", "unloaded", 500, "easeInOutQuad" );
		$("#main").hide('slide', {
            direction: 'left',
			easing: 'easeInOutQuad'
        }, 900, function() {

	//********************** Now after everything is fade out, load and fade back in *****
			$( "#content" ).load( fileurl+folderurl+$which + ".html", function() {
				$("#content img").each(function() {
					$(this).attr("src", $(this).attr("src").replace("images", fileurl + "images"));
					});
				var $randirection = ['left','right','up','down'];
				var rand = Math.floor(Math.random() * (4 - 0 + 0)) + 0;

				
			//*************** Once content loaded fade back in ******************
				$("#main").delay(90).show('slide', {
					direction: 'left',
					easing: 'easeInOutQuad'
					}, 900, function() {
					
					$("h1").text($page).fadeIn(700)
					$('#title').switchClass( "unloaded", "loaded", 1000, "easeInOutQuad" );
					$('#footer').delay(500).text($page + " is (c) 2016: Eric K. Holbrook").fadeTo(1000, 1.0);
					
					});
			});   
			//********************************** end fade everything back in
        });  
				
				// Only works in Firefox when offline
	            history.pushState({}, '', '?page=' + $which); // push html name to address bar 
	            $page = $(this).text(); // get new page name
	            $(document).prop('title', $page); // write to meta/title tag the new title
	        });
	    //********************************************************* end all the click stuff
	    $("a[href='#top']").click(function() {
	        $("html, body").animate({
	            scrollTop: 0
	        }, "slow");
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
	            return navigator.userAgent.match(
	                /iPhone|iPad|iPod/i);
	        },
	        Opera: function() {
	            return navigator.userAgent.match(/Opera Mini/i);
	        },
	        Windows: function() {
	            return navigator.userAgent.match(/IEMobile/i);
	        },
	        any: function() {
	            return (isMobile.Android() || isMobile.BlackBerry() ||
	                isMobile.iOS() || isMobile.Opera() ||
	                isMobile.Windows());
	        }
	    };
	    // turn off all menu items
	    $("#menu li").addClass(function(i) {
	        return "menuoff";
	    });
	    //		$("#menutrigger").removeClass('on').addClass('off');
	    //if menu us shown, but click menu thingy, turn back off
	    $("body").on("click", "#menutrigger", function() {
	//	alert ('clicked');
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

	    function checksize() {
	            if (($(window).width() < 768) || (isMobile.any())) { // do small screen stuff
	            } // end small device stuff 
	            else { // do big screen stuff
	            }
	        } // end checksize
	        //initialize
	    checksize();
	    //call when the page resizes.
	    $(window).resize(function() {
	        checksize();
	    });

	}); // end doc ready	
	function pop(url) {
	    newwindow = window.open(url, 'name',
	        'height=600,width=650, top=100, left=400');
	    if (window.focus) {
	        newwindow.focus()
	    }
	    return false;
	}
	
	


function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('#slide').css('top',(0-(scrolled*.01))+'px');
    $('#main').css('top',(0-(scrolled*1))+'px');
	$('#title').css('top',(0-(scrolled*1))+'px');
    $('#body').css('top',(0-(scrolled*.3))+'px');

	
}
	
	
	
});	
