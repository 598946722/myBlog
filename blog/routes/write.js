var express = require('express');
var router = express.Router();
var conn = require('../conn');
var insert = conn.insert;

router.get('/', function(req, res, next) {
  res.render('write', {});
});

router.post('/',function(req,res){
  insert('ulist',function(data){
    res.send(data);
  },{'artTit':req.body.artTit,'artDes':req.body.artDes,'artAuthor':req.body.artAuthor,'artDate':req.body.artDate,'artCount':req.body.artCount,'artCon':req.body.artCon})})


module.exports = router;