const wxAdapters =require('./libs/platform-adapters-weapp.js')
import * as LC from './libs/lc.min';
const LiveQuery =require('./libs/live-query.min')
const AV = require('./libs/av-core-min');
const adapters = require('./libs/leancloud-adapters-weapp.js');


  LC.setAdapters(wxAdapters);

LC.use(LiveQuery);
AV.setAdapters(adapters);

AV.init({
  appId: 'WrfT11MN2pjQ6xJJzRxwWzka-gzGzoHsz',
  appKey: 'mfTYu6u0nKzOXSPgH29rujUD',
  serverURL: 'https://wrft11mn.lc-cn-n1-shared.com',
})
LC.init({
  appId: 'WrfT11MN2pjQ6xJJzRxwWzka-gzGzoHsz',
  appKey: 'mfTYu6u0nKzOXSPgH29rujUD',
  serverURL: 'https://wrft11mn.lc-cn-n1-shared.com',
})
//app.js
App({



  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onShow() {
    AV.User.loginWithMiniApp().then(user => {
      // console.log('--------------------------------------------------------------')
      // console.log( user)
      // console.log('--------------------------------------------------------------')
      this.globalData.user = user
    }).catch(console.error)
  },
  globalData: {
    loginStatus: false,
    userInfo: null
  }
})
