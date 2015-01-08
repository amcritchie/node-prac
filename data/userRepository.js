
var mongoose = require('mongoose');

var UserRepository = function () {
    return {
        getAll: function(params, next) {
            mongoose.model('users', {title: String, des: String});

            mongoose.model('users').find(function (err, users) {
               return next(null, users)
            });
        }
    }

};

module.exports = UserRepository();