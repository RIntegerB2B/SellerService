'use strict';
var AdminForgotPwd = require('../../model/adminReqPwd.model');
var AdminAccount = require('../../model/adminAccount.model');

exports.pwdChangeRequest = function (req, res, someFormattedDate) {
    var adminForgotPwdData = new AdminForgotPwd(req.body);
    adminForgotPwdData.Key = req.params.emailId;
    adminForgotPwdData.ExpiryDate = someFormattedDate; // In Progress
    adminForgotPwdData.save(
        function (err) {
            if (err) { // if it contains error return 0
                res.status(500).send({
                    message: "Some error occurred "
                });
            } else {
                res.json(1); // The update is success , return 1
            }
        });
};

exports.pwdChangeResetPwd = function (req, res) {
    // Here pls update the admin collection's two fields - pwd and isActive
    // U should take the value from req.body.password 
    AdminAccount.update({}, {
        password: req.body.password
    }, opts, function (err) {
        if (err) { // if it contains error return 0
            res.status(500).send({
                message: "Some error occurred "
            });
        } else {
            res.json(1); // The update is success , return 1
        }
    });
};

/*exports.pwdChangeReset = function (req, res) {
    // Update Pwd and isActive in adminaccount collection
    router.put('/savepassword', function(req, res) {
		AdminAccount.findOne({ username: req.body.username }).select('username password key').exec(function(err, adminaccount) {
			if (err) throw err; // Throw error if cannot connect
			if (req.body.password == null || req.body.password == '') {
				res.json({ success: false, message: 'Password not provided' });
			} else {
				adminaccount.password = req.body.password; // Save user's new password to the user object
				adminaccount.Key = false; // Clear user's resettoken 
				// Save user's new data
				adminaccount.save(function(err) {
					if (err) {
						res.json({ success: false, message: err });
					} else {
						res.json({ success: true, message: 'Password has been reset!' }); // Return success message
					}
				});
			}
		});
	});
}; */

exports.pwdChangeReset = function (req, res) {
    // Check whether the given Key is valid or not
    AdminForgotPwd.findOne({
        'Key': req.body.key
    }, function (err, adminForgotPwdData) {
        if (err) res.status(500).json(0); // Some Error has happened so return 0
        else {
            //So the Key exist , now lets update the pwd
            var opts;
            AdminAccount.update({}, {
                password: req.body.newPassword
            }, opts, function (err) {
                if (err) { // if it contains error return 0
                    res.status(500).send({
                        message: "Some error occurred "
                    });
                } else {
                    res.status(200).json(1); // The update is success , return 1
                }
            });
        }
    });
}