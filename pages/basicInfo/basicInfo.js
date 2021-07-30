// pages/basicInfo/basicInfo.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isReal: {
      status: true,
      imgT: "../../img/isReal.png",
      imgF:"../../img/isNotReal.png"
    },
    basicInfoList: [{
        id: 0,
        name: "头像",
        value: "../../img/photo.png"
      },
      {
        id: 1,
        name: "账号",
        value: "123456789"
      },
      {
        id: 2,
        name: "用户名",
        value: "DylanPi"
      },
      {
        id: 3,
        name: "手机",
        value: "12345678910"
      },
      {
        id: 4,
        name: "邮箱",
        value: "123456789@zju.edu.cn"
      },
      {
        id: 5,
        name: "所在地",
        value: "浙江杭州"
      },
      {
        id: 6,
        name: "学校/工作单位",
        value: "浙江大学"
      },
      {
        id: 7,
        name: "所属校区",
        value: "紫金港校区"
      },
      {
        id: 8,
        name: "学号",
        value: "123456789"
      },
      {
        id: 9,
        name: "院系",
        value: "生物医学工程与仪器科学学院"
      },
      {
        id: 10,
        name: "专业",
        value: "生物医学工程"
      },
      {
        id: 11,
        name: "班级",
        value: "生医1904"
      },
      {
        id: 12,
        name: "政治面貌",
        value: "中共党员"
      },
    ],
    realInfoList: [{
        id: 13,
        name: "姓名",
        value: "李鹏海"
      },
      {
        id: 14,
        name: "证件类型",
        value: "居民身份证",
      },
      {
        id: 15,
        name: "证件号码",
        value: "123456123456781234"
      },
    ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.user)
    this.setData({
      'isReal.status':app.globalData.user.attributes.isRealman,
      'basicInfoList[0].value' : app.globalData.user.attributes.avatarUrl,
      'basicInfoList[1].value' : app.globalData.user.attributes.username,
      'basicInfoList[2].value' : app.globalData.user.attributes.nickName,
      'basicInfoList[5].value' : app.globalData.user.attributes.province+app.globalData.user.attributes.city,
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