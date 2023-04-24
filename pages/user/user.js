// pages/user/user.js
Page({

  /**
   * Page initial data
   */
  data: {
    list: [
      {
        id: 'rooms',
        name: '我的房间',
        open: true,
      },
      {
        id: 'settings',
        name: '用户设置',
        open: true,
        pages: ['example1', 'example2', 'example3']
      },
      {
        id: 'about',
        name: '关于我们',
        open: false,
        pages: [
          'who',
          'what & how'
        ]
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

  }
})