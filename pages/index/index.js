//index.js
const pubFunc = getApp().pubFunc
const $http = getApp().$http
const $apis = getApp().$apis
Page({
  data: {
    // 能否点击按钮进行授权
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    // 宠物列表
    petList: [
      { id: '1', name: '拉布拉多', age: '1岁5个月', sex: 1, number: 'JM147' },
      { id: '2', name: '金毛', age: '2岁1个月', sex: 0, number: 'JM7891' },
      { id: '3', name: '雪拉瑞', age: '0岁3个月', sex: 2, number: 'OK14852' },
      { id: '4', name: '哈士奇', age: '5岁', sex: 1, number: 'PM1456' },
    ],
    // 店铺信息
    shopInfo: {
      mobile: '15122223333',
      wx: 'ppp666666666',
      shopName: '德玛西亚',
      shopAddr: '床前明月光，疑是地上霜，去头望明月，低头思故乡'
    },
    showed: false, // 是否显示店铺信息弹框
    shareShowed: false, // 是否显示分享底部弹框
    userInfo: '' // 用户信息
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
  shareShopInfo() {
    this.setData({
      shareShowed: true
    })
  },
  // 关闭宠物家弹框
  closeShopBox() {
    this.setData({
      showed: false
    })
  },
  // 查看宠物家信息
  showShopBox() {
    this.setData({
      showed: true
    })
  },
  // 跳转到宠物详情
  toPetDetail(event) {
    const petId = event.detail.petId
    const routePath = '/pages/pet-detail/index'
    pubFunc.toNavigate(routePath)
  },
  // 跳转到宠物列表
  toPetList() {
    const routePath = '/pages/pet-list/index'
    pubFunc.toNavigate(routePath)
  },
  // 上拉刷新宠物列表
  onReachBottom: function () {
    const that = this
    // 显示加载图标
    pubFunc.setShowLoading('玩命加载中')
    setTimeout(() => {
      const arr = [
        { id: '1', name: '拉布拉多', age: '1岁5个月', sex: 1, number: 'JM147' },
        { id: '2', name: '金毛', age: '2岁1个月', sex: 0, number: 'JM7891' },
        { id: '3', name: '雪拉瑞', age: '0岁3个月', sex: 2, number: 'OK14852' },
        { id: '4', name: '哈士奇', age: '5岁', sex: 1, number: 'PM1456' },
      ]
      that.setData({
        petList: that.data.petList.concat(arr)
      })
      // 隐藏加载框
      wx.hideLoading();
    }, 2000)
  },
  //分享按钮函数
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
  },
  onLoad() {
    // 从本地获取用户信息
    if (wx.getStorageSync('userDataInfo')) {
      const userDataInfo = JSON.parse(wx.getStorageSync('userDataInfo'))
      this.setData({
        userInfo: userDataInfo
      })
    }
  }
})