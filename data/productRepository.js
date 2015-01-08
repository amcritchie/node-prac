
//var Product = require('../models/product');

var mongoose = require('mongoose');

var ProductRepository = function () {

    return {
        getAll: function(params, next) {

            mongoose.model('products', {title: String, des: String});

            mongoose.model('products').find(function (err, products) {
                return next(null, products);
            });
        }
    }
};

module.exports = ProductRepository();