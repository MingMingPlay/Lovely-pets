/**
 * 添加按钮 组件
 */
Component({
  data: {
    iconPath: '/static/img/add-tag.jpg'
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 点击事件
    clickEvent() {
      this.triggerEvent('clickEvent')
    }
  }
})