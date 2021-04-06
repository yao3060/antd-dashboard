// 使用 Mock
var Mock = require('mockjs')
Mock.mock('/api-server/users/v1/login', {
  code: 'get_auth_token',
  message: 'Get Auth Token',
  data: {
    token: 'thisIsTestToken',
    type: 'Bearer',
    expires: 3600*24
  }
})

Mock.mock('/api-server/users/v1/me', {
  code: 'get_my_info',
  message: 'Get My Info',
  data: {
    username: 'admin',
    display_name: 'YYY',
    phone_number: 12523245677,
    roles: ['administrator'],
    permissions: ['read', 'manage_settings']
  }
})
