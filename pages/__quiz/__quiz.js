// pages/__quiz/__quiz.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curring:-1,
    detail: [
      {
        id: '1', title: '海姆立克急救法婴幼儿拍击次数？',answer:'2',array: [
          { name: "1~2次", usname: false }, { name: '3~4次', usname: false },
          { name: '5~6次', usname: false }, { name: '/', usname: false },
        ]
      },
      {
        id: '2', title: '溺水者被救起后，如果意识清醒必须立刻排水', answer: '1', array: [
          { name: '正确', usname: false }, { name: '错误', usname: false },
          { name: '/', usname: false }, { name: '/', usname: false },
        ]
      },
      {
        id: '3', title: '问题三', answer: '4', array: [
          { name: '错误答案', usname: false }, { name: '错误答案', usname: false },
          { name: '错误答案', usname: false }, { name: '正确答案', usname: false },
        ]
      },
      {
        id: '4', title: '问题四', answer: '3',  array: [
          { name: '错误答案', usname: false }, { name: '错误答案', usname: false },
          { name: '正确答案', usname: false }, { name: '错误答案', usname: false },
        ]
      },
    ],
    number: 0,
    answer:0,
  },
  previous:function(e){
    this.setData({
      number: this.data.number-1,
      curring: this.data.curring-1,
    })
  },
  radioChange:function(e){
    let index = e.currentTarget.dataset.index
    let id = e.currentTarget.dataset.id
    let detail = this.data.detail
    for(let i = 0;i<detail.length;i++){
      if(detail[i].id == id){
        detail[i].array[index].usname = true
        for(let j = 0;j<detail[i].array.length;j++){
          if (j != index){
            detail[i].array[j].usname = false
          }
        }
      }
    }
    this.setData({
      detail:detail
    })
  },
  nextstep:function(e){
    let detail = this.data.detail
    let number = this.data.number
    let curring = this.data.curring
    let usname = 0;
    for(let i = 0;i<detail[number].array.length;i++){
      if(!detail[number].array[i].usname){
        usname++
      }
    }
    if(usname == detail[number].array.length){
      wx.showToast({
        title: '答题选项不能为空',
        icon: 'none',
        duration: 2000
      })
      return false;
    }
    curring++
    number++
    if (curring > 3){
      curring = -1
    }
    this.setData({
      curring: curring,
      number: number,
    })
  },
  subsic:function(e){
    let detail = this.data.detail
    let answer = 0
    let letter = ''
    for(let i = 0;i < detail.length;i++){
      for(let j = 0;j < detail[i].array.length;j++){
        if(detail[i].array[j].usname){
          letter = detail[i].answer-1
          if(letter == j){
            answer++
          }
        }
      }
    }
    if(answer > 3){
      wx.showToast({
        title: '您答对了:' + answer + '题。' + "恭喜您，成功通过心肺复苏的习题测试！您可以继续去温习急救操作或是观看学习视频",
        icon: 'none',
        duration: 4000
      })
    }
    if(answer < 4){
      wx.showToast({
        title: '您答对了:' + answer + '题。' + "很遗憾，您没能通过心肺复苏的习题测试。您可以继续去温习急救操作或是观看学习视频",
        icon: 'none',
        duration: 4000
      })
    }
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