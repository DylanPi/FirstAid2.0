// index.js
const AV = require('../../libs/av-core-min.js');
// 获取应用实例
const app = getApp();
Page({
  data: {
    userInfo: {},
  },
  

  onShow: function () {
    const Cuser = AV.User.current()
    // console.log(Cuser.attributes.nickName)
    // console.log(app.globalData.userInfo)
    if (Cuser.attributes.nickName == undefined) {
      setTimeout(function (e) {
        wx.navigateTo({
          url: '../login/login',
        })
      }, 1000)

    } else {
      setTimeout(function (e) {
        wx.navigateTo({
          url: '../main/main',
        })
      }, 1000)
    }
  },
})