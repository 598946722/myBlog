


var express = require('express');
var router = express.Router();
var conn = require('../conn');
var findArt = conn.findArt;

router.get('/', function(req, res, next) {
  var val = req.query.search;
  findArt('ulist',function(data){
    res.render('article', {'list':data[0]});
    // console.log(data)
  },val)
});


module.exports = router;