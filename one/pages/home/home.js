const app = getApp()
var page = 1;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    slider: [{}],
    album:[{},{},{}],
    list:[{}]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    this.requestData()
  }, 
  requestData: function() { 
    // 戏曲库-> 视频
    // https://opera.citymedia.cn/api/home/video/index

    wx.showNavigationBarLoading()
    var that = this
    wx.request({
      // success complete  先掉 成功失败 再掉完成
      url: app.globalData.url + 'api/home/recommend/index',
      // url: 'https://opera.citymedia.cn/api/home/video/index',
      data:{
        page : page
      },
      header: {
        'content-type': 'application/json' // 默认值
      }, 
      success(res) { 
        console.log('------------------')
        console.log(res.data["data"]), 
        that.setData({
          slider: res.data["data"]["slide"],
          album : res.data["data"]["album"]
          // list:res.data[]
        })
      },
      fail: function() {
        console.log("fail")
      },
      complete: function () {
        console.log("complete")
      },
    })
    wx.hideNavigationBarLoading()
    wx.stopPullDownRefresh()
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
    console.log("onPullDownRefresh")
    this.requestData()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    page = page+1
    // this.requestData()
    console.log("page" + page)

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})