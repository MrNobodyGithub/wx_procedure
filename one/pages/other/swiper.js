// pages/other/swiper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [

      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'https://opera.citymedia.cn/upload/portal/20181108/fd36b378ff718086a5807263f80bb534.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000
  },
  tapShowdots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  tapAutoPlay: function(e) {
    var that = this
    if (that.data.autoplay == true) {
      wx.showToast({
        title: 'hidden',
        duration:1000
      })
    } else { 
      wx.showToast({
        title: 'show',
        duration: 1000
      })
    }
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  changeInterval:function(e){
    this.setData({
      interval:e.detail.value
    })
  },
  changeDuration:function(e){
    this.setData({
      duration:e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    console.log("onload")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

    console.log("onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

    console.log("onshow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

    console.log("onhide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

    console.log("onunload")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

    console.log("onpulldownrefresh")
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

    console.log("share")
  }
})