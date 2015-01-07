
define('productController',['product', 'featureMe'],function(product,fm){
    
    var productController = function(){


        return {
            setupFM: function(ele){

                fm.setup(ele)

            }
        };
    };

    return productController();
});



//$('.featureProduct').on('click',function(){
//    new fm().setup($(this).parent().parent());
//});