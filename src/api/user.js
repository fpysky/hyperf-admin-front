import { request } from '@/utils/request'

/**
 * @method addUserLogin 登录
 * @param {*} data
 * @returns
 */
export function addUserLogin(data) {
  return request({
    url: '/api/login',
    method: 'post',
    data
  })
}

/**
 * @method addUserInfo 用户信息
 * @param {*} data
 * @returns
 */
export function addUserInfo(data) {
  return request({
    url: '/api/userInfo',
    method: 'get',
    data
  })
}
