
	$(document).ready(function() 
	{

		// Here all containers are prepared, except for those that hold images.
		// Elements are added to the containers at this stage.
		// First test



		var back = ["#ffff99","#ffffee","#ffffdd","#eeeeff","#ffee99","#eeffee","#ffffff"];
		for (i=1;i<250;i++) 
		{
			var w = 4 * (parseInt(Math.random() * 100) + 20) - 1,
				h = 3 * (parseInt(Math.random() * 80) + 20) - 1;
				
				
			var rand = back[Math.floor(Math.random() * back.length)];
			//$('div').css('background',rand);
				
				
			$('<div class="content" style="background-color:'+rand+';"><h2>Eric\'s Sticky Note '+i+'</h2><p>Random Meaningless Text # '+i+'</p></div>').width(w).height(h).appendTo('.demoa');
		}

		// Make sure the "empty" test is actually empty and call freetile on it.
        $( '.demoa' ).freetile(
		
        {
		animate: true,
		elementDelay: 0,
		containerAnimate:true

        });


	});

