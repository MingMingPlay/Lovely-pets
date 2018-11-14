/**
 * 店铺信息弹框 组件
 */
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    shopBoxData: { type: Object, value: {} },
    showed: { type: Boolean, value: false}
  },
  data: {

  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 拨打电话
    mobileCall(event) {
      const mobileNumbers = event.currentTarget.dataset.numbers
      const called = /^1[34578]\d{9}$/.test(mobileNumbers)
      if (called) {
        wx.makePhoneCall({
          phoneNumber: mobileNumbers
        })
      } else {
        wx.showToast({
          title: '手机号码错误',
          icon: 'error',
          duration: 1000,
          success: function () {
            setTimeout(() => {
              wx.hideToast()
            }, 1000)
          }
        })
      }
    },
    // 复制内容
    copyContent(event) {
      const copyTexts = event.currentTarget.dataset.texts
      if (copyTexts) {
        wx.setClipboardData({
          data: copyTexts,
          success: function (res) {
            console.log('复制成功')
          }
        })
      } else {
        wx.showToast({
          title: '没有内容',
          icon: 'error',
          duration: 1000,
          success: function() {
            setTimeout(() => {
              wx.hideToast()
            },1000)
          }
        })
      }
    },
    // 确定按钮
    clickConfirmBtn() {
      this.triggerEvent('closeBox')
    },
    // 禁止遮罩层下面内容滑动
    myCatchTouch: function () {
      return false;
    }
  }
})