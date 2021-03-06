'use strict';
var superCategoryMgr = require('./superCategory/superCategoryMgr');
var mainCategoryMgr = require('./mainCategory/mainCategoryMgr');
var subCategoryMgr = require('./subCategory/subCategoryMgr')

module.exports = function (app) {

    app.route('/addCategory')
        .post(superCategoryMgr.superCategoryInsert);

    app.route('/categoryDetails')
        .get(superCategoryMgr.superCategoryShow);

    app.route('/superCategory')
        .get(mainCategoryMgr.showSuperCategory);

    app.route('/category/:id')
        .put(superCategoryMgr.superCategoryEdit);

    app.route('/categoryDelete/:categoryId')
        .delete(superCategoryMgr.superCategoryDelete);

    app.route('/mainCategoryDetails')
        .get(mainCategoryMgr.mainCategoryShow);

    app.route('/mainCategory')
        .post(mainCategoryMgr.mainCategoryInsert);

    app.route('/category/:categoryId/mainCategory/:mainCategoryId')
        .delete(mainCategoryMgr.mainCategoryDelete);

    app.route('/category/:categoryId/mainCategory/:mainCategoryId')
        .put(mainCategoryMgr.mainCategoryUpdate);



    app.route('/superCategorydetail/:id')
        .get(mainCategoryMgr.getMainCategory);

    app.route('/categoryData/:id')
        .get(mainCategoryMgr.getCategory);

    app.route('/subCategory')
        .post(subCategoryMgr.subCategoryInsert);

    app.route('/mainCategoryData')
        .get(subCategoryMgr.mainCategoryData);

    app.route('/category/:categoryId/mainCategory/:mainCategoryId/subCategory/:subCategoryId')
        .delete(subCategoryMgr.subCategoryDelete);

    app.route('/category/:categoryId/mainCategory/:mainCategoryId/subCategory/:subCategoryId')
        .put(subCategoryMgr.subCategoryUpdate);

    app.route('/mainCategoryOnSub/:id')
        .get(subCategoryMgr.mainCategoryOnSub);

    app.route('/category/:categoryId/mainCategory/:mainCategoryId')
        .get(subCategoryMgr.findSubCategory);
}
