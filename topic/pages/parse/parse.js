var app = getApp()
import {updateRank,updateScore,getUserScore} from '../../api/index'
import { createStoreBindings} from 'mobx-miniprogram-bindings'
import { store } from '../../store/store'
Page({
    data: {
        singleTopic: {},
        counter: 0,
        currentTopicNum: 1,
        topicLen: 20,
        analysis: [],
        answer: [],
        correctAnswer: [],
        topicList: [],
        currentId: '',
        correctId: '',
        onlyflag: false,
        answerflag: false,
        errorflag: false,
        errorNum: 0,
        errorList: [],
        errorListIndex: [],
        errorAnswer: [],//做错的题目所选择的答案
        errorCorrectAnswer: [],//做错的题目的正确答案
        answerPro: [],
        correctAnswerPro: [],
        topicListPro: [],
        flag: false,
        startPoint: [0, 0],
        solution: { "A": 0, "B": 1, "C": 2, "D": 3 },
        jumpId: undefined,
        jumpAnswer: [],
    },
    // 坐标轴及业务逻辑分析：
    // ①假设A点为touchstart事件触摸点，坐标为A(ax,ay)，然后手指向上滑动到点B(bx,by)，就满足条件by < ay
    // ②同理，向右滑动到C(cx,cy),满足cx > ax；向下滑动到D(dx,dy),满足dy > ay；向左移动到E(ex，ey)满足ex < ax
    // ③计算线段AB在Y轴上投影长度为m,在X轴上的投影长度为n
    // ④计算r = m/n,如果r > 1,视为向上滑动，同理计算线段AC,AD,AE在Y轴投影长度与X轴的投影长度之比，得出向右向下向左的滑动
    touchStart(event) {
        this.setData({
            startPoint: [event.touches[0].pageX, event.touches[0].pageY]
        })
    },
    TimeID: -1,
    touchMove(event) {
        // 当前触摸的点
        clearTimeout(this.TimeID);//防抖
        this.TimeID = setTimeout(() => {
            var currentPoint = [event.touches[0].pageX, event.touches[0].pageY];
            var startPoint = this.data.startPoint;
            if (currentPoint[0] <= startPoint[0]) {
                if (Math.abs(currentPoint[0] - startPoint[0]) >= Math.abs(currentPoint[1] - startPoint[1]) && this.data.counter < this.data.topicLen-1) {
                    this.setData({
                        counter: ++this.data.counter,
                        currentTopicNum: this.data.counter + 1,
                        singleTopic: this.data.topicListPro[this.data.counter],
                        correctId: this.data.solution[this.data.correctAnswerPro[this.data.counter][this.data.counter]]
                    })
                    let solu = this.data.answerPro[this.data.counter];
                    if (solu) {
                        this.setData({
                            currentId: this.data.solution[solu[this.data.counter]],

                        })
                    } else {
                        this.setData({
                            currentId: ""
                        })
                    }
                }
            } else {
                if (Math.abs(currentPoint[0] - startPoint[0]) >= Math.abs(currentPoint[1] - startPoint[1]) && this.data.counter > 0) {
                    let solu = this.data.answerPro[this.data.counter];
                    this.setData({
                        counter: --this.data.counter,
                        currentTopicNum: this.data.counter + 1,
                        singleTopic: this.data.topicListPro[this.data.counter],
                        correctId: this.data.solution[this.data.correctAnswerPro[this.data.counter][this.data.counter]]
                    })

                    if (solu) {
                        this.setData({
                            currentId: this.data.solution[solu[this.data.counter]],

                        })
                    } else {
                        this.setData({
                            currentId: ""
                        })
                    }
                }
            }
        }, 500)

    },
    //只看错题
    onlyError() {
        this.setData({
            answerflag: false,
            onlyflag: true,
            errorflag: false,
            topicListPro: this.data.errorList,
            answerPro: this.data.errorAnswer,
            correctAnswerPro: this.data.errorCorrectAnswer,
            topicLen: this.data.errorNum,
            counter: 0,
            currentId: '',
            correctId: '',
            currentTopicNum: 1,
        })
        let solu = this.data.answerPro[0];//从answer中选取对应题目的答案，并保留，有的话不会是空，没做答案的话就是空
        let correctsolu = this.data.correctAnswerPro[0];
        this.setData({
            singleTopic: this.data.topicListPro[0],
            correctId: this.data.solution[correctsolu[0]]
        })
        if (solu) {
            this.setData({
                currentId: this.data.solution[solu[0]],

            })
        } else {
            this.setData({
                currentId: ""
            })
        }
    },
    //收藏,怎么实现重复点击
    backTaskList() {
        wx.redirectTo({
            url: '../home/home?finishedsingleTaskScore='+JSON.stringify(app.globalData.finishedsingleTaskScore),
        })
    },
    //纠错
    errorRecovery() {
        this.setData({
            answerflag: false,
            onlyflag: false,
            errorflag: true
        })
        wx.navigateTo({
          url: '../errorCorrection/errorCorrection',
        })
        setTimeout(() => {
            this.setData({
                answerflag: false,
                onlyflag: false,
                errorflag: false
            })
        }, 200)
    },
    onLoad: function (options) {
        this.storeBindings = createStoreBindings(this,{
            store,                          // 传入store
            fields: ['allTopicList','topicAnswer','correctAnswerList'],  // 需要什么数据都在此处声明        
        })
        
    },
    onReady() {
        let topicList = this.data.allTopicList;
        let answer = this.data.topicAnswer.answer;
        let correctAnswer = this.data.correctAnswerList.correctAnswerIndex;
        let analysis = this.data.correctAnswerList.analysis;
        this.setData({
            // 将JSON字符串用parse转为JSON对象
            answer:answer,
            correctAnswer:correctAnswer,
            analysis: analysis,
            topicList: topicList,
        }, () => {
            this.setData({
                topicListPro: this.data.topicList,
                answerPro: this.data.answer,
                correctAnswerPro: this.data.correctAnswer
            })
            if (!this.data.errorflag) {
                let solu = this.data.answer[0];//从answer中选取对应题目的答案，并保留，有的话不会是空，没做答案的话就是空
                let correctsolu = this.data.correctAnswer[0];
                this.setData({
                    singleTopic: this.data.topicList[0],
                    correctId: this.data.solution[correctsolu[0]]
                })
                if (solu) {
                    this.setData({
                        currentId: this.data.solution[solu[0]],
                    })
                } else {
                    this.setData({
                        currentId: ""
                    })
                }
            }

        })
        let num = 0;
        let list = [];
        let listIndex = [];
        let errorAns = [];
        let errorCorrectAns = [];
        for (let i = 0; i < 20; i++) {
            if (this.data.answer[i]) {
                if (this.data.answer[i][i] != this.data.correctAnswer[i][i]) {
                    num++;
                    list.push(this.data.topicList[i])
                    listIndex.push(i);
                    errorAns.push(this.data.answer[i]);
                    errorCorrectAns.push(this.data.correctAnswer[i]);
                }
            } else if (!this.data.answer[i]) {
                num++;
                list.push(this.data.topicList[i]);
                listIndex.push(i);
                errorAns.push(this.data.answer[i]);
                errorCorrectAns.push(this.data.correctAnswer[i]);
            }
        }
        this.setData({
            errorNum: num,
            errorList: list,
            errorListIndex: listIndex,
            errorAnswer: errorAns,
            errorCorrectAnswer: errorCorrectAns,
        })
    },
    onUnload: function () {
        // 一定要调用清理函数，否则将导致内存泄漏！
      this.storeBindings.destroyStoreBindings()
  },
})