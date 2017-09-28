var express = require('express');
var router = express.Router();
var conn = require('../conn');


var find2 = conn.find2;
/* GET home page. */
router.get('/', function(req, res, next) {
    // query
    // body
    // params  传递的参数组

    // console.log(req.params.id);
    // console.log(req.query);
   var getPage = 0 || req.query.page;
   

    find2('ulist', function(datas, len){
        var num = Math.ceil(len/10);
        var nums = [];
        for(var i = 0; i < num; i++){
			nums.push(i + 1);
			
		}
		nums.splice(3, (num - 6));
		nums.splice(3, 0, '···');
        res.render('index', {pages: nums, list: datas});
    }, (req.query.page - 1)*10);        
});

router.post('/', function(req, res){
    console.log(req.body);
})


module.exports = router;


