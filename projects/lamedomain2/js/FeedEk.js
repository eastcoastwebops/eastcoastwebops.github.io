/*FeedEk jQuery RSS/ATOM Feed Plugin v2.0
* http://jquery-plugins.net/FeedEk/FeedEk.html  
* https://github.com/enginkizil/FeedEk
* Author : Engin KIZIL http://www.enginkizil.com */

var bl=0; // reset again, if needed, the blog article list number

(function($){$.fn.FeedEk=function(opt){var def=$.extend({FeedUrl:"https://rss.cnn.com/rss/edition.rss",MaxCount:5,ShowDesc:true,ShowPubDate:true,CharacterLimit:0,TitleLinkTarget:"_blank",DateFormat:"",DateFormatLang:"en"},opt);var id=$(this).attr("id"),i,s="",dt;$("#"+id).empty().append('<img src="loader.gif" />');$.ajax({url:"https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num="+def.MaxCount+"&output=json&q="+encodeURIComponent(def.FeedUrl)+"&hl=en&callback=?",dataType:"json",success:function(data){$("#"+id).empty();
	
	$.each(data.responseData.feed.entries,function(e,item){
			bl++;
	s+='<li class="item'+bl+'"><div class="itemTitle"><a href="?page=blogarticle&article='+bl+'" >'+item.title+"</a></div>";if(def.ShowPubDate){dt=new Date(item.publishedDate);if($.trim(def.DateFormat).length>0){try{moment.lang(def.DateFormatLang);s+='<div class="itemDate">'+moment(dt).format(def.DateFormat)+"</div>"}catch(e){s+='<div class="itemDate">'+dt.toLocaleDateString()+"</div>"}}else{s+='<div class="itemDate">'+dt.toLocaleDateString()+"</div>"}}if(def.ShowDesc){if(def.DescCharacterLimit>0&&item.content.length>def.DescCharacterLimit){s+='<div class="itemContent">'+item.content.substr(0,def.DescCharacterLimit)+"... (<a href=?page=blogarticle&article="+bl+" >Continue</a>)</div>"}else{s+='<div class="itemContent">'+item.content+"</div>"}}});$("#"+id).append('<ul class="feedEkList">'+s+"</ul>")}})}})(jQuery);
	
	//?page=' + thelink + '\
	//blogarticle&article=2