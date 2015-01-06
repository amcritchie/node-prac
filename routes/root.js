var express = require('express');
var router = express.Router();
var path = require('path');

var app = express();

var products = [
    {
        product: 'cups'
    },
    {
        product: 'tables'
    },
    {
        product: 'chairs'
    },
    {
        product: 'carpets'
    }
];

router.get('/', function (req, res, next) {

    res.render('index', {
        array: products
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
