var express = require('express');
var router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const authenticate = require('../authenticate');


/* GET users listing. */
router.get('/', function(req, res, next) {
  if (req.user.admin) {
    User.find()
    .then(users => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'applicaiton/json');
      res.json(users);
    })
  } else {
    const err = new Error('You are nto authorized to perform this operation!');
    err.status = 403;
    return next(err);
  }
});

router.post('/signup', (req, res) => {
  User.register(
    new User({username: req.body.username}),
    req.body.password,
    err => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.json({err: err});
      } else {
        passport.authenticate('local')(req, res, () => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({success: true, status: 'Registration successful!'});
        });
      }
    }
  );
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  const token = authenticate.getToken({_id: req.user._id});
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({success: true, token: token, status: 'You have successfully logged in!'});
});

module.exports = router;
