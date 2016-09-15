var express = require('express');
var path = require('path');

var router = express.Router();


/* GET home page. */
router.get('/data', function(req, res, next) {
  res.charset = 'UTF-8';
  res.setHeader('Content-Type', 'application/json');
  res.sendFile(path.resolve('public/data.json'));
});
router.get('/question', function(req, res, next) {
  res.charset = 'UTF-8';
  res.setHeader('Content-Type', 'application/json');
  res.sendFile(path.resolve('public/question.json'));
});

module.exports = router;
