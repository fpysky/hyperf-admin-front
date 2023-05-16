import { request } from '@/utils/request'

export function ruleList() {
  return request({
    url: '/api/rule',
    method: 'get',
  })
}

export function upRuleStatus(data) {
  return request({
    url: '/api/rule/status',
    method: 'patch',
    data
  })
}

export function createRule(data) {
  return request({
    url: '/api/rule',
    method: 'post',
    data
  })
}

export function editRule(data) {
  return request({
    url: '/api/rule',
    method: 'put',
    data
  })
}

export function topRule() {
  return request({
    url: '/api/rule/topRule',
    method: 'get',
  })
}

export function parentMenusTree() {
  return request({
    url: '/api/rule/parentMenusTree',
    method: 'get',
  })
}

export function deleteRule(data) {
  return request({
    url: '/api/rule',
    method: 'delete',
    data
  })
}