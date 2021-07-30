// pages/_guidance/_guidance.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    guideList: [{
        id: 1,
        name: "心肺复苏",
        imgsrc: "../../img/1_CPR.png",
      },
      {
        id: 2,
        name: "复苏体位",
        imgsrc: "../../img/2_Recovery_position.png",
      },
      {
        id: 3,
        name: "窒息",
        imgsrc: "../../img/3_Asphyxia.png",
      },
      {
        id: 4,
        name: "施救须知",
        imgsrc: "../../img/4_Rescue_information.png",
      },
      {
        id: 5,
        name: "生命迹象识别",
        imgsrc: "../../img/5_Identification_of_vital_signs.png",
      },
      {
        id: 6,
        name: "人工呼吸",
        imgsrc: "../../img/6_artificial_respiration.png",
      },
      {
        id: 7,
        name: "胸外心脏按压",
        imgsrc: "../../img/7_closed_cardiac_massage.png",
      },
      {
        id: 8,
        name: "现场止血",
        imgsrc: "../../img/8_hemostasis.png",
      },
      {
        id: 9,
        name: "现场包扎",
        imgsrc: "../../img/9_bind_up.png",
      },
      {
        id: 10,
        name: "骨折固定",
        imgsrc: "../../img/10_fracture_fixation.png",
      },
      {
        id: 11,
        name: "搬运伤病员",
        imgsrc: "../../img/11_Carrying_the_sick_and_wounded.png",
      },
      {
        id: 12,
        name: "拉伤扭伤",
        imgsrc: "../../img/12_Strain_sprain.png",
      },
      {
        id: 13,
        name: "四肢骨折",
        imgsrc: "../../img/13_limb_fracture.png",
      },
      {
        id: 14,
        name: "头部软组织损伤",
        imgsrc: "../../img/14_Soft_tissue_injury_of_the_head.png",
      },
      {
        id: 15,
        name: "颅脑损伤",
        imgsrc: "../../img/15_craniocerebral_injury.png",
      },
      {
        id: 16,
        name: "脊柱损伤",
        imgsrc: "../../img/16_injury_of_spine.png",
      },
      {
        id: 17,
        name: "心脏病发作",
        imgsrc: "../../img/17_heart_attack.png",
      },
      {
        id: 18,
        name: "脑中风",
        imgsrc: "../../img/18_Stroke.png",
      },
      {
        id: 19,
        name: "休克",
        imgsrc: "../../img/19_Shock.png",
      },
      {
        id: 20,
        name: "食物中毒",
        imgsrc: "../../img/20_bromatoxism.png",
      },

    ]
  },

  /**
   *  
   */
  showDetails: function (e) {
    var Turnto;
    Turnto = e.target.dataset.itemname;

    wx.navigateTo({
      url: '../_guidanceTo/_guidanceTo?' + 'guideName=' + Turnto,

    });
  },

  /**
   *搜索函数 
   */
  searchGuide: function (e) {
    console.log(e);
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