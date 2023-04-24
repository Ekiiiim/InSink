// pages/party.js
Page({

  /**
   * Page initial data
   */
  data: {
    swiper: {
      current: 0,
      seats: [
        {
          occupied: true
        },
        {
          occupied: true
        },
        {
          occupied: true
        },
        {
          occupied: true
        },
        {
          occupied: false
        },
        {
          occupied: false
        }
      ]
    },
    seats: [
      {
        occupied: true
      },
      {
        occupied: true
      },
      {
        occupied: true
      },
      {
        occupied: true
      },
      {
        occupied: false
      },
      {
        occupied: false
      }
    ]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {
    
  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {
    
  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  },

  showDetail:function(e) {
    wx.showModal({
      title: '详情',
      content: '地址\n时间',
      showCancel: false
    })
  },

  share:function(e) {
    wx.showModal({
      title: '分享',
      content: '链接：\n二维码：',
      showCancel: false
    })
  },

  catchTouchMove:function() {
    return false;
  },

  swipeLeft:function() {
    var swiper = this.data.swiper;
    var current = swiper.current;
    swiper.current = current > 0 ? current - 1 : current;
    this.setData({
      swiper: swiper,
    })
  },
  swipeRight:function() {
    var swiper = this.data.swiper;
    var current = swiper.current;
    swiper.current = current < (swiper.seats.length - 1) ? current + 1 : current;
    this.setData({
      swiper: swiper,
    })
  }
})