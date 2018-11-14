//app.js
import pubFunc from './api/common.js'
import api from './api/api.js'
import fly from './api/http.js'
App({
  onLaunch: function () {
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        // console.log(res.code)
      }
    })
  },
  // 全局方法注册
  pubFunc: pubFunc,
  // 接口类
  $apis: api,
  // 异步接口请求方法
  $http: fly
})