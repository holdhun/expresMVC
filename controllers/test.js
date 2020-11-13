var express = require('express');
var router = express.Router();

// router.use('/users', require('./users'));

router.get('/', function(req, res){
	res.send({"data":"test"});
});

module.exports = router;