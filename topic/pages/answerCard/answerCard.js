import { createStoreBindings} from 'mobx-miniprogram-bindings'
import { store } from '../../store/store'
Page({
    data: {
        answer: [],//答案
        useTime: 0,
        flag:'',
    },
    jump(e) {
        // 问题：使用wxwx.navigateTo()或者<navigator>组件跳转页面路径最多只有5层，所以超过5层会报错。而使用redirecTo则无此限制
        // wx.navigateTo({
        //   url: '../topic/topic?jumpId='+e.currentTarget.id+'&answer='+JSON.stringify(this.data.answer),
        // })
        wx.redirectTo({
            url: '../topic/topic?jumpId=' + e.currentTarget.id+'&flag'+'topicCard',
        })
        console.log('jump:' + JSON.stringify(this.data.useTime));
    },
    jumpToScore() {
        wx.navigateTo({
            url: '../score/score',
        })
    },
    onLoad: function (options) {
        this.storeBindings = createStoreBindings(this,{
            store,                          // 传入store
            fields: ['topicAnswer'],  // 需要什么数据都在此处声明
          })  
    },
    onReady(){
        let answer = this.data.topicAnswer.answer;
        let useTime = this.data.topicAnswer.useTime;
        this.setData({
            answer: answer,
            useTime: useTime,
        },()=>{
            console.log(this.data.useTime);
        })
    },
    onUnload: function () {
          // 一定要调用清理函数，否则将导致内存泄漏！
        this.storeBindings.destroyStoreBindings()
    },
})