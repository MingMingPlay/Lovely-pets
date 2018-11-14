const pubFunc = getApp().pubFunc
Page({
  /**
   * 页面的初始数据
   */
  data: {
    petBirthday: '', // 宠物生日
    iconImg: '/static/img/labuladuo.jpg', // 添加上传图标
    // 照片视频数组
    photoList: [
      { name: '/static/img/labuladuo.jpg', type: 'au', id: 'p1' },
      { name: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400', type: 'vi', id: 'p2' },
      { name: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg', type: 'au', id: 'p3' }
    ]
  },
  // 选择宠物生日
  toPetModify(e) {
    if (!this.data.petBirthday) {
      const modifyType = e.currentTarget.dataset.type
      // const modifyValue = e.currentTarget.dataset.value
      // url: '/pages/pet-info-modify/index?type=' + modifyType + '&value=' + modifyValue + '&routePath=petAddGrow'
      const routePath = '/pages/pet-info-modify/index?routePath=petAddGrow&type=' + modifyType
      pubFunc.toNavigate(routePath)
    }
  },
  // 添加宠物经历
  addPetGrow() {
    const routePath = '/pages/pet-self-detail/index'
    pubFunc.toRedirect(routePath)
  },
  // 删除照片&视频
  deletePhoto(e) {
    const deleteIdx = e.detail
    this.data.photoList.splice(deleteIdx, 1)
    this.setData(this.data)
  },
  // 点击选择图片
  getPhoto() {
    pubFunc.selectPhoto((pathUrl) => {
      console.log(pathUrl)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 参数是否有宠物生日
    if (options.petBirthday) {
      this.setData({
        petBirthday: options.petBirthday
      })
    }
    // 编辑后的宠物属性接收
    if (options.nodifyObj) {
      const nodifyObj = JSON.parse(options.nodifyObj)
      this.data[nodifyObj.key] = nodifyObj.value
      this.setData(this.data)
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  }
})