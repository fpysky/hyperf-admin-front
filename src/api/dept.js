import { request } from '@/utils/request'

export function getDeptTree() {
  return request({
    url: '/api/dept/tree',
    method: 'get',
  })
}