/**
 * tab 组件
 */
Component({
  data: {
    currentTab: '0',
  },
  /**
   * 组件的属性列表
   */
  properties: {
    tabData: { type: Object, value: {} }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // tab 切换
    swichNav(e) {
      var that = this;
      const currentTab = e.currentTarget.dataset.current
      if (this.data.currentTab == currentTab) {
        return false;
      } else {
        that.setData({
          currentTab: currentTab
        })
        this.triggerEvent('tabEvent', currentTab)
      }
    },
  }
})