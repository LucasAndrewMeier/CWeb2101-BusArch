var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/home', function(req, res, next) {
  res.sendFile('./views/Home.html');
});

module.exports = router;
