// components/calendar/calendar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    duigou: {
      type: Array,
      value: []
    },
    defaultTime: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    dateList: [], //日历主体渲染数组
    selectDay: {}, //选中时间
    open: false,
    title: '',
    suo: false,
    kk: false,
    rr: false,
    ff: false,
    topicList:[],
    correctAnswer:[],
    analysis:[],
  },
  /**
   * 组件的方法列表
   */
  methods: {
    titleView() {
      wx.redirectTo({
        url: '../../pages/topic/topic',
      })
    },
    jumpToScore(){
      console.log('触发');
      let answer=[];
      let time="";
      let useTime=0;
      let correctAnswer=this.data.correctAnswer;
      let topicList=this.data.topicList;
      let analysis=this.data.analysis;
      for(let i = 0;i<this.data.duigou.length;i++){
        if(this.data.selectDay.dateString===this.formatTime(this.data.duigou[i].finishedsingleTaskDate, "Y-M-D")){
          answer=JSON.parse(this.data.duigou[i].answer);
          time=this.data.duigou[i].time;
          useTime=this.data.duigou[i].useTime;
          console.log("组件："+ typeof answer);
        }
      }
      wx.redirectTo({
        url: '../../pages/score/score?finishTime='+JSON.stringify(time)
        +"&answer="+JSON.stringify(answer)
        +'&useTime='+JSON.stringify(useTime)
        +"&analysis="+JSON.stringify(analysis)
        +"&topicList="+JSON.stringify(topicList)
        +"&correctAnswer="+JSON.stringify(correctAnswer),
        
      })
    },
    /**
     * 时间戳转化为年 月 日 时 分 秒
     * time: 需要被格式化的时间，可以被new Date()解析即可
     * format：格式化之后返回的格式，年月日时分秒分别为Y, M, D, h, m, s，这个参数不填的话则显示多久前
     */
    formatTime(time, format) {
      function formatNumber(n) {
        n = n.toString()
        return n[1] ? n : '0' + n //判断第二位数字是否是两位数字，不是的话就加一个零
      }

      function getDate(time, format) {//格式化时间
        const formateArr = ['Y', 'M', 'D', 'h', 'm', 's']
        const returnArr = []
        const date = new Date(time)//确保输出的还是time时间
        returnArr.push(date.getFullYear())
        returnArr.push(formatNumber(date.getMonth() + 1))
        returnArr.push(formatNumber(date.getDate()))
        returnArr.push(formatNumber(date.getHours()))
        returnArr.push(formatNumber(date.getMinutes()))
        returnArr.push(formatNumber(date.getSeconds()))
        for (const i in returnArr) {
          format = format.replace(formateArr[i], returnArr[i])//当对象为数组时，变量i指的是数组的索引，若为对象时，变量是属性
        }
        return format
      }

      function getDateDiff(time) {
        let r = ''
        const ft = new Date(time)
        const nt = new Date()
        const nd = new Date(nt)
        nd.setHours(23)
        nd.setMinutes(59)
        nd.setSeconds(59)
        nd.setMilliseconds(999)
        const d = parseInt((nd - ft) / 86400000)
        switch (true) {
          case d === 0:
            const t = parseInt(nt / 1000) - parseInt(ft / 1000)
            switch (true) {
              case t < 60:
                r = '刚刚'
                break
              case t < 3600:
                r = parseInt(t / 60) + '分钟前'
                break
              default:
                r = parseInt(t / 3600) + '小时前'
            }
            break
          case d === 1:
            r = '昨天'
            break
          case d === 2:
            r = '前天'
            break
          case d > 2 && d < 30:
            r = d + '天前'
            break
          default:
            r = getDate(time, 'Y-M-D')
        }
        return r
      }
      if (!format) {
        return getDateDiff(time)
      } else {
        return getDate(time, format)
      }
    },
    //picker设置月份
    // editMonth(e) {
    //   const arr = e.detail.value.split("-")
    //   const year = parseInt(arr[0])
    //   const month = parseInt(arr[1])
    //   this.setMonth(year, month)
    // },
    // //上月切换按钮点击
    // lastMonth() {
    //   const lastMonth = new Date(this.data.selectDay.year, this.data.selectDay.month - 2)
    //   const year = lastMonth.getFullYear()
    //   const month = lastMonth.getMonth() + 1
    //   this.setMonth(year, month)
    // },
    // //下月切换按钮点击
    // nextMonth() {
    //   const nextMonth = new Date(this.data.selectDay.year, this.data.selectDay.month)
    //   const year = nextMonth.getFullYear()
    //   const month = nextMonth.getMonth() + 1
    //   this.setMonth(year, month)
    // },
    // 设置月份
    setMonth(setYear, setMonth, setDay) {
      if (this.data.selectDay.year !== setYear || this.data.selectDay.month !== setMonth) {
        const day = Math.min(new Date(setYear, setMonth, 0).getDate(), this.data.selectDay.day)//new Date(setYear, setMonth, 0).getDate是取出当前年月的最后一天的日期,当this.data.selectDay.day为undefined时，该表达式的结果为nan
        const time = new Date(setYear, setMonth - 1, setDay ? setDay : day)
        const data = {
          selectDay: {
            year: setYear,
            month: setMonth,
            day: setDay ? setDay : day,
            dateString: this.formatTime(time, "Y-M-D")
          }
        }
        if (!setDay) {
          data.open = true
        }
        this.setData(data)
        this.dateInit(setYear, setMonth)
        this.setfinish()

      }
    },
    //展开收起
    openChange() {
      this.setData({
        open: !this.data.open
      })
      this.dateInit()//展开就执行次函数
      this.setfinish()
    },
    //设置日历底下是否展示小圆点
    setfinish() {
      let timeArr=[];
      for(let i = 0;i<this.data.duigou.length;i++){
        timeArr.push(this.formatTime(this.data.duigou[i].finishedsingleTaskDate, "Y-M-D"));
      }
      this.data.dateList.forEach(item => {
        if (timeArr.indexOf(item.dateString) !== -1) {
          item.suo = false;
          item.spot = false;
          item.duigou = true;
        } else {
          item.duigou = false
        }
      })
      this.setData({
        dateList: this.data.dateList,
        ff: true
      })
    },
    // setSpot(){
    //   const timeArr = this.data.dateList.map(item => {
    //     return this.formatTime(item, "Y-M-D")
    //   })
    //   this.data.dateList.forEach(item => {
    //     if (timeArr.indexOf(item.dateString) !== -1) {
    //       item.spot = true
    //     } else {
    //       item.spot = false
    //     }
    //   })
    //   this.setData({
    //     dateList: this.data.dateList
    //   })
    // },
    //日历主体的渲染方法
    dateInit(setYear = this.data.selectDay.year, setMonth = this.data.selectDay.month) {
      let dateList = []; //需要遍历的日历数组数据
      let title = [];
      let now = new Date(setYear, setMonth - 1)//当前月份的1号,比如：2022/01/01
      let startWeek = now.getDay(); //目标月1号对应的星期,6代表星期六，0代表星期日
      let dayNum = new Date(setYear, setMonth, 0).getDate() //当前月有多少天
      let forNum = Math.ceil((startWeek + dayNum) / 7) * 7 //当前月跨越的周数
      let today = new Date().valueOf();
      let today_month = new Date().getMonth() + 1;
      let today_year = new Date().getFullYear();
      if (this.data.open) {
        //展开状态，需要渲染完整的月份
        for (let i = 0; i < forNum; i++) {
          // console.log(i)
          const now2 = new Date(now)
          now2.setDate(i - startWeek + 1)
          // console.log(now2.setDate(i - startWeek + 1))
          let obj = {};
          obj = {
            day: now2.getDate(),
            month: now2.getMonth() + 1,
            year: now2.getFullYear(),
            dateString: this.formatTime(now2, "Y-M-D")
          };
          dateList[i] = obj;
          if (now2.getDay() == 0 || now2.getDay() == 6) {
            dateList[i].spot = false;
            dateList[i].suo = false;
            dateList[i].duigou = false;
          } else if (now2.getDay() != 0 && now2.getDay() != 6 && now2.valueOf() > today) {
            dateList[i].suo = true;
            dateList[i].spot = false;
            dateList[i].duigou = false;
          } else if (now2.getDay() != 0 && now2.getDay() != 6 && now2.valueOf() <= today) {
            dateList[i].suo = false;
            dateList[i].spot = true;
            dateList[i].duigou = false;

          }
        }
      } else {
        //非展开状态，只需要渲染当前周
        for (let i = 0; i < 7; i++) {
          const now2 = new Date(now)
          //当前周的7天
          now2.setDate(Math.ceil((this.data.selectDay.day + startWeek) / 7) * 7 - 6 - startWeek + i)
          let obj = {};
          obj = {
            day: now2.getDate(),
            month: now2.getMonth() + 1,
            year: now2.getFullYear(),
            dateString: this.formatTime(now2, "Y-M-D")
          };
          dateList[i] = obj;
          if (now2.getDay() == 0 || now2.getDay() == 6) {
            dateList[i].spot = false;
            dateList[i].suo = false;
            dateList[i].duigou = false;

          } else if (now2.getDay() != 0 && now2.getDay() != 6 && now2.valueOf() > today) {
            dateList[i].suo = true;
            dateList[i].spot = false;
            dateList[i].duigou = false;
          } else if (now2.getDay() != 0 && now2.getDay() != 6 && now2.valueOf() < today) {
            dateList[i].suo = false;
            dateList[i].spot = true;
            dateList[i].duigou = false;
          } else if (now2.getDay() != 0 && now2.getDay() != 6 && now2.valueOf() == today) {
            dateList[i].suo = false;
            dateList[i].spot = true;
            dateList[i].duigou = false;
          }
        }
      }
      this.setData({
        dateList: dateList,
        rr: true
        // titleshow:titleshow
      })
      for (let i = 0; i < this.data.dateList.length; i++) {
        if (this.data.dateList[i].day === today && this.data.dateList[i].month == today_month && this.data.dateList[i].year == today_year) {
          if (!this.data.dateList[i].spot && !this.data.dateList[i].duigou && !this.data.dateList[i].suo) {
            this.setData({//没有任务
              suo: false,
              kk: true,
              rr: false,
              ff: false,
            })
          } else { //有任务
            if (this.data.dateList[i].suo && !this.data.dateList[i].spot && !this.data.dateList[i].duigou) {
              this.setData({
                suo: true,
                kk: false,
                rr: false,
                ff: false,
              })
            } else if (!this.data.dateList[i].suo && this.data.dateList[i].spot && !this.data.dateList[i].duigou) {
              this.setData({
                suo: false,
                kk: false,
                rr: true,
                ff: false
              })
            } else if (!this.data.dateList[i].suo && !this.data.dateList[i].spot && this.data.dateList[i].duigou) {
              this.setData({
                suo: false,
                kk: false,
                rr: false,
                ff: true,
              })
            }
          }
        }

      }
      // this.triggerEvent('titleshow', this.data.titleshow)//子组件向父组件发送变量
      // console.log(this.data.dateList);
    },
    //一天被点击时
    selectChange(e) {
      const year = e.currentTarget.dataset.year
      const month = e.currentTarget.dataset.month
      const day = e.currentTarget.dataset.day
      const dateString = e.currentTarget.dataset.dateString
      let taskTitle = '';
      for (let i = 0; i < this.data.dateList.length; i++) {
        if (this.data.dateList[i].day === day && this.data.dateList[i].month == month && this.data.dateList[i].year == year) {
          if (!this.data.dateList[i].spot && !this.data.dateList[i].duigou && !this.data.dateList[i].suo) {
            taskTitle = "今天没有任务"
            this.setData({//没有任务
              suo: false,
              kk: true,
              rr: false,
              ff: false,

            })
          } else { //有任务
            taskTitle = "认知基础（2）、学习理论（1）"
            if (this.data.dateList[i].suo && !this.data.dateList[i].spot && !this.data.dateList[i].duigou) {
              this.setData({
                suo: true,
                kk: false,
                rr: false,
                ff: false,
              })
            } else if (!this.data.dateList[i].suo && this.data.dateList[i].spot && !this.data.dateList[i].duigou) {
              this.setData({
                suo: false,
                kk: false,
                rr: true,
                ff: false
              })
            } else if (!this.data.dateList[i].suo && !this.data.dateList[i].spot && this.data.dateList[i].duigou) {
              this.setData({
                suo: false,
                kk: false,
                rr: false,
                ff: true,
              })
            }
          }

          // console.log("suo:"+this.data.suo);
          // console.log("kk:"+this.data.kk);
          // console.log("rr:"+this.data.rr);

        }

      }
      const selectDay = {
        year: year,
        month: month,
        day: day,
        dateString: dateString,
        taskTitle: taskTitle
      }
      if (this.data.selectDay.year !== year || this.data.selectDay.month !== month) {
        this.setMonth(year, month, day)
      } else if (this.data.selectDay.day !== day) {
        this.setData({
          selectDay: selectDay
        })
      }
      this.triggerEvent("change", this.data.selectDay)
    }
  },
  lifetimes: {
    attached() {
      let now = this.data.defaultTime ? new Date(this.data.defaultTime) : new Date()//defaultTime是父组件传进来的值,如果父组件没有传过来值就等于今天的时间
      let taskTitle = '';
      let _this=this;
      if (now.getDay() == 0 || now.getDay() == 6) {
        taskTitle = '今天没有任务'
      } else {
        taskTitle = "认知基础（2）、学习理论（1）"
      }
      let selectDay = {
        year: now.getFullYear(),
        month: now.getMonth() + 1,
        day: now.getDate(),
        dateString: this.formatTime(now, "Y-M-D"),
        taskTitle: taskTitle
      }
      this.triggerEvent("change", selectDay)
      this.setMonth(selectDay.year, selectDay.month, selectDay.day);
      wx.request({
        // 这里遇到一个问题就是，request不允许访问本地服务器
        url: 'http://localhost:3038/task',
        method: 'GET',
        success(res) { 
          _this.setData({
            topicList: res.data.result.list,
        },()=>{
                let correctAnswer_temp = [];
                let analysis_temp = [];
                for (let i = 0; i < _this.data.topicList.length; i++) {
                    correctAnswer_temp.push(_this.data.topicList[i].topic_answer_content);
                    analysis_temp.push(_this.data.topicList[i].topic_analysis);
                }
                _this.setData({
                    correctAnswer: correctAnswer_temp,
                    analysis: analysis_temp
                });
        }),
          console.log('请求成功');
        },
        fail() {
          console.log('请求失败');
        }
      })
    }
  },
  observers: {
    duigou: function (duigou) {
      this.setfinish()
    }
  },
})

