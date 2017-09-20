// sort
	(function($) {
	    $.fn.listSorter = function(options) {
	        var that = this;
	        var settings = {
	            order: 'asc'
	        };
	        options = $.extend(settings, options);
	        var items = $('li', that).get();
	        var filtered = '';
	        switch (options.order) {
	            case 'asc':
	            case 'desc':
				break;
	            default:
				return new Error('Invalid option');
	        }
	        return that.each(function() {
	            if (options.order == 'asc') {
	                var asc = items.sort(function(a, b) {
	                    var $text1 = $(a).text();
	                    var $text2 = $(b).text();
	                    return $text1[0].toLowerCase() >
						$text2[0].toLowerCase();
	                });
	                for (var i = 0; i < asc.length; i++) {
	                    filtered += '<li>' + $(asc[i]).text() +
						'</li>';
	                }
	                $(that).html(filtered);
	            } else {
	                var desc = items.sort(function(a, b) {
	                    var $text1 = $(a).text();
	                    var $text2 = $(b).text();
	                    return $text1[0].toLowerCase() <
						$text2[0].toLowerCase();
	                });
	                for (var j = 0; j < desc.length; j++) {
	                    filtered += '<li>' + $(desc[j]).text() +
						'</li>';
	                }
	                $(that).html(filtered);
	            }
	        });
	    };
	})(jQuery);
// sort