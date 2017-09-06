// var express = require('express');
// var router = express.Router();
// var conn = require('../conn');
// var find = conn.find;
// // var sqlFun = conn.sqlFun;

// /* GET login page. */
// router.get('/', function(req, res, next) {
//   res.render('article', {});
// });

// router.post('/',function(req,res){
//   // var data = req.body;
//   // res.send(data);
// })

// module.exports = router;


var express = require('express');
var router = express.Router();
var conn = require('../conn');
var findArt = conn.findArt;

/* GET login page. */
router.get('/', function(req, res, next) {
  var val = req.query.search.toString();
  findArt('ulist',function(data){
    res.render('article', {'list':data[0]});
    console.log(data)
  },val)
});

// router.post('/',function(req,res,next){
  
// })


module.exports = router;