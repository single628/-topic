var mongoose = require('mongoose');
const Schema = mongoose.Schema;
//定义model
var rankSchema = new Schema({
  name:String,
  total_topic_num:Number,
  speed:Number,
  correct_rat:Number
})
// const rankModel = mongoose.model('rank',mySchema,'rank');
const rankModel = mongoose.model('rank',rankSchema);
module.exports = rankModel;