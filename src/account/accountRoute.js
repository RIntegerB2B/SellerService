'use strict';
var signInMgr = require('./signIn/signInMgr');
var pwdChangeMgr = require('./pwdChange/pwdChangeMgr');
module.exports = function (app) {
    app.route('/admin')
        .post(signInMgr.create);

    app.route('/admin/validate')
        .post(signInMgr.signInToSite);

    app.route('/pwdChange/:emailId')
        .post(pwdChangeMgr.pwdChangeRequest);

    app.route('/pwdChange/reset/:key')
        .post(pwdChangeMgr.pwdChangeReset); 
}