const pubFunc = getApp().pubFunc
Page({
  /**
   * 页面的初始数据
   */
  data: {
    petPhotoMax: '5', // 允许上传的最大数量
    petPhtots: '2', // 已经上传了的数量
    // 已有照片视频数组
    photoList: [
      { name: '/static/img/labuladuo.jpg', type: 'au', id: 'p1' }, 
      { name: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400', type: 'vi', id: 'p2' },
      { name: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400', type: 'vi', id: 'p2' }
    ]
  },
  // 添加照片或视频
  toAddPetPhoto() {
    const routePath = '/pages/pet-add-grow/index'
    pubFunc.toNavigate(routePath)
  },
  // 删除指定照片视频
  deletePhoto(e) {
    const deleteIndex = e.detail
    this.data.photoList.splice(deleteIndex, 1)
    this.setData(this.data)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  }
})