// compoments/tt/tt.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    avatar:{
      type: String,
      value:"内容"
    },
    userName:{
      type: String,
      value:"李鹏海"
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    show: false,
    duration: 300,
    position: 'right',
    round: false,
    overlay: true,
    customStyle: '',
    overlayStyle: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    popup(e) {
      const position = e.currentTarget.dataset.position
      let customStyle = ''
      let duration = this.data.duration
      switch(position) {
        case 'top':
        case 'bottom': 
          customStyle = 'height: 30%;'
          break
        case 'right':
          break
      }
      this.setData({
        position,
        show: true,
        customStyle,
        duration
      })
    },
  
    exit() {
      this.setData({show: false})
      // wx.navigateBack()
    },
  
  
  

  }
})
