// components/popup.js
Component({
  options:{
    multipleSlots:true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type: String,
      value:"标题"
    },
    content:{
      type: String,
      value:"内容"
    },
    btn_ok:{
      type: String,
      value:"确定"
    },
    btn_cancel:{
      type: String,
      value:"取消"
    },
    btn_ok_url:{
      type:String,
      value:""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    flag:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    hidePopup:function(){
      this.setData({
        flag:!this.data.flag
      })
    },
    showPopup(){
      this.setData({
        flag:!this.data.flag
      })
    },
    _success(){
      this.triggerEvent("success");
    },
    _cancel(){
      this.triggerEvent("cancel");
    },
  }
})
