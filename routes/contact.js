var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/contact', function(req, res, next) {
  res.sendFile('./views/Contact.html');
});

module.exports = router;
