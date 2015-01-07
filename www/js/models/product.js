define('product', [], function () {

    var product = function (title,des) {
        this.title = title || '';
        this.des = des || '';
    };

    return product;
});