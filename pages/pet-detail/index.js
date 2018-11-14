const pubFunc = getApp().pubFunc
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 宠物成长经历数组
    growList: [
      { id: 1, age: '0岁3个月17天', picArr: [
          { name: '/static/img/labuladuo.jpg', type: 'au', id: 'p1'}, 
          { name: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400', type: 'vi', id: 'p2'}
        ]
      },
      {
        id: 2, age: '1岁3个月17天', picArr: [
          { name: '/static/img/labuladuo.jpg', type: 'au', id: 'p11' },
          { name: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400', type: 'vi', id: 'p22' }
        ]
      },
    ],
    // 轮播图片视频数组
    imgUrls: [
      { name: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', type: 'au', id: 'p1'},
      { name: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', type: 'au', id: 'p2' },
      { name: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg', type: 'au', id: 'p3' },
      { name: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400', type: 've', id: 'p4' }
    ],
    indicatorDots: false, // 不现实指示点
    circular: true, // 循环滑动
    duration: 1000, // 切换时常
    swiperCurrent: 0, // swiperItem 脚标
    currentType: false, // 是否显示播放按钮
    videoContext: '', // 视频对象
    shareShowed: false, // 分享
  },
  // 分享海报
  createPoster() {
    console.log('poster')
    this.setData({
      shareShowed: false
    })
    const routePath = '/pages/poster-card/index'
    pubFunc.toNavigate(routePath)
  },
  // 点击按钮分享
  clickShare() {
    console.log('share btn')
    this.setData({
      shareShowed: false
    })
  },
  // 关闭分享弹框
  closeShareBox() {
    this.setData({
      shareShowed: false
    })
  },
  // 分享弹框
  sharePetInfo() {
    this.setData({
      shareShowed: true
    })
  },
  // 轮播切换
  swiperChange(e) {
    if (this.videoContext) {
      this.videoContext.pause()
      this.setData({
        videoContext: ''
      })
    }
    const eEvent = e.detail
    this.setData({
      swiperCurrent: eEvent.current,
      currentType: eEvent.currentItemId == 've' ? true : false
    })
  },
  // 视频播放
  playVedio() {
    const vedioId = this.data.imgUrls[this.data.swiperCurrent].id
    this.videoContext = wx.createVideoContext(vedioId)
    this.setData({
      currentType: false
    })
    this.videoContext.play()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 设置宠物详情页 title
    pubFunc.setPageTitle('147852')
    this.data.imgUrls[0].type == 've' ? this.setData({
      currentType: true
    }) : this.setData({
      currentType: false
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function (ops) {
    if (ops.from === 'button') {
      // 来自页面内转发按钮
      console.log(ops.target)
    }
    return {
      title: 'test',
      path: 'pages/index/index',
      success: function (res) {
        // 转发成功
        console.log("转发成功:" + JSON.stringify(res));
      },
      fail: function (res) {
        // 转发失败
        console.log("转发失败:" + JSON.stringify(res));
      }
    }
  }
})