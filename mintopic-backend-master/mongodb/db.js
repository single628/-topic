var mongoose =require('mongoose');
var express = require('express');
var url = 'mongodb://127.0.0.1:27017/task';
mongoose.connect(url); //连接task数据库

const db = mongoose.connection;

db.once('open', () => {
    console.log('Connecting to the database Successfully')
})

db.on('error', function (error) {
    console.error('Error in MongoDb connection: ' + error);
    mongoose.disconnect();
});

db.on('close', function () {
    console.log('The database is disconnected and try to reconnect the database');
    mongoose.connect(url);
});
module.exports = db;