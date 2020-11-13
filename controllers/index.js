var express = require('express');
var router = express.Router();
var query = require("../models/query");

router.use('/test', require('./test'));

router.get('/', function(req, res){
	let sql = "select * from user";
	let param={};
	query(sql,param,function(err, results) { 
        if (err) { 
          throw err; 
        } 
        if(results){
            res.status(200);
            res.json(results);
        }          
      }) 
	// res.render("index",{title:213});
});

module.exports = router;