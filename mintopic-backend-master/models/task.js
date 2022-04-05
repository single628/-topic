var mongoose = require('mongoose');
const mySchema = mongoose.Schema();
//定义model
const task = mongoose.model('modelName',mySchema,'task');
//打印上面拿到的集合数据
// task.find({},(err,res)=>{
//   if(err)return console.log(err);
//   console.log('集合task的数据为:',res)
// })
module.exports = task;