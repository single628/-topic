Page({

    data: {
        orderNote: '',//纠错备注
        orderNoteMax: 300,//纠错备注最大长度
        emitflag:false
    },
    //纠错备注textarea
    inputs: function (e) {
        // 获取输入框的内容
        var value = e.detail.value;
        this.setData({//更新备注内容到vue缓存
            orderNote: e.detail.value
        })
        // 获取输入框内容的长度
        var len = parseInt(value.length);

        //最多字数限制
        if (len > this.data.orderNoteMax) return;
        // 当输入框内容的长度大于最大长度限制（max)时，终止setData()的执行
        this.setData({
            currentWordNumber: len, //当前字数
            emitflag:true
        });
    }
     
})