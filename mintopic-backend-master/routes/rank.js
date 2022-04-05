var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var rankModel = require('../models/rank.js');
var db = require('../mongodb/db')

router.post('/updateRank', (req, res, next) => {
  // 接受前端传来的参数
  if (req.body.name) {
    let _name = req.body.name;
    let _totalTopicNum = req.body.totalTopicNum;
    let _speed = req.body.speed;
    let _correctRat = req.body.correctRat;
    let rr = rankModel.updateOne(
      {"name":_name},
      {$set:{ 
        'name': _name, 
        'total_topic_num': _totalTopicNum,
         'speed': _speed, 
         'correct_rat': _correctRat 
        }},{upsert:true},function(err,res){
          if(!err){
            console.log('rank','插入成功');
            
    }});
  rr.exec((err, doc) => {
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      })
    } else {
      res.json({
        status: '0',
        msg: '',
        result: {
          list: doc
        }
      })
    }
  })
}
})

router.get('/getAllRankList',(req,res,next)=>{
  let goodsModel = rankModel.find({})
  goodsModel.exec((err, doc) => {
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      })
    } else {
      res.json({
        status: '0',
        msg: '',
        result: {
          count: doc.length,
          list: doc
        }
      })
    }
  })
})
router.get('/getCurrentUserRank',(req,res,next)=>{
  let _name = req.query.name;
  let goodsModel = rankModel.findOne({name:_name})
  // goodsModel.sort({'salePrice': sort})
  goodsModel.exec((err, doc) => {
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      })
    } else {
      res.json({
        status: '0',
        msg: '',
        result: {
          count: doc.length,
          list: doc
        }
      })
    }
  })
})

module.exports = router;