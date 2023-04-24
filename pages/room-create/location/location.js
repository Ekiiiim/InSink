Page({

  /**
   * Page initial data
   */
  data: {

  },

  tabIndex: 0,
  markerImgIndex: 0,
  calloutAlignIndex: 1,
  calloutBorderColorIndex: 3,
  calloutBorderWidthIndex: 1,
  calloutPaddingIndex: 0,
  showColorActionsheet: false,
  showBorderColorActionsheet: false,
  showBgColorActionsheet: false,
  showRadius: true,
  scale: 15,

  location: {
    latitude: 40.040415,
    longitude: 116.273511
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

  toParty:function() {
    wx.redirectTo({
      url: '../../party/party',
    })
  }
})