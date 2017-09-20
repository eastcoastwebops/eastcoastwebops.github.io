$(document).ready(function(){

		 $(function() {
			$( "#slides" ).accordion({
			animate: {
				duration: 1500
			},
			  collapsible: true,
			  heightStyle: "content",
			   active: false
				
			});
		  });
 
		$('#slides h2.inactive').click(function () {
		var s=700;
		$(this, 'inactive').switchClass('inactive', 'active',s);
		$(this, 'inactive').siblings().removeClass('active',s).addClass('inactive',s);
			
		}); 

		
		$(document).on('click','.active',function () {
		var s=700;
		$('.active').removeClass('active',s).addClass('inactive',s);
		
			
		}); 
			
 
 
 
});