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

export function upAdminStatus(data) {
  return request({
    url: '/api/admin/status',
    method: 'patch',
    data
  })
}

export function deleteAdmin(data) {
  return request({
    url: '/api/admin',
    method: 'delete',
    data
  })
}