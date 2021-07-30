// components/tabsslocation/tabsslocation.js
const chooseLocation = requirePlugin('chooseLocation');
Component({
  /**
   * 组件的属性列表
   */



  
  properties: {
 
  },

  /**
   * 组件的初始数据
   */
  data: {
    address: "",
    locationName: ""   

  },

  /**
   * 组件的方法列表
   */
  
  methods: {

  //显示地图
  showMap() {
      //使用在腾讯位置服务申请的key（必填）
    
      const key = "TMRBZ-5FQ3J-KHYFX-FK7U4-3YI77-ADB7J"; 
      //调用插件的app的名称（必填）
      const referer = "First Aid__"; 
      wx.navigateTo({
          url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer
      });  
      
     
  },

  },
  pageLifetimes: {
  show: function () {
    // 从地图选点插件返回后，在页面的onShow生命周期函数中能够调用插件接口，取得选点结果对象
    // 如果点击确认选点按钮，则返回选点结果对象，否则返回null
    const location = chooseLocation.getLocation(); 
    
    console.log("location",location);
    if(location){
        this.setData({
            address: location.address?location.address : "",
            locationName: location.name?location.name : ""
        });
    }
},
  }
  
  
})
