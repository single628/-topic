var mongoose =require('mongoose');
var express = require('express');
var router = express.Router();
var scoreModel = require('../models/score.js');
var db = require('../mongodb/db')

router.post('/updateScore',(req,res,next)=>{
  if(req.body.name){
        // 接受前端传来的参数
    let _name = req.body.name;
    let _time = req.body.time;
    let _topicTitle = req.body.topicTitle;
    let _useTime = req.body.useTime;
    let _avarageTime=req.body.avarageTime;
    let _correctNum = req.body.correctNum;
    let _errorNum = req.body.errorNum;
    let _topicNum=req.body.topicNum;
    let _answer = req.body.answer;
    let _finishedsingleTaskDate = req.body.finishedsingleTaskDate;
    let _score = req.body.score;
    let ss = scoreModel.updateOne({'finishedsingleTaskDate':_finishedsingleTaskDate},{$set:{
      'name':_name,
      'time':_time,
      'topicTitle':_topicTitle,
      'useTime':_useTime,
      'avarageTime':_avarageTime,
      'correctNum':_correctNum,
      'errorNum':_errorNum,
      'topicNum':_topicNum,
      'answer':_answer,
      'finishedsingleTaskDate':_finishedsingleTaskDate,
      'score':_score
    }},{upsert:true},function(err,doc){
      if(!err){
        console.log('插入成功');
      }
    })
    ss.exec((err, doc) => {
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
// 指定用户某个日期的题目结果数据
router.get('/SingleTaskScore',(req,res,next)=>{
    let _name = req.query.name;
    let _finishedsingleTaskDate = req.query.finishedsingleTaskDate;
    let goodsModel = scoreModel.findOne({$and:[{name:_name},{finishedsingleTaskDate:_finishedsingleTaskDate}]})
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
            list: doc
          }
        })
      }
    })
  }) 
// 指定用户的分数列表
router.get('/getUserScore',(req,res,next)=>{
    let _name = req.query.name;
    let goodsModel = scoreModel.find({name:_name})
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
            list: doc
          }
        })
      }
    })
  }) 
  module.exports = router;