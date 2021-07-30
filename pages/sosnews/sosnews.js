// pages/sosnews/sosnews.js
const chooseLocation = requirePlugin('chooseLocation');
const AV = require('../../libs/av-core-min');
import * as LC from '../../libs/lc.min';
import bind from '../../utils/live-query-binding';

Page({
  soses:[],

  /**
   * 页面的初始数据
   */
  data: {
    show:false,
    soses:[],
    sos_:[],
 
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
  },
  //
  //page-container 弹出
  xiangqing(e){
    const sos=e.currentTarget.dataset.sos    
    this.setData({
        
      show: true,
      sos_:[{
        iconPath:sos.url,
        latitude:sos.location[0],
        longitude:sos.location[1],
        number:sos.response,
        lable:sos.createdtime,
        title:sos.content,
        width: 20,  //图片显示宽度
        height: 25  //图片显示高度
      }  
    ]
        
      
    })
    this.setData({
      'endAddressInfo.latitude':sos.location[0],   
      'endAddressInfo.longitude':sos.location[1],     
      'endAddressInfo.address':sos.content,     
      'endAddressInfo.name':sos.content,
      endlocationname:sos.content,     
     })
    
    console.log(e.currentTarget.dataset.sos)
    console.log(e.currentTarget.dataset.sos.createdAt)
    
  },
   exit() {
      this.setData({show: false})
      // wx.navigateBack()
    },
 


  fetchSosnews: async function () {
    const query = LC.CLASS('Sos')    
    .orderBy('createdAt', 'desc');          
    const soses = await query.find();
    this.setSoses(soses);
    const subscription = await query.subscribe();
    if (this.unbind) this.unbind();
    this.subscription = subscription;
    this.unbind = bind(subscription, soses, this.setSoses.bind(this));    
  },  

  //响应呼救函数
  hujiuresponse: async function ({ target: { dataset: { id } } }) {
    const { soses } = this;
    const currentSos = soses.filter(sos => sos.id === id)[0];
    console.log(currentSos) 
    const userid=AV.User.current().id
    const responseman=currentSos.data.responseman
    if(responseman.indexOf(userid)>-1){
      wx.showToast({
        title: '请勿重复响应',
        icon:'error',
      })
      return
    }
    else{
    responseman.push(userid)  
    /*console.log(responseman) 
    console.log(currentSos.data.responseman)*/
    currentSos.data.response = currentSos.data.response+1;
    await currentSos.update({ response: currentSos.data.response });
    await currentSos.update({ responseman: currentSos.data.responseman });
    this.setSoses(soses);
  }
  },

  onReady: function() {  
    this.fetchSosnews()   
  },
  //不能删除！！！
  onUnload: function() {
    this.unbind();
    this.subscription.unsubscribe();
  },


  setSoses: function (soses) {
    this.soses = soses;
    const activeCount = soses.filter(sos => !sos.data.done).length;
    this.setData({
      activeCount,    
      soses: soses.map(sos => sos.toJSON()),
    });
    console.log('3',activeCount)  
     
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
  const key = 'U67BZ-62H32-4NIUO-CSHUW-HQPFS-6KBMG'; //使用在腾讯位置服务申请的key
  const referer = 'First Aid'; //调用插件的app的名称
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
})

