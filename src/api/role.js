import { request } from '@/utils/request'

export function getRoleSelectData() {
  return request({
    url: '/api/role/selectData',
    method: 'get',
  })
}