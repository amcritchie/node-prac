var express = require('express');
var router = express.Router();
var path = require('path');

var app = express();

var ProductService = require('../dataServices/productService');

router.get('/products', function (req, res) {

    var params = {
      name: 'alex'
    };

    ProductService.getAll(params, function(err, list) {
        if (err) return next(err, null);

        console.log('lets se if we get the list.');
        console.log(list);

        return res.render('index', {
            array: list
        });

        //return res.json({
        //    success: true,
        //    statusCode: 200,
        //    data: list
        //});
    });
});

router.get('/everything', function (req, res) {

    var params = {
      name: 'micah'
    };

    ProductService.getAllProductsUsersLocations(params, function(err,list) {

        return res.render('everything', {
            array: list
        });

    });

});


router.get('/', function (req, res, next) {

    res.render('index', {
        array: [{title: 'This is a'}, {des: 'Hardcoded array'}, {title: 'title3'}]
    });
});


router.get('/data', function (req, res, next) {
    return res.json({
        success: true,
        statusCode: 200,
        data: 'Hello Word'
    });
});

module.exports = router;
