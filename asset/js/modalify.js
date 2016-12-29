(function($) {

    $.fn.modalify = function( options ) {

        // Establish our default settings
        var settings = $.extend({
        	container_bg_color : '#000000',
        }, options);

        return this.click( function() {

        	var modal_container;
        	var modal_content;
        	

            if ( settings.container_bg_color ) {
		        $('body').css( 'backgroundColor', settings.container_bg_color );
		    }
        });

    }

}(jQuery));