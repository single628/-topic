import {getAllRankList} from '../../../api/index'
var app = getApp();
Component({
    properties: {

    },
    data: {
        rankList: [],
        sortFlag1: true,//默认降序排序
        sortFlag2: false,//默认降序排序
        sortFlag3: false,//默认降序排序
        myRank: 0,
        myTotalTopic: 0,
        mySpeed: 0,
        myCorrectRat: 0,
    },
    methods: {
        totalTopicNumSort(e) {
            let arr = [];
            let flag;
            if (!e.currentTarget.dataset.bol) {
                arr = this.data.rankList.sort((a, b) => b.total_topic_num - a.total_topic_num);// 降序排序
                flag = true;
            } else {
                arr = this.data.rankList.sort((a, b) => a.total_topic_num - b.total_topic_num);
                flag = false;
            }
            this.setData({
                rankList: arr,
                sortFlag1: flag,
                sortFlag3: false,
                sortFlag2: false,
            })
        },
        speedSort(e) {
            let flag;
            let arr = [];
            if (!e.currentTarget.dataset.bol) {
                arr = this.data.rankList.sort((a, b) => b.speed - a.speed);// 降序排序
                flag = true;
            } else {
                arr = this.data.rankList.sort((a, b) => a.speed - b.speed);
                flag = false;
            }
            this.setData({
                rankList: arr,
                sortFlag2: flag,
                sortFlag1: false,
                sortFlag3: false,
            })
        },
        correctRatSort(e) {
            let flag;
            let arr = [];
            if (!e.currentTarget.dataset.bol) {
                arr = this.data.rankList.sort((a, b) => b.correct_rat - a.correct_rat);// 降序排序
                flag = true;
            } else {
                arr = this.data.rankList.sort((a, b) => a.correct_rat - b.correct_rat);
                flag = false;
            }
            this.setData({
                rankList: arr,
                sortFlag3: flag,
                sortFlag1: false,
                sortFlag2: false,
            })
        },
    },
    lifetimes: {
        attached() {
            let _this = this;
            // 请求排名数据
            getAllRankList().then(res=>{
                _this.setData({
                    rankList: res.result.list.sort((a, b) => b.total_topic_num - a.total_topic_num)
                })
                let rankAesc = [];
                let rankAesc1 = [];
                for (let i = 0; i < _this.data.rankList.length; i++) {
                    if (_this.data.rankList[i].name) {
                        rankAesc.push(i);
                        rankAesc1.push(i);
                        if (_this.data.rankList[i].name == app.globalData.username) {
                            _this.setData({
                                myRank: i+1,
                                myTotalTopic: _this.data.rankList[i].total_topic_num,
                                mySpeed: _this.data.rankList[i].speed,
                                myCorrectRat: _this.data.rankList[i].correct_rat,
                            })
                        }
                    }

                }
                _this.setData({
                    rankAesc: rankAesc1,
                    rankDesc: rankAesc.sort((a, b) => b - a),
                })
            },error=>{
                console.log('rank接口',error);
            })
        }
    }
})