var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});


router.get('/failed', function(req, res) {
  req.flash("age",data)
});

module.exports = router;
