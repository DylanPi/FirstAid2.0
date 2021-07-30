// pages/_card/_card.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:"",
    avatar:"",
    blood: "A型、Rh阳性",
    allergy: "青霉素",
    chronic: "高血糖、高血压",
    Medication: "阿司匹林、布洛芬",
    Treatment: "持续化疗中",
    remarks: "无",
    emergency_contact: [{
      EmconName: "李鹏海",
      EmconTel:"123456578910"
    }],
    notEidting: true,
  },

  isEdit(e) {
    this.setData({
      notEidting: !this.data.notEidting
    })
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300,
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      avatar: app.globalData.user.attributes.avatarUrl,
      username: app.globalData.user.attributes.nickName,
    })
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

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})