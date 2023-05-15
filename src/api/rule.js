import { request } from '@/utils/request'

export function ruleList() {
  return request({
    url: '/api/rule',
    method: 'get',
  })
}