   jQuery('#searchfor').on('click', function(event) {
            jQuery('#searchfor').val('');
        });

        baseurl = 'https://www.thinkvacuums.com';
        //  links.sort();
        urls =
            '<select class="urldrop" size="1"><option>View Our Knowledge Base</option>';

        list = '<ol class="topics">';

        for (var i = 0; i < links.length; i++) {
            title = links[i].split('|');
            //	title = title.trim();
            if (title[0].trim() == 'Page Name') {
                title[0] = title[1];
            }

            var type = '';
            if (title[1].trim() == 'topic_break') {

                // title[0] = title[1];
                type = 'topic';
            }

            urls += '<option value="' + baseurl + title[1].trim() + '">' + (i + 1) + '. ' + title[0].trim() +
                '</option>';


            if (type !== 'topic') {
                list += '<li><a target="_blank" href="' + baseurl + title[1].trim() + '">' + title[0].trim() +
                    '</a></li>';
            }

            if (type == 'topic') {
                list += '<h3 class="topic">' + title[0].trim() +
                    '</a></h3>';
            }
        }
        // droplistone += '</select>';
        jQuery('.urls').html(urls);
        jQuery('.article_list').html(list);

        jQuery(function() {
            jQuery('.urldrop').on('change',
                function() {
                    var url = jQuery(this).val(); // get selected value
                    if (url) { // require a URL
                        window.open(url, '_blank'); // redirect
                    }
                    return false;
                });
        });

        jQuery.expr[':'].icontains = function(a, i, m) {
            return jQuery(a).text().toUpperCase()
                .indexOf(m[3].toUpperCase()) >= 0;
        };

        jQuery("#searchfor").keyup(function() {
            var search = jQuery('#searchfor').val();
            search = search.toLowerCase();

            jQuery('.topics li a, .topics li').css({
                'background-color': 'transparent',
                'color': '#bbbbbb'
            });


            jQuery('.topics li a:icontains("' + search + '")').css({
                'background-color': '#ffff99',
                'color': '#000000',
                'display': '',
                'font-weight': 'bold'
            });

            jQuery('.topics li:icontains("' + search + '")').css({
                'color': '#1861BD',
                'display': '',

            });


            if (search == '') {
                jQuery('.topics li a, .topics li').css({
                    'background-color': '',
                    'font-weight': '',



                });
                jQuery('.topics li a').css({
                    'color': '',

                });
            }


            jQuery('#searchfor').on('focusout', function() {
                jQuery('#searchfor').val('Start Typing To Search Our Knowledge Base');

                jQuery('.topics li a, .topics li').css({
                    'background-color': '',
                    'font-weight': '',
                    'color': '#1861BD',

                });
                jQuery('.topics li a').css({
                    'color': '',

                });
            });
        });
