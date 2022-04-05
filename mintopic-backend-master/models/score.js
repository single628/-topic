var mongoose = require('mongoose');
const Schema = mongoose.Schema;
var scoreSchema = new Schema({
  name:String,//用户的名称
  time:String,//完成时间
  topicTitle:String,//完成任务的题目
  useTime:{
    type:Number,
    default:0
  },//答题所花费的时间
  avarageTime:{
    type:Number,
    default:0
  },//做一题所花费的时间
  correctNum:{
    type:Number,
    default:0
  },//正确题目的数量
  errorNum:{
    type:Number,
    default:0
  },//错误题目的数量
  topicNum:{
    type:Number,
    default:0
  },//每次答题的数目
  answer:String,//用户所答题的答案
  finishedsingleTaskDate:String,//完成任务所对应的日期
  score:Number,//分数
})
//定义model
const scoreModel = mongoose.model('score',scoreSchema);
module.exports = scoreModel;