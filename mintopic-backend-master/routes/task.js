var mongoose =require('mongoose');
var express = require('express');
var router = express.Router();
var db = require('../mongodb/db')
var task = require('../models/task.js')
router.get('/getAllTask',(req,res,next)=>{
    // 接受前端传来的参数
    // let page = parseInt(req.param('page'))
    // let pageSize = parseInt(req.param('pageSize'))
    // let sort = req.param("sort")
    // let skip = (page-1)*pageSize
    let params = {};
    let goodsModel = task.find(params)
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