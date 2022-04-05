App({
    globalData: {
        username: '',
        finishedsingleTaskScore:[],
        selectedsingleTaskScore:[],
        selectCurrentDate:'',
    },
    watch: function (dataName, callback, that) {
        // 拿到全局变量、当然你也可以监听任何其他的对象
        var obj = this.globalData;
        Object.defineProperty(obj, dataName, {
          // 可配置
          configurable: true,
          // 可枚举
          enumerable: true,
          // 当监听的函数被设置新值的时候执行
          set: function (value) {
              // 当我们监听的值被修改的时候，触发 set 方法
              // 把新值存入一个临时的属性里，为什么存到临时的？看后边。
            this['temp' + dataName] = value;
            // 调用回调函数，传入新值
            callback.call(that, value);
          },
          // 当监听的函数被get的时候调用
          get: function () {
              // 当我们主动去 get 监听的这个值的时候触发当前函数，这里你可以进行一下其他操作。
            return this['temp' + dataName];
          }
        })
    },
    
    onLoad(options) {
        
    }
})