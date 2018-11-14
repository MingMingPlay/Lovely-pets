/**
 * 视频 组件
 */
Component({
  data: {
    videoId: '',
    show: true,
    posterImg: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
    closeImg: '/static/img/labuladuo.jpg',
  },
  /**
   * 组件的属性列表
   */
  properties: {
    petVideoData: { type: Object, value: {} },
    petVideoIndex: { type: Number },
    top: { type: Number },
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
    },
    // 播放视频
    playVideo(e) {
      const videoId = e.currentTarget.dataset.id
      let vediocon = wx.createVideoContext(videoId, this)
      vediocon.play()
      this.setData({
        show: false,
        videoId: videoId
      })
    },
    // 视频播放完毕重新上封面
    endvedio: function () {
      let vediocon = wx.createVideoContext(this.data.videoId, this)
      this.setData({
        show: true
      })
    }
  }
})