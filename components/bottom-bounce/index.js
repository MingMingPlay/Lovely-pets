/**
 * 分享底部弹框 组件
 */
Component({
  data: {
    animation: {},
    wxPhoto: '/static/img/weixin.jpg',
    shopPhoto: '/static/img/shop.jpg'
  },
  /**
   * 组件生命周期函数，在组件实例进入页面节点树时执行，注意此时不能调用 setData
  */
  created() {
    this.openAnimotion()
  },
  /**
   * 组件的属性列表
   */
  properties: {
    showed: { type: Boolean, value: false }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 生成海报
    createPoster() {
      this.closeAnimotion(() => {
        this.triggerEvent('createPoster')
      })
    },
    // 点击分享
    clickShare() {
      this.closeAnimotion(() => {
        this.triggerEvent('clickShare')
      })
    },
    // 点击取消分享弹框
    closeShareBox() {
      this.closeAnimotion(() => {
        this.triggerEvent('closeShare')
      })
    },
    // 禁止遮罩层下面内容滑动
    myCatchTouch: function () {
      return false;
    },
    // 弹起动画
    openAnimotion() {
      const that = this;
      const animation = wx.createAnimation({
        duration: 600,//动画的持续时间 默认400ms   数值越大，动画越慢   数值越小，动画越快
        timingFunction: 'ease',//动画的效果 默认值是linear
      })
      this.animation = animation
      setTimeout(function () {
        that.fadeIn();//调用显示动画
      }, 200)
    },
    // 关闭动画
    closeAnimotion(callback) {
      const that = this
      const animation = wx.createAnimation({
        duration: 700,//动画的持续时间 默认400ms   数值越大，动画越慢   数值越小，动画越快
        timingFunction: 'ease',//动画的效果 默认值是linear
      })
      this.animation = animation
      that.fadeDown();//调用隐藏动画
      setTimeout(function () {
        callback && callback()
      }, 200)//先执行下滑动画，再隐藏模块
    },
    // 进入动画
    fadeIn: function () {
      this.animation.translateY(0).step()
      this.setData({
        animationData: this.animation.export()//动画实例的export方法导出动画数据传递给组件的animation属性
      })
    },
    // 退出动画
    fadeDown: function () {
      this.animation.translateY(300).step()
      this.setData({
        animationData: this.animation.export(),
      })
    }
  }
})