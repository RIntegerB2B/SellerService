var accountRoutes = require('./account/accountRoute');
var categoryRoutes = require('./category/categoryRoute');
var productRoutes = require('./product/productRoute');
var notificationRoutes = require('./notification/notificationRoute');

exports.loadRoutes = function (app) {
    accountRoutes(app);
    categoryRoutes(app);
    productRoutes(app);
    notificationRoutes(app);
};

