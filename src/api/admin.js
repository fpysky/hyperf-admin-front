import { request } from '@/utils/request'

export function adminList(data) {
  return request({
    url: '/api/admin',
    method: 'get',
    params:data
  })
}

export function createAdmin(data) {
  return request({
    url: '/api/admin',
    method: 'post',
    data
  })
}

export function editAdmin(data) {
  return request({
    url: '/api/admin',
    method: 'put',
    data
  })
}