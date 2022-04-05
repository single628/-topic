// home.js
import {getSingleTaskScore} from '../../api/index';
import { createStoreBindings } from "mobx-miniprogram-bindings";
import { store } from "../../store/store";
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        username: '',
        duigou: [],
        userscore: [],
        titleshow: [],
        showflag1: true,
        showflag2: false,
    },
    back() {
        wx.navigateBack({
            delta: 0,
        })
    },
    click1() {
        this.setData({
            showflag1: true,
            showflag2: false
        })
    },
    click2() {
        this.setData({
            showflag1: false,
            showflag2: true
        })
    },
    change(paramData) {
        // console.log(paramData);
        let selectedsingleTaskScore = app.globalData.selectedsingleTaskScore;
        let obj = {
            'date': paramData.detail.dateString,
            'taskTitle': paramData.detail.taskTitle
        }
        selectedsingleTaskScore.push(obj);
        app.globalData.selectedsingleTaskScore = selectedsingleTaskScore;
        app.globalData.selectCurrentDate = obj.date;
        // console.log(app.globalData.selectedsingleTaskScore);
        // console.log(app.globalData.selectCurrentDate);
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            username:app.globalData.username
        })
        if (options.finishedsingleTaskScore) {
            app.globalData.finishedsingleTaskScore = JSON.parse(options.finishedsingleTaskScore);
            // console.log('6:' + options.finishedsingleTaskScore);
        }
        let _this = this;
        this.setData({
            duigou: app.globalData.finishedsingleTaskScore
        })
        this.storeBingings = createStoreBindings(this,{
            store,
            fields:["FinishedTaskScore"],
            actions:["updateFinishedTaskScore"],
        })
        // console.log(this.data.duigou)
        // 此接口是通的
        // 测试数据
        let finishedsingleTaskDate="2022-03-17"
        getSingleTaskScore({name:app.globalData.username,finishedsingleTaskDate:finishedsingleTaskDate}).then(res=>{
            console.log('list:',res.result.list);
            // 如果返回值是空就跳转到答题页

            // 如果返回值不是空则跳转到分数页面
            if(res.result.list){
                this.updateFinishedTaskScore(res.result.list);
            }
        },error=>{
            console.log('home',error);
        })
        // 还要访问一个接口，返回用户所有已经完成了的任务对应的时间
        // wx.request({
        //     // 这里遇到一个问题就是，request不允许访问本地服务器
        //     url: 'http://localhost:3038/score',
        //     method: 'GET',
        //     success(res) {
        //         _this.setData({
        //             userscore: res.data.result.list,
        //         }, () => {
        //             let finishedsingleTaskDate = [];
        //             for (let i = 0; i < _this.data.userscore.length; i++) {
        //                 if (_this.data.userscore[i].name=== app.globalData.username) {
        //                     finishedsingleTaskDate.push(_this.data.userscore[i]);
        //                     _this.setData({
        //                         duigou: finishedsingleTaskDate,//完成任务所对应的日期
        //                     })
        //                 }

        //             }
        //         })
        //     },
        //     fail() {
        //         console.log('请求失败');
        //     }
        // });
        // console.log(this.data.duigou)
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        this.storeBingings.destroyStoreBindings()
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})