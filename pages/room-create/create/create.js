// pages/create/create.js
Page({

  /**
   * Page initial data
   */
  data: {
    partyTypes: [
      {
        name: "card"
      },
      {
        name: "relax"
      },
      {
        name: "drink"
      },
      {
        name: "social"
      },
      {
        name: "sport"
      }
    ],
    pplCount: [
      {
        text: "2-4"
      },
      {
        text: "4-8"
      },
      {
        text: "8-13"
      },
      {
        text: "13+"
      }
    ],
    periods: [
      {
        period: "上午"
      },
      {
        period: "下午"
      },
      {
        period: "晚上"
      },
      {
        period: "后半夜"
      },
      {
        period: "全天"
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

  toTime:function() {
    wx.navigateTo({
      url: '../time/time',
    })
  }
})