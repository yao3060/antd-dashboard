import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api-server/users/v1/login',
    method: 'post',
    data
  })
}
