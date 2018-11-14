/**
 * 宠物列表卡片 组件
 */
Component({
  data: {
    imageURL: '/static/img/labuladuo.jpg'
  },
  /**
   * 组件的属性列表
   */
  properties: {
    petData: { type: Object, value: {} }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 跳转到宠物详情
    toPetDetail(e) {
      const petId = e.currentTarget.dataset.petid
      this.triggerEvent('petDetail', { petId: petId })
    }
  }
})