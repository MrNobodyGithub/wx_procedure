
// pages/other/refresh.js

var page = 1;
var arr = [];
Page({
  /**
   * 页面的初始数据
   */
  data: {
    dataArr:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { 
    this.requestData()
  },
  requestData:function(){
    let str = "loading";
    if (page > 1){
      str = " 上啦 loading";
    }
    wx.showLoading({
      title: str,
    })
    var that = this
    wx.request({
      url: 'https://opera.citymedia.cn/api/home/video/index',
      data:{
        p:page
      } , 
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res)

        if (arr.length == 0){ 
          that.setData({
            dataArr: res.data["data"]
          })
        } else { 
          that.setData({
            dataArr :  that.data.dataArr.concat(res.data["data"])
          }) 
        }
        arr = that.data.dataArr 
      },
      fail: function(res) {},
      complete: function(res) {
        wx.hideLoading()
      },
    })
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
    page = 1
    this.requestData()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    page = page + 1 
    this.requestData()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})