const pubFunc = getApp().pubFunc
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // tab 标签数组
    tabData: ['在售', '已售'],
    // 在售宠物列表信息
    petList: [
      { id: '1', name: '拉布拉多', age: '1岁5个月', sex: 1, number: 'JM147' },
      { id: '2', name: '金毛', age: '2岁1个月', sex: 0, number: 'JM7891' },
      { id: '3', name: '雪拉瑞', age: '0岁3个月', sex: 2, number: 'OK14852' },
      { id: '4', name: '哈士奇', age: '5岁', sex: 1, number: 'PM1456' },
    ]
  },
  // tab切换获取宠物列表
  tabSwitchGetPets(e) {
    const tabId = e.detail
    const onSalePets = [
      { id: '1', name: '拉布拉多', age: '1岁5个月', sex: 1, number: 'JM147' },
      { id: '2', name: '金毛', age: '2岁1个月', sex: 0, number: 'JM7891' },
      { id: '3', name: '雪拉瑞', age: '0岁3个月', sex: 2, number: 'OK14852' },
      { id: '4', name: '哈士奇', age: '5岁', sex: 1, number: 'PM1456' },
    ]
    const saledPets = [
      { id: '3', name: '雪拉瑞', age: '0岁3个月', sex: 2, number: 'OK14852' },
      { id: '4', name: '哈士奇', age: '5岁', sex: 1, number: 'PM1456' },
    ]
    tabId == '0' ? this.setData({
      petList: onSalePets
    }) : this.setData({
        petList: saledPets
    })
  },
  // 跳转宠物详情
  toPetDetail() {
    const routePath = '/pages/pet-self-detail/index'
    pubFunc.toNavigate(routePath)
  },
  // 跳转到添加宠物页
  toAddPet() {
    const routePath = '/pages/pet-add/index'
    pubFunc.toNavigate(routePath)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  }
})