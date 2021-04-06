import { login, me } from '@/api/users'
import { getToken, setToken } from '@/utils/auth'

const users = {
  namespaced: true,
  state: () => ({
    id: 0,
    token: getToken(),
    username: '',
    display_name: '',
    avatar: '',
    phone_number: '',
    roles: [],
    permissions: []
  }),
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USERNAME: (state, username) => {
      state.username = username
    },
    SET_DISPLAYNAME: (state, display_name) => {
      state.display_name = display_name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },
  actions: {
    // user login
    login({ commit }, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({ username: username.trim(), password: password }).then(response => {
          const { data } = response
          commit('SET_TOKEN', data.token)
          setToken(data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // get user info
    getInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        me(state.token).then(response => {
          const { data } = response

          if (!data) {
            reject('Verification failed, please Login again.')
          }

          const { roles, name, avatar, introduction } = data

          // roles must be a non-empty array
          if (!roles || roles.length <= 0) {
            reject('getInfo: roles must be a non-null array!')
          }

          commit('SET_ROLES', roles)
          commit('SET_USERNAME', name)
          commit('SET_AVATAR', avatar)
          commit('SET_DISPLAYNAME', introduction)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
  },
  getters: {}
}

export default users
