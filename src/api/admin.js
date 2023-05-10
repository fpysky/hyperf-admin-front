import { request } from '@/utils/request'

export function adminList(data) {
  return request({
    url: '/api/admin',
    method: 'get',
    params:data
  })
}
