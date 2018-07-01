var express = require('express');
var router = express.Router();
var details = require('./db')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*
GET called as: /10/mm, will return
[{"unit":"mm","conversion":14000},
{"unit":"cm","conversion":1400},
{"unit":"m","conversion":14},
{"unit":"in","conversion":551.181102362198},
{"unit":"ft","conversion":45.9317585301834}]
*/

router.get('/conversion/:value/:measure', (req, res, next)=>{
  details.measurement(req.params.value, req.params.measure, (callback)=>{
    res.setHeader('Content-Type', 'application/json');
    //console.log(callback);
    res.send(JSON.stringify(callback))
  })
})

router.get('/getunits',(req, res, next)=>{
  details.units((callback)=>{
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(callback))
  })
})


module.exports = router;
