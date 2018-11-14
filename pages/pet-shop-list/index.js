const pubFunc = getApp().pubFunc
Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo: '', // 用户信息
    // 店铺列表信息
    shopList: [
      { id: '1', name: '噜啦宠物店one', visitedTime: '2018-09-11 11:37:40' },
      { id: '2', name: '噜娜宠物店two', visitedTime: '2018-09-11 19:19:19' },
      { id: '1', name: '噜啦宠物店one', visitedTime: '2018-09-11 11:37:40' },
      { id: '2', name: '噜娜宠物店two', visitedTime: '2018-09-11 19:19:19' }
    ]
  },
  onLoad: function () {
    // 从本地获取用户信息
    if (wx.getStorageSync('userDataInfo')) {
      const userDataInfo = JSON.parse(wx.getStorageSync('userDataInfo'))
      this.setData({
        userInfo: userDataInfo
      })
    }
  },
  // 获取用户信息
  getUserDataInfo(e) {
    if (e.detail.userInfo) {
      const userDataInfo = e.detail.userInfo
      wx.setStorageSync('userDataInfo', JSON.stringify(userDataInfo))
      this.setData({
        userInfo: userDataInfo
      })
      pubFunc.showToastMsg('登录成功')
    } else {
      pubFunc.showToastMsg('登录失败，请重新登录')
    }
  },
  // 跳转宠物店详情
  toShopDetail(event) {
    if (event.detail.shopId) {
      const shopId = event.detail.shopId
    }
    if (this.data.userInfo) {
      const routePath = '/pages/index/index'
      pubFunc.toNavigate(routePath)
    } else {
      pubFunc.showToastMsg('请先授权登陆')
    }
  },
  // 上拉刷新宠物店列表
  onReachBottom: function () {
    const that = this
    // 显示加载图标
    pubFunc.setShowLoading('玩命加载中')
    setTimeout(() => {
      const arr = [
        { id: '1', name: '噜啦宠物店one', visitedTime: '2018-09-11 11:37:40' },
        { id: '2', name: '噜娜宠物店two', visitedTime: '2018-09-11 19:19:19' }
      ]
      that.setData({
        shopList: that.data.shopList.concat(arr)
      })
      // 隐藏加载框
      wx.hideLoading();
    }, 2000)
  }
})