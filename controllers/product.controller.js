const Product = require('../models/product.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};
exports.get_products = function (req, res) {
    
    Product.find(function (err, product) {
        if (err) return next(err);
        res.send(product);
    });
};