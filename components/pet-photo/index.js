/**
 * 图片 组件
 */
Component({
  data: {
    closeImg: '/static/img/labuladuo.jpg',
  },
  /**
   * 组件的属性列表
   */
  properties: {
    petPhotoData: { type: Object, value: {} },
    petPhotoIndex: { type: Number },
    closed: { type: Boolean, value: true }
  },
  /**
   * 组件生命周期函数，在组件布局完成后执行，此时可以获取节点信息
  */
  ready() {
    
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 删除照片&视频
    deletePhoto(e) {
      const deleteIdx = e.currentTarget.dataset.index
      this.triggerEvent('deleteIndex', deleteIdx)
    }
  }
})