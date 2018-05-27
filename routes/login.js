var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('HITTIN THIS SHIT RIGHT HERE')
  res.json({msg: 'This is CORS-enabled for all origins!'})
});

module.exports = router;
