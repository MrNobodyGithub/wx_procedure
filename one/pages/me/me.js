// pages/me/me.js

var initzdata = "init data"
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    text: initzdata
  },
  btn_action_request_data: function() {
    console.log(app.globalData.api)
    
    var that = this
    wx.request({
      url: app.globalData.api + 'api/home/index/ios_version',
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data),
          console.log(res.data["data"]),
          // that.setData({
          //   text: res.data["data"]
          // })
          that.myFunc(res.data["data"],res.data["msg"])

      }
    })
  },

  myFunc : function(e,v){
    var that = this
    that.setData({
      text : e + v
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})