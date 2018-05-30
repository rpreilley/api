var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user.js');

/* GET ALL USERS */
router.get('/', function(req, res, next) {
  User.find(function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

/* GET SINGLE USER BY ID */
router.get('/:id', function(req, res, next) {
  User.findById(req.params.id, function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

/* SAVE USER */
router.post('/signup', function(req, res, next) {
  console.log(req.body)
  User.create(req.body, function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

/* LOGIN USER */
router.post('/login', function(req, res, next) {
  User.findOne({ email: req.body.email }).exec(function(err, user) {
    user.comparePassword(req.body.password, function(err, isMatch) {
      if (isMatch) {
        req.session.currentUserID = user.id;
        console.log(req.session);
        console.log('is match', isMatch);
        res.json(user);
      }
      if (err) {
        res.send("There was an issue logging in. Please try again.")
      }
    });
  });
});

/* UPDATE USER */
router.put('/:id', function(req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

/* DELETE USER */
router.delete('/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

module.exports = router;
