var mongoose = require('mongoose');
var userModel = require('../models/user');
var bodyParser = require('body-parser');

var register = function(req, res) {
    var usermodel = new userModel({
        name: req.body.name,
        email: req.body.email,
        phone:req.body.phone,
        username:req.body.username,
        gender:req.body.gender,
        password: req.body.password,


    });

    usermodel.save(function(err, doc) {
        if (err) res.render('login', {
            msg: "Credentials already exists..!!"
        })
        console.log(usermodel);
        res.render('login', {
            msg: "Registered Successfully..!!"
        })
    });
};

module.exports = {
    "register": register
};
