const app = getApp();
Page({
  data: {
    userInfo: null,
    hasUserInfo: false,
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        //   console.log(res.userInfo.nickName);
        this.setData({
          userInfo: res.userInfo.nickName,
          hasUserInfo: true
        })
        wx.setStorageSync('user', res.userInfo.nickName)
        app.globalData.username = this.data.userInfo;//将用户名字保存存到全局变量中去
        wx.redirectTo({
          url: '../home/home',
        })
      }
    })
  },
  onLoad(options) {
    let user = wx.getStorageSync('user')
    if (user) {
      this.setData({
        userInfo: user,
      })
    }
  }
})