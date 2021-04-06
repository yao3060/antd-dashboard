import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/users/v1/login',
    method: 'post',
    data
  })
}

export function me() {
  return request({
    url: '/users/v1/me',
    method: 'get'
  })
}
