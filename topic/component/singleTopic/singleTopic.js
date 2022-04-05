Component({
  /**
   * 组件的属性列表
   */
  properties: {
    singleTopic: {
      type: Object,
      value: {}
    },
    singleNum: {
      type: String,
      value: ""
    },
    currentId: {
      type: String,
      value: ""
    },
    correctId: {
      type: String,
      value: ""
    },
    flag: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    dateList: [], //日历主体渲染数组
    selectDay: {}, //选中时间
    answerIndex: ['A', 'B', 'C', 'D'],
    singleTopicAnswer: {},
    bgColor1: "#1BC7A2",
    bgColor2: "#e70909",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    selectAnswer(event) {
      if (this.data.flag) {
        for (let i = 0; i < 4; i++) {
          if (event.currentTarget.id === i + "") {
            this.setData({
              currentId: i + '',
              singleTopicAnswer: { [this.data.singleNum]: this.data.answerIndex[i] }
            }, () => {

            })
          }
        }
        this.triggerEvent('getCurrentId', this.data.singleTopicAnswer);
      }
    }
  },
})
