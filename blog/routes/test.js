var express = require('express');
var router = express.Router();
// var conn = require('../conn');


router.get('/', function(req, res, next) {
    // query
    // body
    // params  传递的参数组

    // console.log(req.params.id);
    console.log(req.query);
    
    res.render('test', {});
});

router.post('/', function(req, res){
    console.log(req.body);
})

module.exports = router;