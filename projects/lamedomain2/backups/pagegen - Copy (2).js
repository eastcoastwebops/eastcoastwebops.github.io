

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
//window.fileurl = "";
window.folderurl ="content/";
window.sitetitle = "A Domain With No Name";
window.sitetitleplus = sitetitle + '<img src=\"' + fileurl + 'logo/sitelogo_rot.png">';

/*
window.title = [  // first is file name, 2nd is different displayed name if present
    "Home","Welcome",
    "How It Works","",
	"Work Resume", "",
    "Coding Examples", "",
	"frontend","Front End Dev Song",
	"To Do", "Site To Do List",
	"blog", "My Blog Articles",
    "Two Column Page","Two Column TEST",
    "Three Column Top","Three Column TOP TEST",
    "Two Columns On Bottom","Two Column on BOTTOM TEST"
 // need a new page? Add it here, then create new html file called same. 
    //,"The Last Chapter"
];
*/


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


    // initialize first default page stuff

    //fadeTo(100,0.0);

$("body").hide(0, function() {


	$( "#content" ).load( fileurl+folderurl+whichpage + ".html", function() {
	//	alert (fileurl+folderurl+whichpage);
	//history.pushState({}, '', '?page=blogarticle&article=2');
	//$( "#content" ).load( "https://dl.dropboxusercontent.com/u/508866/webcode/lamedomain/content/blogarticle.html", function() {

			$("#content img").each(function() {
			$(this).attr("src", $(this).attr("src").replace("images", fileurl + "images"));
			});

	
  });
			

     //   $("#logo").html("<img src=" + fileurl + "logo/" + title[0].replace(/\s+/g, '_').toLowerCase() + ".png>"); // load default logo for first page above

        // load default page &
        $('li.' + whichpage).addClass('menuon'); // activate first menu item (from above)

      //  $page = (whichpage); // get first page title (from menu above)
		$page = $('li.' + whichpage).text();
        $(document).prop('title', $page);

        $('#siteTitle').html(sitetitleplus); // write out initial title	
        $('h1').text($page).fadeTo(900, 1.0, 'swing'); // write out initial title	

        $('#footer').text($page + " is (c) 2015, Eric K. Holbrook"); // write out initial footer (change to variable later)
        $("body").delay(500).fadeIn(500);

        // finish default state
    });

    // all the fun click stuff 
	
	
	$("body").on("click", "#menu li, #footermenu li, #content a.intlink", function(e) {
  //  $('#menu li, #footermenu li, #content a.intlink').on('click', function(e) {

        e.preventDefault();
	

        $('h1').text($page).fadeTo(200, 0.0, 'swing'); // fade out current h1 with pagename
        $('#footer').fadeTo(100, 0.0); // fade out current footer
		
        var $which = $(this).attr('class').split(' ')[0]; // get item clicked on and FIRST class, by finding space in class names (if any)
		//alert($which);
		
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

        $("#main").hide('slide', {
            direction: 'up'
        }, 500, function() {

            // fade out entire main id
			
            $('h1').text($page).delay(500).fadeTo(900, 1.0, 'swing'); //fade back in new title
			$( "#content" ).load( fileurl+folderurl+$which + ".html", function() {
				$("#content img").each(function() {
				$(this).attr("src", $(this).attr("src").replace("images", fileurl + "images"));
					});
				});
			

			
            //load and fade in desired html requested
            $("#main").delay(900).show('slide', {
                direction: 'up',
                easing: 'easeOutElastic'
            }, 900); // fade back in main
            $('#footer').delay(100).text($page + " is (c) 2015: Eric K. Holbrook").fadeTo(1000, 1.0);

        });

		history.pushState({}, '', '?page='+$which); // push html name to address bar

		$(this).addClass('menuon'); // activate correct menu
        $(this).siblings().removeClass('menuon'); // disable other menu items
        $page = $(this).text(); // get new page name
        $(document).prop('title', $page); // write to meta/title tag the new title

    }); // end all the click stuff


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