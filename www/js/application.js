

require(['featureMe'],function(){


    $('.featureProduct').on('click', function(){
       $(this).parent().parent().featureMe();
    });


});







//require.config({
//    'baseUrl': '/www/js'
//    ,
//    'paths': {
//        'jquery': 'jquery'
//    }
//});

//require(['jquery'], function ($) {
//    console.log('jquery');
//    return 'alex'
//});
//
//
//require(['common/featureMe'], function (fm) {
//    console.log('featureMe');
//    return 'alex'
//});