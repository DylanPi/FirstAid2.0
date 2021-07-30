const app = getApp();
wx.cloud.init({
  env: app.globalData.env,
  traceUser: true,
})
const db = wx.cloud.database();
const _ = db.command;
const cloudpath = app.globalData.cloudpath

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  /*显示的格式用‘-’隔开 */
  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}


module.exports = {
  formatTime: formatTime,
}
