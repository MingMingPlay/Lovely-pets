const pubFunc = getApp().pubFunc
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgSrc: '/static/img/labuladuo.jpg',
    canvasHidden: true, // 控制画板显示隐藏的参数
    shareImgPath: '',
    screenWidth: '', //设备屏幕宽度
    FilePath: '', //头像路径
    screenRatio: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSysInfo()
  },
  // 获取用户设备信息，屏幕宽度
  getSysInfo() {
    const that = this
    // 将屏幕宽度/开发布局的像素
    wx.getSystemInfo({
      success: res => {
        console.log(res)
        that.setData({
          screenWidth: res.screenWidth,
          screenRatio: res.screenWidth/750
        })
      }
    })
  },
  // 获取相册授权
  getPhototAuth(callback) {
    console.log(this.data.screenRatio, 'screenRatio')
    var that = this
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success() {
              console.log('授权成功')
              callback && callback()
            },
            fail(err) {
              console.log(err, 'err')
            }
          })
        } else {
          callback && callback()
        }
      }
    })
  },
  // 发起保存图片
  saveImg() {
    console.log(this, 'this')
    this.getPhototAuth(() => {
      this.saveImgToPhotosAlbum()
    })
  },
  // 保存图片方法
  saveImgToPhotosAlbum() {
    const that = this;
    wx.showLoading({
      title: '保存中...',
    })
    //设置画板显示，才能开始绘图
    that.setData({
      canvasHidden: false
    })
    // 创建画板
    const context = wx.createCanvasContext('share')
    const unit = that.data.screenRatio

    const shopImg = that.data.imgSrc // 店铺图片|宠物图片
    const qrCode = that.data.imgSrc // 小程序二维码


    context.setFillStyle('#F5F5F5') //这里是绘制白底，让图片有白色的背景
    context.drawImage(shopImg, unit * 40, unit * 40, unit * 668, unit * 400) // 绘制 店铺图片|宠物图片


    //把画板内容绘制成图片，并回调 画板图片路径
    context.draw(false, function () {
      wx.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: unit * 750,
        height: unit * 1002,
        destWidth: unit * 750,
        destHeight: unit * 1002,
        canvasId: 'share',
        success: function (res) {
          that.setData({
            shareImgPath: res.tempFilePath
          })
          if (!res.tempFilePath) {
            wx.showModal({
              title: '提示',
              content: '图片绘制中，请稍后重试',
              showCancel: false
            })
          }
          console.log(that.data.shareImgPath)
          //画板路径保存成功后，调用方法吧图片保存到用户相册
          wx.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            //保存成功失败之后，都要隐藏画板，否则影响界面显示。
            success: (res) => {
              console.log(res)
              wx.hideLoading()
              that.setData({
                canvasHidden: true
              })
            },
            fail: (err) => {
              console.log(err)
              wx.hideLoading()
              that.setData({
                canvasHidden: true
              })
            }
          })
        }
      })
    })
  }
})