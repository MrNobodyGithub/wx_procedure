// pages/home/home.js
var initdata = "init data"
// "wxml 读取 js 中的变量的值"
var dataArr = []
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // text
    text: initdata,
    // icon
    iconSize: [20, 30, 40, 50, 60, 70],
    iconType: [
      'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
    ],
    iconColor: [
      'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
    ]

  },
  tapRefresh : function(){
    wx.navigateTo({
      url: '/pages/other/refresh',
    })
  }
  ,
  tapToSwipe: function () {
    wx.navigateTo({
      url: '/pages/other/swiper?title=第二种跳转方式携带参数_two',
    })
  }
  ,
  add: function () {
    dataArr.push('add new line')
    this.setData({
      text: initdata + '\n' + dataArr.join('\n')
    })
  },
  remove: function () {
    dataArr.pop()
    this.setData(
      {
        text: initdata + '\n' + dataArr.join('\n')
      }
    )
  } ,
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