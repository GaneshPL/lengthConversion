var db = require('diskdb');
var path = require('path');

db.connect(path.join(__dirname,'../db'), ['length'])


var measurement = (value, measure, callback)=>{
  var details=[];
  db.length.find({unit:measure}).forEach((e)=>{
    e.conversion.forEach((v)=>{
      details.push({unit: v.unit, conversion: (v.value * value)})
    })
  })
  callback(details);
}

var units = (callback) =>{
  var list = [];
  db.length.find().forEach((d)=>{
    list.push({length: d.measurement, unit: d.unit})
  })
  callback(list)
}

module.exports ={
  measurement,
  units
}
