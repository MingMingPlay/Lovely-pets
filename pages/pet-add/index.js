const pubFunc = getApp().pubFunc
Page({
  /**
   * 页面的初始数据
   */
  data: {
    petType: '', // 宠物品种
    petBirthday: '', // 宠物生日
    petSex: '0', // 宠物性别
    petWeight: '', // 宠物体重
    petPhotos: '', // 宠物照片视频
  },
  // 跳转到选择宠物属性页
  toPetModify(e) {
    const modifyType = e.currentTarget.dataset.type
    const modifyValue = e.currentTarget.dataset.value
    const routePath = '/pages/pet-info-modify/index?type=' + modifyType + '&value=' + modifyValue + '&routePath=addPet'
    pubFunc.toRedirect(routePath)
  },
  // 添加宠物
  addPet() {
    const routePath = '/pages/pet-list/index'
    pubFunc.toRedirect(routePath, () => {
      wx.removeStorageSync('petsDataInfo')
    })
  },
  // 跳转到照片视频上传
  toPetPhotos() {
    const routePath = '/pages/pet-photo-video/index'
    pubFunc.toNavigate(routePath)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 宠物基本信息加载
    if (wx.getStorageSync('petsDataInfo')) {
      this.setData(JSON.parse(wx.getStorageSync('petsDataInfo')))
    }
    if (options.nodifyObj) {
      const nodifyObj = JSON.parse(options.nodifyObj)
      this.data[nodifyObj.key] = nodifyObj.value
      // 缓存宠物基本信息
      wx.setStorageSync('petsDataInfo', JSON.stringify(this.data))
      this.setData(JSON.parse(wx.getStorageSync('petsDataInfo')));
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  }
})