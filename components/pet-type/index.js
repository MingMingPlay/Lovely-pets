/**
 * 宠物种类选择 组件
 */
const wxaSortPicker = require('../../utils/wxaSortPicker/wxaSortPicker.js');
const petType = require('../../static/file/type.js')
Component({
  data: {
    tabData: ['狗', '猫']
  },
  /**
   * 组件的属性列表
   */
  properties: {
    petTypeData: { type: Object, value: {} }
  },
  /**
   * 组件生命周期函数，在组件布局完成后执行，此时可以获取节点信息
  */
  ready() {
    wxaSortPicker.init(this.properties.petTypeData, this);
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 获取选择的种类
    wxaSortPickerItemTap: function (e) {
      const typeObj = {
        name: e.target.dataset.text,
        value: e.target.dataset.value
      }
      this.triggerEvent('getType', typeObj)
    },
    // 切换宠物加载种类
    getPetTypes(e) {
      if (e.detail == '0') {
        wxaSortPicker.init(petType.dog, this);
      } else {
        wxaSortPicker.init(petType.cat, this);
      }
      this.triggerEvent('switchPet', e.detail)
    }
  }
})