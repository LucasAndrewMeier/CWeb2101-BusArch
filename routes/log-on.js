var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/log-on', function(req, res, next) {
  res.sendFile('./views/Log-On.html');
});

module.exports = router;
