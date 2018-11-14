"use strict"
import apis from './api.js'
const Fly = require("../utils/wx.js")
const fly = new Fly() // 创建 fly 实例

fly.config.baseURL = apis.baseUrl // 接口基本 baseUrl
fly.config.timeout = 15000 // 超时时长

// 请求拦截器
fly.interceptors.request.use((request) => {
  return request
})

// 响应拦截器
fly.interceptors.response.use((response) => {
    // 请求成功之后将返回值返回
    return response
  }, (err) => {
    //请求出错，根据返回状态码判断出错原因
    console.log(err)
    Promise.reject(err)
  }
);

export default fly