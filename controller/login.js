var mongoose = require('mongoose');
var userModel = require('../models/user');

var login = function(req, res) {
    userModel.findOne({
        email: req.body.email
    }, function(err, user) {
        if (err) throw err;
        if (user) {

            if (err) throw err;
            if (user.password == req.body.password) {
                var details = {
                    "name": user.name,
                    "email": user.email,
                    "phone":user.phone,
                    "username":user.username,
                    "gender":user.gender,

                };
                req.session.user = details;
                return res.redirect('/userprofile');
            } else
                return res.render('login',{msg:"Wrong email or password, Please try again..!!"});
        }
    });
};


module.exports = {
    "login": login,
};
