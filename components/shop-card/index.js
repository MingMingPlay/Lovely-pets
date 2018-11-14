/**
 * 店铺列表卡片 组件
 */
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    shopData: { type: Object, value: {} }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 跳转到店铺详情
    toShopDetail(e) {
      const shopId = e.currentTarget.dataset.shopid;
      this.triggerEvent('shopDetail', { shopId: shopId})
    }
  }
})