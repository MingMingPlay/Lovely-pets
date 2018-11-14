const petType = require('../../static/file/type.js');
const pubFunc = getApp().pubFunc
Page({
  /**
   * 页面的初始数据
   */
  data: {
    petSex: '', // 宠物性别
    petWeight: '', // 宠物体重
    petBirthday: '', // 宠物生日
    petDes: '', // 宠物描述
    petDesMax: 150, // 最多输入的字数限制
    petType: [], // 宠物种类数组
    modifyType: '', // 修改字段类型
    routeBackPath: ''
  },
  // 性别选择
  petSexSelect(e) {
    const petSex = e.detail
    this.setData({
      petSex: petSex
    })
  },
  // 输入框只能输入数字验证
  checkNumberType(e) {
    const iptValue = e.detail.value
    if (iptValue.substr(0, 2) != '00') {
      if (/^[0-9]+.?[0-9]*$/.test(iptValue)) {
        this.setData({
          petWeight: iptValue
        })
      } else {
        pubFunc.showToastMsg('只能输入数字')
        this.setData({
          petWeight: ''
        })
      }
    } else {
      pubFunc.showToastMsg('请输入正确的数字')
      this.setData({
        petWeight: ''
      })
    }
  },
  // 生日日期修改
  petBirthdayModify(e) {
    if (e.detail.value) {
      const selValue = e.detail.value.replace(/-/g, "/")
      this.setData({
        petBirthday: selValue
      })
    }
  },
  // 描述修改
  petDesModify(e) {
    const writeValue = e.detail.value || ''
    if (writeValue.length < this.data.petDesMax) {
      this.setData({
        petDes: e.detail.value
      })
    } else {
      pubFunc.showToastMsg('最多输入150个字')
      this.setData({
        petDes: e.detail.value
      })
    }
  },
  // 获取修改品种
  getPetType(e) {
    const getObj = e.detail
    const modifyObj = {
      key: 'petType',
      value: getObj.name
    }
    const routeBackUrl = this.data.routeBackPath + '?nodifyObj=' + JSON.stringify(modifyObj)
    pubFunc.toRedirect(routeBackUrl)
  },
  // 切换宠物获取种类
  switchPet(e) {
    console.log(e.detail)
  },
  // 宠物信息修改提交
  submitModifyInfo() {
    const modifyKey = this.data.modifyType
    const modifyValue = this.data[modifyKey]
    const modifyObj = {
      key: modifyKey,
      value: modifyValue
    }
    const routeBackUrl = this.data.routeBackPath + '?nodifyObj=' + JSON.stringify(modifyObj)
    pubFunc.toRedirect(routeBackUrl)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let routePath = ''
    if (options.routePath == 'petSelfDetail') {
      routePath = '/pages/pet-self-detail/index'
    } else if (options.routePath == 'petAddGrow'){
      routePath = '/pages/pet-add-grow/index'
    } else {
      routePath = '/pages/pet-add/index'
    }
    this.setData({
      routeBackPath: routePath
    })
    switch (options.type) {
      case 'petBirthday': 
        pubFunc.setPageTitle('修改生日')
        this.setData({
          modifyType: options.type,
          petBirthday: options.value
        })
        break
      case 'petSex':
        pubFunc.setPageTitle('修改性别')
        this.setData({
          modifyType: options.type,
          petSex: options.value
        })
        break
      case 'petWeight':
        pubFunc.setPageTitle('修改体重')
        this.setData({
          modifyType: options.type,
          petWeight: options.value
        })
        break
      case 'petDes':
        pubFunc.setPageTitle('修改介绍')
        this.setData({
          modifyType: options.type,
          petDes: options.value
        })
        break
      case 'petType':
        pubFunc.setPageTitle('修改品种')
        this.setData({
          modifyType: options.type,
          petType: petType.dog
        })
        break
      default:
        break  
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },
})