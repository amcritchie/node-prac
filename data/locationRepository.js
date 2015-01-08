var mongoose = require('mongoose');

var LocationRepository = function () {
    return {
        getAll: function(params, next) {
            console.log('do we even get here');

            //mongoose.connect('mongodb://localhost:27017/node-prac');
            mongoose.model('locations', {title: String, des: String});

            console.log('about to query locations');
            mongoose.model('locations').find(function (err, locations) {
                console.log('these are the locations found');
                console.log(locations);
                return next(null, locations);
            });
        }
    }
};

module.exports = LocationRepository();