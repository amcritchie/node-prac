define('featureMe',['jquery'], function ($) {
    var fm = function (element,options) {

        var elementWithX = element.prepend('<a class="unfeature" style="position: relative; float: right">&#x02297</a>');
        var x = elementWithX.children('.unfeature');

        element.toggleClass('featured');

        x.on('click', function () {
            $(this).remove();
            element.toggleClass('featured');
        });
    };

    $.featureMe = fm;

    $.fn.featureMe = function (options) {
        $.featureMe($(this), options);
    };

    //return fm;
    //$.featureMe = function (element, options) {
    //
    //    var elementWithX = element.prepend('<a class="unfeature" style="position: relative; float: right">&#x02297</a>');
    //    var x = elementWithX.children('.unfeature');
    //
    //    element.toggleClass('featured');
    //
    //    x.on('click', function () {
    //        $(this).remove();
    //        element.toggleClass('featured');
    //    });
    //};
    //
    //$.fn.featureMe = function (options) {
    //    $.featureMe($(this), options);
    //};
});
//(function ($) {
//    "use strict";
//    // Global Variables
//    var settings = {percent: 1.5, duration: 50, onDone: null};
//
//    $.featureMe = function (element, options) {
//
//        settings = $.extend({}, settings, options);
//
//        var elementWithX = element.prepend('<a class="unfeature" style="position: relative; float: right">&#x02297</a>');
//        var x = elementWithX.children('.unfeature');
//
//        var initialHeight = element.height();
//        var initialWidth = element.width();
//
//        var newHeight = initialHeight * settings['percent'];
//        var newWidth = initialWidth * settings['percent'];
//
//        element.toggleClass('featured', 1000, "easeOutSine");
//
////            element.animate({
////                height: newHeight + 'px',
////                width: newWidth + 'px'
//////                tranform: 'scale(100px,100px)'
//////                scale: '1.5'
////            }, settings['duration'], settings['onDone']);
////
////            $('.unfeature').off('click');
//        x.on('click', function () {
//            $(this).remove();
//            element.toggleClass('featured', 1000, "easeOutSine");
//
//            //element.animate({
//            ////    height: initialHeight + 'px',
//            ////    width: initialWidth + 'px'
//            //}, settings['duration']);
//        });
//    };
//
//    $.fn.featureMe = function (options) {
//        $.featureMe($(this), options);
//    };
//
//})(jQuery);