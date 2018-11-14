"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
// 接口api类（所有接口）
class Apis {
  constructor() {
    this.baseUrl = 'www.baidu.com'          // 接口基本 baseUrl 地址
    this.test = '/login'                    // 登录接口
  }
}

exports.default = new Apis()