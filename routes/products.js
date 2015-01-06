
var express = require('express');

var router = express();


router.get('/hello', function(req, res, next) {
    return res.json({
        success: true,
        statusCode: 200,
        data: 'Hello Word'
    });
});