// pages/aidManCard/aidManCard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    photo_src: "../../img/photo.png",
    cardList: [{
        class: "userName",
        name: "姓名",
        nameEn: "Name",
        value: "李鹏海",
      },
      {
        class: "userSex",
        name: "性别",
        nameEn: "Sex",
        value: "男",
      },
      {
        class: "userID",
        name: "身份证号",
        nameEn: "ID Card NO.",
        value: "123456123456781234",
      },
      {
        class: "userCardID",
        name: "编号",
        nameEn: "Serial NO.",
        value: "0000001",
      },

      {
        class: "userDate",
        name: "发证日期",
        nameEn: "Issue Date",
        value: "2021/07/21",
      },
      {
        class: "useruDate",
        name: "有效期",
        nameEn: "Expiry Date",
        value: "三年",
      },
    ],
    textList: [{
        value: "1.急救员电子证是由急救First Aid平台联合浙江大学红十字会提供的急救员身份识别电子产品。",
      },
      {
        value: "2. 所有者必须为急救First Aid平台用户。",
      },
      {
        value: "3. 急救员电子证只对急救First Aid平台的急救员身份认证提供帮助。",
      },
      {
        value: "4. 若您原先已有红十字会的急救员证， 您可通过提交申请来获取急救First Aid平台提供的急救员电子证。",
      }, 
      {
        value: "5. 若您目前暂未获得相关急救证， 您可以通过急救First Aid平台提供的红十字会急救员证考取途径考取。",
      }, 
      {
        value: "6. 只有拥有本急救员电子证的用户， 才可收到并响应附近需要急救人员的呼救讯息。",
      }, 
      {
        value: "7. 本急救员电子证最终解释权归急救First Aid平台所有。",
      },  
      
      
    ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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