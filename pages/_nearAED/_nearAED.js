// pages/_nearAED/_nearAED.js
const chooseLocation = requirePlugin('chooseLocation');
Page({
  data: {
    latitude:30.309002,
    longitude:120.0863, //默认定位纬度  
    address: "",
    locationName: "",
    endlocationname:"",
    startAddressInfo: {
      latitude:'',
      longitude:'',
       },  
    endAddressInfo: {
      address:"",
      latitude:'',
      longitude:'',
      name:"",
    },  
    markers: [
    //西1A教学楼309教室门口
    {
      id: 0,
      iconPath: "http://m.qpic.cn/psc?/V54bWup343bG3t0Ty4ml3HojDo1xDLjP/45NBuzDIW489QBoVep5mcTED901L2YfuqRxWFBbn6CcC0CfRYW8fq*TMyRNJwemLmeivUdZOuIq2XRPAhGYDcMqkKJFeSVMbrxaUIzXPzXA!/b&bo=OAQUBQAAAAADFx8!&rf=viewer_4",
      latitude:30.30230699708563,
      longitude:120.08522197986605,
      title:"西1A教学楼309教室门口",
      width: 20,  //图片显示宽度
      height: 25  //图片显示高度
    },
      //东1B123教室附近
      {
        id: 1,
        iconPath: "http://m.qpic.cn/psc?/V54bWup343bG3t0Ty4ml3HojDo1xDLjP/45NBuzDIW489QBoVep5mcTED901L2YfuqRxWFBbn6CcC0CfRYW8fq*TMyRNJwemLmeivUdZOuIq2XRPAhGYDcMqkKJFeSVMbrxaUIzXPzXA!/b&bo=OAQUBQAAAAADFx8!&rf=viewer_4",
        latitude: 30.302163420305035,
        longitude: 120.08945182348253,
        title:"东1B123教室附近",
        width: 20,
        height: 25
      },
    ]
  },

  getAEDlocatation:function(e,data)
  {
  console.log(e.detail.markerId)
  console.log(this.data.markers[0])
  const location_ = chooseLocation.getLocation();
  this.setData({
   'endAddressInfo.latitude':this.data.markers[e.detail.markerId].latitude,   
   'endAddressInfo.longitude':this.data.markers[e.detail.markerId].longitude,     
   'endAddressInfo.address':this.data.markers[e.detail.markerId].title,     
   'endAddressInfo.name':this.data.markers[e.detail.markerId].title, 
   endlocationname:this.data.markers[e.detail.markerId].title,    
  })
  console.log(this.data.endAddressInfo)
  

  },
    //显示地图
    showMap() {
      //使用在腾讯位置服务申请的key（必填）
      const key = "U67BZ-62H32-4NIUO-CSHUW-HQPFS-6KBMG"; 
      //调用插件的app的名称（必填）
      const referer = "First Aid"; 
      wx.navigateTo({
          url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer
      });
  },
  _handleSubmit: function(e) {

    console.log("开始导航", e);
    let plugin = requirePlugin('routePlan');
    const key = "U67BZ-62H32-4NIUO-CSHUW-HQPFS-6KBMG"; //使用在腾讯位置服务申请的key
    const referer = "First Aid";  //调用插件的app的名称
    let endPoint = this.data.endAddressInfo;
    endPoint = JSON.stringify(endPoint);
    let startPoint = this.data.startAddressInfo;
    startPoint = JSON.stringify(startPoint);
    console.log("==startPoint---", startPoint);
    let mode=this.data.mode;
    if (startPoint=='null') {
      console.log("进来了");
      wx.navigateTo({
        url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint + '&navigation=1' + '&mode=' + mode
      })
    } else {
      wx.navigateTo({
        url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint + '&startPoint=' + startPoint + '&navigation=1'+'&mode=' + mode
      });
    }
  },
 
  onShow: function () {
    // 从地图选点插件返回后，在页面的onShow生命周期函数中能够调用插件接口，取得选点结果对象
    // 如果点击确认选点按钮，则返回选点结果对象，否则返回null
    const location = chooseLocation.getLocation();
    console.log("location",location);
    if(location){
        this.setData({
            address: location.address?location.address : "",
            locationName: location.name?location.name : "",
            startAddressInfo: location
        });
    }
},
  onReady: function () {
 
  }
})