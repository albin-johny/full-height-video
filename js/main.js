(function ($) {
	"use strict";

    jQuery(document).ready(function($){
		


        
        
        
        //hero-area height equation
		$(window).bind('resizeEnd', function () {
			$(".hero-area").height($(window).height() - 60);
		});
        
        var windowWidth = $(window).width();
        
        if(windowWidth < 991){
            $(window).bind('resizeEnd', function () {
                $(".hero-area").height($(window).height());
            });
        }
        
		$(window).resize(function () {
			if (this.resizeTO) clearTimeout(this.resizeTO);
			this.resizeTO = setTimeout(function () {
				$(this).trigger('resizeEnd');
			}, 300);
		}).trigger("resize");
        
        
        
        
        
		
		
	

	
		
  
	
	
	


	


}(jQuery));	

  