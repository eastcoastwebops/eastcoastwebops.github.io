jQuery(document).ready(function(){window.isMobileOpen=!1,jQuery(".page-header-container .nav-container-mobile .menu-icon").on("click",function(){jQuery(".page-header-container .nav-container-mobile .sf-menu-phone").slideToggle(),jQuery(this).toggleClass("active"),jQuery(this).toggleClass("down")}),jQuery(".swipe .menu-icon").on("click",function(){jQuery(".swipe .sf-menu-phone").slideToggle(),jQuery(this).toggleClass("active"),jQuery(".menu-icon").hasClass("active")?window.isMobileOpen=!0:window.isMobileOpen=!0}),jQuery(".sf-menu-phone").find("li.parent").append("<strong></strong>"),jQuery(".sf-menu-phone li.parent strong").on("click",function(){"opened"==jQuery(this).attr("class")?jQuery(this).removeClass().parent("li.parent").find("> ul").slideToggle():jQuery(this).addClass("opened").parent("li.parent").find("> ul").slideToggle()}),jQuery(".swipe-control, .block-cart-header, .top-search").on("click",function(){jQuery(".sf-menu-phone").slideUp(),jQuery("#menu-icon").removeClass("active")})});var thinkVacuum={initPage:function(){},showFilterMenu:function(a){jQuery(a).each(function(b){console.log(a[b]);var c=a[b];jQuery(".leftfilt"+c+" .morefilter").click(function(){jQuery(".leftfilt"+c+" .morefilter").css("display","none"),jQuery(".leftfilt"+c+" .lessfilter").css("display","block"),jQuery(".leftfilt"+c+" .hidefilter").css("display","block")}),jQuery(".leftfilt"+c+" .lessfilter").click(function(){jQuery(".leftfilt"+c+" .morefilter").css("display","block"),jQuery(".leftfilt"+c+" .lessfilter").css("display","none"),jQuery(".leftfilt"+c+" .hidefilter").css("display","none")})})}};