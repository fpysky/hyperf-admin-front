import { request } from '@/utils/request'

export function getRoleSelectData() {
  return request({
    url: '/api/role/selectData',
    method: 'get',
  })
}

export function roleList(data) {
  return request({
    url: '/api/role',
    method: 'get',
    params:data
  })
}

export function upRoleStatus(data) {
  return request({
    url: '/api/role/status',
    method: 'patch',
    data
  })
}

export function createRole(data) {
  return request({
    url: '/api/role',
    method: 'post',
    data
  })
}

export function editRole(data) {
  return request({
    url: '/api/role',
    method: 'put',
    data
  })
}