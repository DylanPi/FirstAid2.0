var yangdate = require("../../utils/sign_in_ss");
// pages/sign_in/sign_in.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    signs: [1, 2, 3, 5, 6, 7],
    signtype: "1",
    signDays: [],
    // 年月日
    todayDate: "1",
    todayMonth: "",
    todayYear: "",
    nextMonth: "",
    nextYear: "",
    prevYear: "",
    prevMonth: "",
    seriesCount: "99",
    series_gos: "15",
    for_signs: "none",
    powerData: "0",
    todayss: '',
    timeList: [1, 2, 3, 4, 5, 6]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var getToday = new Date();
    var todayDate = getToday.getDate();
    var todayMonths = getToday.getMonth();
    var todayMonth = (todayMonths + 1);
    var todayYear = getToday.getFullYear();
    var todayss = getToday.getDate();
    if (todayMonth < 10) {
      var todayMonthss = "0" + todayMonth;
      var todayMonth = "0" + todayMonth;
    } else {
      var todayMonthss = todayMonth;
    }
    var godates = todayYear + "-" + todayMonthss + "-01";
    // console.log(godates)
    var that = this;
    var timeList = that.data.timeList
    console.log(timeList)
    var length = timeList.length;
    var data = {
      seriesCount: length,
      signDays: timeList
    };
    var $datas = data;
    var signDate_arr = new Array();
    var anns = $datas.signDays;
    var count_signday = $datas.seriesCount;
    if (count_signday > 9) {
      var series_gos = "0";
    } else if (count_signday < 0) {
      var series_gos = 99;
    } else {
      var series_gos = 10 - parseInt(count_signday);
    }
    that.setData({
      seriesCount: count_signday,
      series_gos: series_gos,
    });
    for (var p in anns) { //遍历json对象的每个key/value对,p为key
      var newdats = anns[p];
      signDate_arr.push(newdats);
    }
    if (signDate_arr.indexOf(todayss) > -1) {
      // console.log("当前已签到");
      that.setData({
        signtype: "2",
      });
    } else {
      // console.log("当前未签到");
      that.setData({
        signtype: "1",
      });
    }
    // console.log(signDate_arr[0]);
    yangdate.yang_date.bulidCal(todayYear, todayMonth, that, signDate_arr);
    //初始化加载日历
    this.setData({
      todayDate: todayDate,
      todayMonth: todayMonth,
      todayYear: todayYear,
      prevYear: todayYear,
      nextYear: todayYear,
      prevMonth: todayMonth,
      nextMonth: todayMonth,
      showYear: todayYear,
      showMonth: todayMonth,
      todayss: todayss
    });
  },

  sign_prev: function () {
    // 上一个月
    var showMonth = this.data.showMonth;
    //当前月份
    var todayMonth = this.data.todayMonth;
    if (showMonth == "01") {
      var showMonth = "12";
      var showYear = parseInt(this.data.showYear) - 1;
    } else {
      var showMonth = parseInt(this.data.showMonth) - 1;
      var showYear = this.data.showYear;
    }
    if (parseInt(todayMonth - 3) == showMonth) {
      wx.showToast({
        title: '不能查看更多了',
        icon: 'loading',
        duration: 1500
      });
      return;
    }
    var that = this;
    if (showMonth < 10) {
      var showMonths = "0" + showMonth;
    } else {
      var showMonths = showMonth;
    }
    var godates = showYear + "-" + showMonths + "-01";
    var timeList = that.data.timeList
    var $datas = {
      seriesCount: 1,
      signDays: timeList
    };
    var anns = $datas.signDays;
    var signDate_arr = [];
    for (var p in anns) { //遍历json对象的每个key/value对,p为key
      var newdats = anns[p];
      signDate_arr.push(newdats);
    }
    console.log(signDate_arr)
    // console.log(signDate_arr[0]);
    yangdate.yang_date.bulidCal(showYear, showMonths, that, signDate_arr);
    //初始化加载日历

    this.setData({
      showYear: showYear,
      showMonth: showMonths,
    });
  },
  sign_next: function () {
    // 下一个月
    var showMonth = this.data.showMonth;
    console.log(showMonth)
    //当前月份
    var todayMonth = this.data.todayMonth;
    if (todayMonth == showMonth) {
      wx.showToast({
        title: '未签到不能查看',
        icon: 'loading',
        duration: 1500
      });
      return;
    }
    if (showMonth == "12") {
      var showMonth = "1";
      var showYear = parseInt(this.data.showYear) + 1;
    } else {
      var showMonth = parseInt(this.data.showMonth) + 1;
      var showYear = this.data.showYear;
    }
    var that = this;
    if (showMonth < 10) {
      var showMonths = "0" + showMonth;
      console.log(showMonths)
    } else {
      var showMonths = showMonth;
    }
    var godates = showYear + "-" + showMonths + "-01";
    console.log(godates)
    var timeList = that.data.timeList
    var $datas = {
      seriesCount: 1,
      signDays: timeList
    };
    var signDate_arr = new Array();
    var anns = $datas.signDays;
    for (var p in anns) { //遍历json对象的每个key/value对,p为key
      var newdats = anns[p];
      signDate_arr.push(newdats);
    }
    // console.log(signDate_arr[0]);
    yangdate.yang_date.bulidCal(showYear, showMonths, that, signDate_arr);
    //初始化加载日历

    this.setData({
      showYear: showYear,
      showMonth: showMonths,
    });
  },
  // 状态为未签到
  sign_start: function () {
    var powerData = Math.ceil(Math.random() * 10);
    // 当天
    var todayss = this.data.todayss
    // timeList 数组
    var timeList = this.data.timeList
    var listBat = timeList.push(todayss);
    // console.log(append(timeList, todayss));
    this.onLoad();
    //签到成功后重新调用后台接口加载新的签到数据
    this.setData({
      for_signs: "block",
      signtype: "2",
      powerData: powerData,
      timeList: listBat
    });
    wx.showToast({
      title: '签到成功',
      icon: 'success',
      duration: 1500
    });
  },
  // 状态为已签到
  sign_end: function () {
    wx.showToast({
      title: '今日已经签到',
      icon: 'loading',
      duration: 1500
    });
  },
  // 隐藏遮罩层
  close_qdbox: function () {
    var seriesCount = this.data.seriesCount;

    if (seriesCount < 10) {
      var series_gos = 10 - seriesCount;
    } else {
      var series_gos = "0";
    }
    this.setData({
      seriesCount: seriesCount,
      series_gos: series_gos,
      for_signs: "none",
    });
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