import { createStoreBindings} from 'mobx-miniprogram-bindings'
import { store } from '../../store/store'
import {getAllTopicList} from '../../api/index'
var util = require('../../utils/util.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        currentTopicNum: 1,//当前题目
        counter: 0,//计数
        topicList: [],//所有题目
        singleTopic: {}, //单个题目,
        backshow: "none",
        emitshow: "none",
        nextshow: "block",
        currentId: "",//记录具体题目的答案ID
        backCurrentId: "",
        answer: [],//记录所做答案
        solution: { "A": 0, "B": 1, "C": 2, "D": 3 },
        jumpId: undefined,//记录从答题卡页面跳转的题目ID
        jumpAnswer: [],//记录从答题卡页面跳转的题目答案
        num: 1,
        h: '00',
        m: '00',
        s: '00',
        setInter: '',
        finishTime: 0,
        finishedTopicList: [],//用户所答完题的题目
        finishedAnswer: [],//用户所答完题的答案
        flag:'',
    },
    nextTopic() {
        if (this.data.counter >= 0 && this.data.counter < 18) {
            this.setData({
                counter: ++this.data.counter,
                currentTopicNum: this.data.counter + 1,
                singleTopic: this.data.topicList[this.data.counter],
                backshow: "block",
                nextshow: "block",
                emitshow: "none",
            })

            let solu = this.data.answer[this.data.counter];//从answer中选取对应题目的答案，并保留，有的话不会是空，没做答案的话就是空。
            if (solu) {
                this.setData({
                    currentId: this.data.solution[solu[this.data.counter]]
                })
            } else {
                this.setData({
                    currentId: ""
                })
            }
        } else if (this.data.counter = 18) {
            this.setData({
                counter: ++this.data.counter,
                currentTopicNum: this.data.counter + 1,
                singleTopic: this.data.topicList[this.data.counter],
                backshow: "block",
                emitshow: "block",
                nextshow: "none",
            })
            let solu = this.data.answer[this.data.counter];
            if (solu) {
                this.setData({
                    currentId: this.data.solution[solu[this.data.counter]]
                })
            } else {
                this.setData({
                    currentId: ""
                })
            }
        }

    },
    backTopic() {
        if (this.data.counter > 1) {
            this.setData({
                counter: --this.data.counter,
                currentTopicNum: this.data.counter + 1,
                singleTopic: this.data.topicList[this.data.counter],
                backshow: "block",
                nextshow: "block",
                emitshow: "none",
            })
            let solu = this.data.answer[this.data.counter];
            if (solu) {
                this.setData({
                    currentId: this.data.solution[solu[this.data.counter]]
                })
            } else {
                this.setData({
                    currentId: ""
                })
            }
        } else if (this.data.counter == 1) {
            this.setData({
                counter: --this.data.counter,
                currentTopicNum: this.data.counter + 1,
                singleTopic: this.data.topicList[this.data.counter],
                backshow: "none",
                nextshow: "block",
                emitshow: "none",
            })
            let solu = this.data.answer[this.data.counter];
            if (solu) {
                this.setData({
                    currentId: this.data.solution[solu[this.data.counter]]
                })
            } else {
                this.setData({
                    currentId: ""
                })
            }
        }
    },
    getCurrentId(paramData) {
        let answerPro = this.data.answer;
        let num = Object.keys(paramData.detail)[0];
        answerPro[num] = paramData.detail;
        this.setData({
            answer: answerPro
        })
    },
    //全部完成后提交到答题卡页面
    emitFunc() {
        // 将用户所做的答案、使用的时间、做题时间保存到全局变量中去
        this.updateTopicAnswer({'answer':this.data.answer,'useTime':this.data.num,'finishTime':this.data.finishTime});
        wx.redirectTo({
            // 在数据传输流程中，JSON是以字符串的形式传递的，而JS操作的是JSON对象，所以需要将JSON对象用stringify转为JSON字符串
            url: '../answerCard/answerCard',
        })
    },
    // 用户在答题环节点击了答题卡
    jumpToCard() {
        let ans = [];
        for (let i = 0; i <= this.data.counter; i++) {
            ans.push(this.data.answer[i]);
        }
        this.setData({
            finishedAnswer: ans,
        },()=>{
             this.updateTopicAnswer({'answer':this.data.finishedAnswer,'useTime':this.data.num,'finishTime':this.data.finishTime});
        })
        wx.redirectTo({
            // 在数据传输流程中，JSON是以字符串的形式传递的，而JS操作的是JSON对象，所以需要将JSON对象用stringify转为JSON字符串
            url: '../answerCard/answerCard',
        })
    },
    queryTime() {
        const that = this;
        var hou = parseInt(this.data.num/3600)
        var min = parseInt(this.data.num%3600/60)
        var sec = this.data.num%3600%60
        this.setData({
            h:hou,
            m:min,
            s:sec
        })
        that.data.setInter = setInterval(function () {
            sec++;
            if (sec >= 60) {
                sec = 0
                min++
                if (min >= 60) {
                    min = 0
                    hou++
                    that.setData({
                        h: (hou < 10 ? '0' + min : min)
                    })
                } else {
                    that.setData({
                        m: (min < 10 ? '0' + min : min)
                    })
                }
            } else {
                that.setData({
                    s: (sec < 10 ? '0' + sec : sec)
                })
            }

            var numVal = that.data.num + 1;
            that.setData({ num: numVal });
            //   console.log('setInterval==' + that.data.num);

        }, 1000)
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.storeBindings = createStoreBindings(this,{
            store,                          // 传入store
            fields: ['AllTopicList','topicAnswer'],  // 需要什么数据都在此处声明
            actions: ['updateAllTopicList','updateTopicAnswer']          // action在此声明，使用actions时 this.updateNum1即可触发action
          })
        var myDate = util.formatTime(new Date());
        let _this = this;

        // 请求题目列表数据
        getAllTopicList().then((res)=>{
            _this.setData({
                topicList: res.result.list,
                singleTopic: res.result.list[0],
                finishTime: myDate,
            });
            // 将请求回来的数据保存至状态管理器中
            this.updateAllTopicList(this.data.topicList);
        },(error)=>{
            console.log('topic:',error)
        });
        if (options.jumpId) {//只有当options中有这个值，即代表是跳转过来了
            this.setData({
                jumpId: options.jumpId - "0",
                flag:options.flag,
            })
            if(this.data.flag=='emit'){
                this.setData({
                    num:options.useTime-'0'
                },()=>{
                })
                
            }
        }
        
    },
    onReady: function () {
        console.log(this.data.topicAnswer);
        let answer = this.data.topicAnswer.answer;
        let useTime = this.data.topicAnswer.useTime;
        if (this.data.jumpId >= 0) {
            this.setData({
                currentTopicNum: this.data.jumpId + 1,
                singleTopic: this.data.topicList[this.data.jumpId],
                num:useTime,
                answer:answer,
                // })
            }, () => {
                // console.log(this.data.topicList[this.data.jumpId]);
                // console.log(this.data.singleTopic);
                // console.log('topic:' + this.data.jumpAnswer);
                let solu = this.data.answer[this.data.jumpId];
                // console.log(solu);
                // console.log(this.data.jumpAnswer);
                // this.getCurrentId(paramData);
                if (solu) {
                    this.setData({
                        currentId: this.data.solution[solu[this.data.jumpId]],
                        // answer: this.data.jumpAnswer//再次将跳转过来重新选择的答案赋值给answer
                    })
                } else {
                    this.setData({
                        currentId: "",
                        // answer: this.data.jumpAnswer
                    })
                }
            })
            if (this.data.flag=='emit') {
                this.setData({
                    emitshow: "block",
                    backshow: "none",
                    nextshow: "none",
                })
            }
            if(this.data.flag=='topicCard'){
                this.setData({
                    emitshow: "none",
                    nextshow: "block",
                })

                if(this.data.jumpId===0){
                    this.setData({
                        backshow: "none",
                    })
                }else{
                    this.setData({
                        backshow: "block",
                    })
                }

            }

        }
        //计时器
        this.queryTime()
    },
    onUnload: function () {
        var that = this;
        //清除计时器  即清除setInter
        clearInterval(that.data.setInter)
          // 一定要调用清理函数，否则将导致内存泄漏！
        this.storeBindings.destroyStoreBindings()
    },
})