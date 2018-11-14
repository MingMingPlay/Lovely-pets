"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
class CommonFunc {
  constructor() {
    this.Bucket = 'm7-wd-1255960904'
    this.Region = 'ap-chengdu'
    this.auth = 'q-sign-algorithm=sha1&q-ak=AKIDIA8042HRynGC3h1nQlI5QcxI6A7pDHVI&q-sign-time=1542103763;1542104363&q-key-time=1542103763;1542104363&q-header-list=&q-url-param-list=&q-signature=e89086f35bff027e50a8a0f26ba3ad4d92ab7878'
    this.xToken = 'c0485beb3ed4dc31e52058ffa87a6ce776785c0930001'
  }
  // 设置页面 title
  setPageTitle(newTitle) {
    wx.setNavigationBarTitle({
      title: newTitle
    })
  }
  // total 消息提示
  showToastMsg(msg, icon = 'none') {
    wx.showToast({
      title: msg,
      icon: icon,
      duration: 1000,
      success: () => {
        setTimeout(() => {
          wx.hideToast()
        }, 1000)
      }
    })
  }
  // 数据加载 loading
  setShowLoading(msg, success, fail) {
    wx.showLoading({
      title: msg,
      mask: true,
      success: success,
      fail: fail
    })
  }
  // 页面跳转 保存当前页 跳转到新页面
  toNavigate(path, success, fail) {
    wx.navigateTo({
      url: path,
      success: success,
      fail: (err) => {
        // 页面栈满了后用 redirectTo 进行页面跳转
        if (err.errMsg == 'navigateTo:fail webview count limit exceed') {
          this.toRedirect(path, success, fail)
        }
        fail
      }
    })
  }
  // 页面跳转 关闭当前页 跳转到新页面
  toRedirect(path, success, fail) {
    wx.redirectTo({
      url: path,
      success: success,
      fail: fail
    })
  }
  // 视频拍摄选择
  selectVideo(callbck) {
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 15,
      camera: 'back',
      success: (res) => {
        const videoPath = res.tempFilePath
        this.uploadFiles(videoPath, callbck)
      }
    })
  }
  // 图片拍摄选择
  selectPhoto(callbck) {
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        // files 可以作为 image 标签的 src 属性显示图片
        const files = res.tempFilePaths[0]
        this.uploadFiles(files, callbck)
      }
    })
  }
  // 文件上传
  uploadFiles(filePath, callbck) {
    const upLoadPath = 'https://' + this.Bucket + '.cos.' + this.Region + '.myqcloud.com/'
    const Key = filePath.substr(filePath.lastIndexOf('/') + 1); // 这里指定上传的文件名
    this.setShowLoading('正在上传')
    const requestTask = wx.uploadFile({
      url: upLoadPath,
      name: 'file',
      filePath: filePath,
      formData: {
        'key': Key,
        'success_action_status': 200,
        'Signature': this.auth,
        'x-cos-security-token': this.xToken,
        'Content-Type': '',
      },
      success:(res) => {
        const Location = upLoadPath + Key; // 图片视频访问地址
        if (res.statusCode === 200) {
          callbck(Location)
        } else {
          this.showToastMsg('上传失败，请重新再试')
        }
      },
      fail:(res) => {
        this.showToastMsg('上传失败，请重新再试')
      }
    });
    requestTask.onProgressUpdate((res) => {
      console.log('正在进度:', res.progress);
      if (res.progress == 100) {
        wx.hideLoading()
        this.showToastMsg('上传成功')
      }
    });
  }
}

exports.default = new CommonFunc()