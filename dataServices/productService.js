var async = require('async');
var mongoose = require('mongoose');
var UserRepository = require('../data/userRepository');
var ProductRepository = require('../data/productRepository');
var LocationRepository = require('../data/locationRepository');

var ProductService = function () {
};

ProductService.prototype.getAll = function (params, next) {
    mongoose.connect('mongodb://localhost:27017/node-prac');

    async.waterfall([
        function (callback) {
            ProductRepository.getAll(params, callback);
        },
        function (firstResWaterFall, callback) {
            console.log('waterfall 2');
            console.log(firstResWaterFall);
            //return next(null, [3,4,5]);
            callback(null, firstResWaterFall);
        }
    ], function (err, secondResWaterFall) {

        return next(null, secondResWaterFall);
    });
};

ProductService.prototype.getAllProductsUsersLocations = function (params, next) {
    mongoose.connect('mongodb://localhost:27017/node-prac');

    async.parallel({
            products: function (callback) {
                ProductRepository.getAll(params, callback);
            },
            locations: function (callback) {
                LocationRepository.getAll(params, callback);
            },
            users: function (callback) {
                UserRepository.getAll(params, callback);
            }
        }, function (err, results) {
            return next(null, results)
        }
    );
};

//// an example using an object instead of an array
//async.parallel({
//        one: function (callback) {
//            setTimeout(function () {
//                callback(null, 1);
//            }, 200);
//        },
//        two: function (callback) {
//            setTimeout(function () {
//                callback(null, 2);
//            }, 100);
//        }
//    },
//    function (err, results) {
//        // results is now equals to: {one: 1, two: 2}
//    });

module.exports = new ProductService();