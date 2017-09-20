jQuery.noConflict();
jQuery(document).ready(function() {
	var start = 0;
	var end = 5;
	var option = "all";
	writereview();
	paginate(option, start, end)
		//review form popup
	jQuery('#ratingForm').on('click', function(e) {
		e.stopPropagation();
	});
	jQuery('#stars').change(function() {
		/* setting currently changed option value to option variable */
		var option = jQuery(this).find('option:selected').val();
		/* setting input box value to selected option value */
		if (option == 'all'); {
			jQuery('.entry').fadeIn(300);
		}
		if ((option == 5) || (option == 4) || (option == 3) || (option == 2) || (option == 1)) {
			jQuery('.entry').hide();
			//	jQuery('.star' + option).fadeIn(600);
		}
		start = 0;
		paginate(option, start, end)
	});
	jQuery('.back').click(function(event) {
		option = jQuery('#stars').find('option:selected').val();
		start = start - end;
		paginate(option, start, end);
				jQuery('html, body').animate({
        scrollTop: jQuery("#topratings").offset().top
    }, 1000);
	});
	jQuery('.forward').click(function(event) {
		option = jQuery('#stars').find('option:selected').val();
		start = start + end;
		paginate(option, start, end);
		
		jQuery('html, body').animate({
        scrollTop: jQuery("#topratings").offset().top
    }, 1000);
		
	});

	function paginate(option, start, end) {
		var selector = '';
		if (option != 'all') {
			selector = '.star' + option;
		} else {
			selector = '.entry';
		}
		var howlong = jQuery(selector).size();
		jQuery('.back').show();
		jQuery('.forward').show();
		var through = start + end;
		if (option != 'all') {
			reviews = option + ' Star';
		} else {
			reviews = 'All'
		}
		if ((start + end) >= howlong) {
			jQuery('.forward').hide();
			through = howlong;
		} else if ((start - end) < 0) {
			jQuery('.back').hide();
		}
		if (end >= howlong) {
			jQuery('.back').hide();
		}
		jQuery('.entry').hide();
		jQuery(selector).slice(start, start + end).fadeIn(1000);
//		jQuery('.showing').html('Showing <span class="showingreviews">' + reviews + '</span> Reviews<br/><span class="showingstart">' + (start + 1) + '</span> through <span class="showingthrough">' + through + '</span> of <span class="showingend">' + howlong + '</span>');
		
				jQuery('.showing').html('<span class="showingstart">' + (start + 1) + '</span> through <span class="showingthrough">' + through + '</span> of <span class="showingend">' + howlong + '</span>');
		
	}
}); // end doc ready
function writereview() {
	var howmany = entries.length;
	var five = four = three = two = one = zero = 0;
	for (i = 0; i < howmany; i++) {
		var ratings = "";
		var parts = entries[i].split(">");
		switch (parts[4]) {
			case '5':
				ratings = '&#9733;&#9733;&#9733;&#9733;&#9733;';
				five = five + 1;
				break;
			case '4':
				ratings = '&#9733;&#9733;&#9733;&#9733;&#9734;';
				four = four + 1;
				break;
			case '3':
				ratings = '&#9733;&#9733;&#9733;&#9734;&#9734;';
				three = three + 1;
				break;
			case '2':
				ratings = '&#9733;&#9733;&#9734;&#9734;&#9734;';
				two = two + 1;
				break;
			case '1':
				ratings = '&#9733;&#9734;&#9734;&#9734;&#9734;';
				one = one + 1;
				break;
			case '0':
				ratings = '&#9734;&#9734;&#9734;&#9734;&#9734;';
				zero = zero + 1;
				break;
		}
		var newentry = "";
		newentry += '<div class="entry row star' + parts[4] + '">';
		newentry += '<div class="nameleft col-sm-2">';
		newentry += '<div class="rating">' + ratings + '</div>';
		newentry += '<div class="name">' + parts[1] + '</div>';
		newentry += '<div class="city">' + parts[2] + '</div>';
		newentry += '<div class="date">' + parts[0] + '</div>';
		newentry += '</div>';
		newentry += '<div class="commentright col-sm-10"><div class="quotepadding"><div class="quote quoteleft">"</div>' + parts[3] + '<div class="quote quoteright">"</div></div></div>';
		newentry += '<br style="clear:both;"/></div>';
		jQuery(newentry).appendTo('#reviews');
	}
	// 'date>name>city>comment>rating',
	var avg = ((five * 5) + (four * 4) + (three * 3) + (two * 2) + (one * 1)) / howmany;
	avg = avg.toFixed(2);
	var how = howmany + ' Reviews<br/>' + avg + ' out of 5 stars';
	var percent = 100 / howmany;
	// the chart //
	jQuery('.numreviews').html(how);
	jQuery('.stars5').html('<span class="revtype">5 Star</span> <span class="reviewgraph" style="width:' + percent * five + '%;"></span><span class="per">' + Math.round(percent * five) + '%</span>');
	jQuery('.stars4').html('<span class="revtype">4 Star</span> <span class="reviewgraph" style="width:' + percent * four + '%;"></span><span class="per">' + Math.round(percent * four) + '%</span>');
	jQuery('.stars3').html('<span class="revtype">3 Star</span> <span class="reviewgraph" style="width:' + percent * three + '%;"></span><span class="per">' + Math.round(percent * three) + '%</span>');
	jQuery('.stars2').html('<span class="revtype">2 Star</span> <span class="reviewgraph" style="width:' + percent * two + '%;"></span><span class="per">' + Math.round(percent * two) + '%</span>');
	jQuery('.stars1').html('<span class="revtype">1 Star</span> <span class="reviewgraph" style="width:' + percent * one + '%;"></span><span class="per">' + Math.round(percent * one) + '%</span>');
}

function showLight() {
	jQuery("#screenfill").fadeIn(1000);
	jQuery("#popcontent").delay(1500).fadeIn(1000);
}

function hideLight() {
	jQuery('#popcontent').fadeOut(500);
	jQuery('#screenfill').delay(500).fadeOut(1000);
}
jQuery(document).ready(function() {
	/*	setTimeout(function() {
			showLight()
		}, 1500);
	*/
	jQuery("#pop").click(function() {
		hideLight();
	})
	jQuery('.leave').click(function() {
		showLight();
	})
});