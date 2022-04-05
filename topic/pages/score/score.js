import {updateRank,updateScore,getUserScore} from '../../api/index'
import { createStoreBindings} from 'mobx-miniprogram-bindings'
import { store } from '../../store/store'
const app = getApp();
Page({
    data: {
        finishTime: "",//获取当前时间
        topicLen: 0,//题目数量
        correctNum: 0,//正确题目数量
        errorNum: 0,//错误题目数量
        useTime: 0,//使用时间
        averageTime: 0,//题均
        correctAnswer: [],//正确答案
        analysis: [],//题目解析
        correctAnswerIndex: [],
        rat: 0,
        answer: [],
        topicList: [],
        scoreflag: true,
        rankflag: true,
        scoreList: [],
        selectCurrentDate: '',
    },
    viewParse() {
        wx.navigateTo({
            url: '../parse/parse',
        });
    },
    redoing() {
        wx.navigateTo({
            url: '../topic/topic',
        })
    },
    backTaskList() {
        wx.redirectTo({
            url: '../home/home?finishedsingleTaskScore=' + JSON.stringify(app.globalData.finishedsingleTaskScore)
        })
    },
    run(c, w, h) {  //c是圆环进度百分比   w，h是圆心的坐标
        var ctx2 = wx.createContext()
        // 2 * Math.PI 将2PI分为100份，然后再乘以进度，就是占比
        var num = (2 * Math.PI / 100 * c) + 0.5 * Math.PI;
        //圆环的绘制
        ctx2.arc(w + 20, h, 60, 0.5 * Math.PI, num); //绘制的动作
        ctx2.setStrokeStyle("#1BC7B0"); //圆环线条的颜色
        ctx2.setLineWidth("16");	//圆环的粗细
        ctx2.setLineCap("butt");	//圆环结束断点的样式  butt为平直边缘 round为圆形线帽  square为正方形线帽
        ctx2.stroke();
        //开始绘制百分比数字
        ctx2.beginPath();
        ctx2.setFontSize(20); // 字体大小 注意不要加引号
        ctx2.setFillStyle("#1BC7B0");	 // 字体颜色
        ctx2.setTextAlign("center");	 // 字体位置
        ctx2.setTextBaseline("middle");	 // 字体对齐方式
        ctx2.fillText(c + "%", w + 20, h);	 // 文字内容和文字坐标
        ctx2.setFontSize(13); // 字体大小 注意不要加引号
        ctx2.setFillStyle("#838584");	 // 字体颜色
        ctx2.setTextAlign("center");	 // 字体位置
        ctx2.setTextBaseline("middle");	 // 字体对齐方式
        ctx2.fillText("正确率", w + 20, h + 20);	 // 文字内容和文字坐标
        wx.drawCanvas({
            canvasId: 'mycanvas',
            actions: ctx2.getActions() // 获取绘图动作数组
        })
    },
    canvasTap(start, end, time, w, h) {  //传入开始百分比和结束百分比的值，动画执行的时间，还有圆心横纵坐标
        var that = this;
        start++;
        if (end === 0) {
            that.run(0, w, h);
            return;
        } else
            if (start > end) {
                return;
            }
        that.run(start, w, h); //调用run方法
        setTimeout(function () {
            that.canvasTap(start, end, time, w, h);
        }, time);
    },

    onLoad: function (options) {
        this.storeBindings = createStoreBindings(this,{
            store,                          // 传入store
            fields: ['allTopicList','topicAnswer','correctAnswerList'],  // 需要什么数据都在此处声明        
          })
    },
    onReady: function () {
            let topicList = this.data.allTopicList;
            let answer = this.data.topicAnswer.answer;
            let useTime = this.data.topicAnswer.useTime;
            let finishTime = this.data.topicAnswer.finishTime;
            let correctAnswer = this.data.correctAnswerList.correctAnswer;
            let correctAnswerIndex = this.data.correctAnswerList.correctAnswerIndex;
            let analysis = this.data.correctAnswerList.analysis;
            this.setData({
                answer: answer,
                topicList: topicList,
                useTime: useTime,
                finishTime: finishTime,
                correctAnswer: correctAnswer,
                analysis: analysis,
                topicLen: analysis.length,
                correctAnswerIndex: correctAnswerIndex,
            },()=>{
        let selectCurrentDate=this.data.selectCurrentDate;
        let correct = 0;
        for (let i = 0; i < this.data.topicLen; i++) {
            // for (let j = 0; j < 4; j++) {
            //     temp = this.data.correctAnswer[i][j].is_standard_answer;
            //     if (temp) {
            //         let PP = {}, temp2 = this.data.correctAnswerIndex;
            //         PP[i + ""] = this.data.answerIndex[j];
            //         temp2.push(PP);
            //         this.setData({
            //             correctAnswerIndex: temp2,
            //         })
            //         break;
            //     }
            // }
            if ((this.data.answer[i] != null) && this.data.answer[i][i] === this.data.correctAnswerIndex[i][i]) {
                correct++;
            }
        }
        let error = this.data.topicLen - correct;
        let rat_temp = Math.round((correct / this.data.topicLen) * 100);
        rat_temp = rat_temp === rat_temp ? rat_temp : 0;
        let averageTime=Math.round(this.data.useTime / 20);
        this.setData({
            correctNum: correct,
            errorNum: error,
            rat: rat_temp,
            averageTime: averageTime
        });
        this.canvasTap(0, this.data.rat, 1, 75, 75);
        if (this.data.answer.length != 0) {
            let obj = {};
            let finishedsingleTaskScore1 = app.globalData.finishedsingleTaskScore;
            let selectCurrentDate = '';
            // console.log('5:' + app.globalData.finishedsingleTaskScore);
            for (let i = 0; i < app.globalData.selectedsingleTaskScore.length; i++) {
                // console.log(app.globalData.selectedsingleTaskScore[i].date);
                if (app.globalData.selectedsingleTaskScore[i].date == app.globalData.selectCurrentDate) {
                    // obj={
                    //     'date':,
                    //     // finishedFlag:true
                    // }
                    finishedsingleTaskScore1.push(app.globalData.selectCurrentDate);
                    selectCurrentDate = app.globalData.selectCurrentDate;
                    this.setData({
                        selectCurrentDate: selectCurrentDate
                    }, () => {
                        // console.log('4:' + this.data.selectCurrentDate);
                    })

                }
            }
            app.globalData.finishedsingleTaskScore = finishedsingleTaskScore1;
            // console.log('3:' + finishedsingleTaskScore1);
            // console.log('2:' + app.globalData.finishedsingleTaskScore);
        }
    })         
        // 将分数写入数据库
        updateScore({
            name: app.globalData.username,//用户名称
            time: this.data.finishTime,//完成时间
            topicTitle: '认知基础（2）、学习理论（1）',//完成任务的题目
            useTime: this.data.useTime,//答题所花费的时间
            avarageTime: this.data.averageTime,//做一题需要的时间
            correctNum: this.data.correctNum,//正确题目数目
            errorNum: this.data.errorNum,//错误题目数目
            topicNum: 20,//每次答题的数目
            answer: JSON.stringify(this.data.answer),//用户所答题的答案。
            finishedsingleTaskDate: this.data.selectCurrentDate,//完成任务所对应的日期
            score: this.data.rat,//正确率也是分数
        }).then((res)=>{
            // 请求当前用户所有的分数数据
            let totalNum = 0;
            let useTime = 0;
            let correctNum = 0;
            if(res.status==='1'){
                getUserScore({name:app.globalData.username}).then(
                    (res)=>{
                        this.setData({
                            scoreList:res.result.list
                        },()=>{
                            // 计算当前用户的题量和速度时间
                            for (let i = 0; i < this.data.scoreList.length; i++) {
                                    totalNum += this.data.scoreList[i].topicNum;
                                    useTime += this.data.scoreList[i].useTime;
                                    correctNum += this.data.scoreList[i].correctNum;
                            }
                            let correctRat = Math.round((correctNum / totalNum) * 100);
                            let avarageSpeed = Math.round(useTime / totalNum)
                            updateRank({
                                name: app.globalData.username,
                                totalTopicNum: totalNum,
                                speed: avarageSpeed,
                                correctRat: correctRat
                            }).then((res)=>{
                                console.log('更新成功')
                            },(error)=>{
                                console.log('uapdateRank',error)
                            });
                        }); 
                },(error)=>{
                    console.log('UserScore:',error);
                });
            }
        },(error)=>{console.log('updateScore:',error)});
            
    },
    onUnload: function () {
          // 一定要调用清理函数，否则将导致内存泄漏！
        this.storeBindings.destroyStoreBindings()
    },
})