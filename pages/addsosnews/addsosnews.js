// pages/addsosnews/addsosnews.js
var tools = require('../../utils/tools.js')
import * as LC from '../../libs/lc.min';
const AV = require('../../libs/av-core-min');
import bind from '../../utils/live-query-binding';



// const avweapp = require('../../libs/av-weapp-min');
Page({

  soses:[],
  

  /**
   * 页面的初始数据
   */
  data: {
    soses:[],
   
    
    show:false,
    longitude:'',
    latitude:'',
    time:'',
    user:'',
    
  },

  jumppage_yijian120:function(){
    wx.navigateTo({
      url: '/pages/__yijian120/__yijian120',
    })
  },
 
  setSoses: function (soses) {
    
    this.soses = soses;
    const activeCount = soses.filter(sos => !sos.data.done).length;
    this.setData({     
      activeCount,
      soses: soses.map(sos => sos.toJSON()),
    });
  },

 /*getuser() {
    const currentUser = LC.User.current();
    const user=currentUser.objectId;    
    return user;
  },*/
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
  
  /*ishujiu() {
    const { soses } = this;  
    console.log(this.getuser())
    const currentSos = soses.filter(sos=> sos.user_id === this.getuser())[0];
    console.log('1110',currentSos)
    if(currentSos){
      this.setData({
        show:true
      })
     
    }
  },*/
  endhujiu: async function () {
    const { soses } = this;
    const user_=AV.User.current()
   
    const currentSos = soses.filter(sos => sos.data.user_id ===user_.id)[0];
    currentSos.data.done = !currentSos.data.done;
    console.log('1',currentSos)
    await currentSos.update({ done: currentSos.data.done });
    this.setSoses(soses);
    this.setData({
      show:false
    })
  },


  addSos: async function () { 
    const { soses } = this; 
    const user_= AV.User.current()  
    console.log(user_)
      
    const currentSos = soses.filter(sos => sos.data.user_id===user_.id)[0];
    
    console.log('0',currentSos)
    if(currentSos){
    if(!currentSos.data.done){
      this.setData({
        show:true,
      })
      wx.showToast({
        title: '已跳转上次呼救',             
      })
      return
    }
  }

 
  console.log(user_.createdAt)
   this.setData({
    
    time: tools.formatTime(new Date),
    user: user_.id

   })
   console.log('1')
    const sos = await LC.CLASS('Sos')  
  
      .add({
        content: user_.attributes.nickName,
        done: false,  
        url:user_.attributes.avatarUrl,    
       
        location:[this.data.latitude,this.data.longitude],     
        createdtime:this.data.time,
        user_id:user_.id

      });
   
    this.setSoses([sos, ...this.soses]);  
      
    this.setData({        
      show: true,      
    }) 
  }, 
 
 
  onReady: function() {   
   this.fetchSosnews();   
      wx.getLocation({
        type: 'wgs84',
        success: (res)=> {
          
         console.log(res)        
         this.setData({
           latitude:res.latitude,
           longitude:res.longitude
         })             
         
        }
      })
    
     
 
     
          
       
      
  },
  onUnload: function() {
    this.unbind();
    this.subscription.unsubscribe();
  },


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

 
})