const pubFunc = getApp().pubFunc
Page({
  /**
   * 页面的初始数据
   */
  data: {
    saleChecked: false, // 宠物在售状态 0
    desChecked: true, // 是否显示介绍 1
    growChecked: true, // 是否展示成长经历 2
    petType: '拉布拉多', // 宠物品种
    petBirthday: '2018/10/18', // 宠物生日
    petSex: '1', // 宠物性别
    petWeight: '5.0', // 宠物体重
    petPhotos: '5', // 宠物照片视频
    petDes: '这是一只小家伙，很是可爱，吃得多，睡的香', // 宠物介绍
    petSortDes: '', // 介绍过长处理
    petGrows: ['2018/11/18', '2018/12/18'], // 宠物成长经历
  },
  // switch 开关切换
  checkChange(e) {
    const checkKey = e.currentTarget.dataset.type
    const checkValue = e.detail
    checkKey == '0' ? this.setData({ saleChecked: checkValue})
      : checkKey == '1' ? this.setData({ desChecked: checkValue })
      : this.setData({ growChecked: checkValue })
  },
  // 添加成长经历
  addPetGrow(e) {
    let routePath = '/pages/pet-add-grow/index'
    if (e.currentTarget.dataset.value) {
      routePath +='?petBirthday=' + e.currentTarget.dataset.value
    }
    pubFunc.toNavigate(routePath)
  },
  // 跳转宠物信息修改页面
  toPetModify(e) {
    const modifyType = e.currentTarget.dataset.type
    const modifyValue = e.currentTarget.dataset.value
    const routePath = '/pages/pet-info-modify/index?type=' + modifyType + '&value=' + modifyValue + '&routePath=petSelfDetail'
    pubFunc.toRedirect(routePath)
  },
  // 跳转宠物照片视频
  toPetPhotos() {
    const routePath = '/pages/pet-photo-video/index'
    pubFunc.toNavigate(routePath)
  },
  // 介绍过长处理
  dealPetDes() {
    if (this.data.petDes.length > 7) {
      const petSortDes = this.data.petDes.substr(0, 7) + '...'
      this.setData({
        petSortDes: petSortDes
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 宠物基本信息加载
    if (wx.getStorageSync('petDataInfo')) {
      this.setData(JSON.parse(wx.getStorageSync('userDataInfo')))
    }
    // 设置 title
    pubFunc.setPageTitle('PMj147')
    // 编辑后的宠物属性接收
    if (options.nodifyObj) {
      const nodifyObj = JSON.parse(options.nodifyObj)
      this.data[nodifyObj.key] = nodifyObj.value
      // 缓存宠物基本信息
      wx.setStorageSync('petDataInfo', JSON.stringify(this.data))
      this.setData(JSON.parse(wx.getStorageSync('petDataInfo')))
    }
    this.dealPetDes()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },
})