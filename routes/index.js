var express = require('express');
var router = express.Router();
var session = require('express-session');
var register = require('../controller/register');
var login = require('../controller/login');
var userModel = require('../models/user');

/* GET home page. */
router.get('/', function(req, res) {
  if(req.session.user)
  {
    res.redirect('/userprofile');
  }
  else {
    res.render('index');
  }
});

router.get('/signin', function(req, res) {
  if (req.session.user) {
        res.redirect('/userprofile');

    } else {
        res.render('login', {
            "msg": ""
        });
    }

});
router.get('/userprofile', function(req, res) {
  if (req.session.user) {
        res.render('profile', {
            'user': req.session.user
        });
    }
    else {
        res.redirect('/')
    }

});

router.get('/loginhere',function(req,res){
  res.redirect('/signin');
})




router.post('/signup', register.register);
router.post('/profile', login.login);

router.post('/logout',function(req,res){
  req.session.user=null;
  res.render('login',{
    "msg":"Logged out successfully..!"
  });
})
module.exports = router;
