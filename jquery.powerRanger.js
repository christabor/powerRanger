/*!
 * jquery power ranger - A jQuery plugin to resize number (ranged) inputs based on length of characters!
 * (c) 2013 Chris Tabor <dxdstudio@gmail.com>
 * See license for information
 * <3
 * http://dxdstudio.com/labs/powerRanger
 * http://github.com/christabor/powerRanger
 */

 (function($){
    $.fn.powerRangeIt = function(options) {
        var defaults = {
            // subtracted from total font size -- adjust to your liking
            scale_factor: 12,
            cutoff_length: 7,
            cutoff_size: 20,
            scrub_nan: true
        },
        opts = $.extend(defaults, options);

        return this.each(function(k, elem){
            $(elem).on('change.powerRangeIt keyup.powerRangeIt', function() {

                // get number values for formula
                var width = $(this).width(),
                _elem = $(this),
                value = _elem.val(),
                font_size = parseInt(_elem.css('font-size').replace('px', ''), 10),
                char_length = $(this).val().length,
                new_size = ((10-char_length)*10)-opts.scale_factor;

                // scrub bad inputs
                if((isNaN(value) || value === '') && opts.scrub_nan) {
                    $(this).val('0');
                }

                // reset
                if(char_length >= opts.cutoff_length) {
                    new_size = opts.cutoff_size;
                }

                // update css with calculation
                _elem.css('font-size', new_size + 'px');
                return;
            });
        });
    };
})(jQuery);
