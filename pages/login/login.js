// pages/login/login.js
const AV = require('../../libs/av-core-min.js');
// const avweapp = require('../../libs/av-weapp-min');
const app = getApp();
wx.cloud.init()
// avweapp.initialize({
//   appId: 'zzuXKNMpzK0r6Ka12gP08fx5-gzGzoHsz',
//   appKey: 'cAG7rlcNIYbXkhGvTyIyt0er',
//   serverURLs: "https://zzuxknmp.lc-cn-n1-shared.com",
// })

Page({
  /**
   * 页面的初始数据
   */
  data: {
    com_reg: "",
    username: "",
    password: "",
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 
  },

  /**
   * 输入用户名监听
   */
  inputNameLog(e) {
    // console.log(e.detail.value)
    this.setData({
      username: e.detail.value,
    })
  },

  /**
   * 输入密码监听
   */
  inputPwLog(e) {
    // console.log(e.detail.value)
    this.setData({
      password: e.detail.value,
    })
  },

  /**
   * 登录事件
   */
  login() {
    //   wx.navigateTo({
    //     url: '../message/message?message='+this.data.username,
    //   })
    const {
      username,
      password,
    } = this.data;
    // console.log(username)
    AV.User.logIn(username, password).then(function (loginedUser) {
      // wx.redirectTo({
      //   url: '../message/message?message=' + "hello world!",
      // });
      wx.showToast({
          title: '登录成功',
          icon: 'success',
        }),
        setTimeout(function () {
          wx.navigateTo({
            url: '../main/main',
          })
        }, 500)

      // 登录成功，跳转到message页面
    }, function (error) {
      wx.redirectTo({
        url: '../login/login',
      });
      wx.showToast({
        title: '检查账号和密码',
        icon: 'error',
      });
      alert(JSON.stringify(error));
    });
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    wx.cloud.callFunction({
      name: "infoForLogin",
      data: {
        a: 1,
        b: 2,
      },
      success: function (res) {
        // console.log("done")
      },
      fail: console.error
    })
  },
  /**
   * 使用微信账号登录
   */
  getUserProfile(e) {
    // avweapp.User.loginWithMiniApp().then(user => {
    //   console.log(user);
    // }).catch(console.error);
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，
      success: (res) => {
        // console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
        })
        const Currentuser = AV.User.current()
        Currentuser.set(res.userInfo).save()
      },
      complete:(res)=>{
        console.log(app.globalData.userInfo)
        wx.navigateTo({
          url: '../index/index',
        })
      }
    
    })

    // avweapp.initialize()
    // const Currentuser = avweapp.User.current()
    // Currentuser.set(this.data.userInfo).save()
    
    // console.log(this.data.userInfo)
    // setTimeout(function (avatarurl = Currentuser.attributes.avatarUrl) {
    //   wx.navigateTo({
    //     url: '../main/main' + '?avatar=' + avatarurl,
    //   })
    // }, 500)
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    getApp().globalData.userInfo = this.data.userInfo
    getApp().globalData.loginStatus = true
    // console.log(app.globalData.userInfo)
  },
})