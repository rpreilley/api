var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User.js');
var authWall = require('../lib/auth_wall');

/* GET ALL USERS */
router.get('/', authWall, function(req, res, next) {
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
  console.log(req.body)
  User.create(req.body, function (err, user) {
    if (err) return next(err);
    res.json(user);
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
