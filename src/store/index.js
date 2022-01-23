import Vue from 'vue'
import Vuex from 'vuex'
import users from './users'
import roles from './roles'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedUser: {
      name: 'Vachu',
      email: 'vachucrack@gmail.com',
      role: {
        id: 1,
        role: 'Admin',
        permissions: {
          roles: 2,
          users: 2
        }
      }
    }
  },
  getters: {
    getUser: (state) => state.loggedUser
  },
  mutations: {
    SET_LOGGED_USER: (state, newUser) => {
      state.loggedUser = newUser
    }
  },
  actions: {
    checkLogged: async ({ commit, rootState }) => {
      commit('CHECK_LOGGED', rootState.users.users)
    },
    setLoggedUser: async ({ commit, rootState }) => {
      const user = rootState.users.users.find(e => e.logged === true)
      commit('SET_LOGGED_USER', user)
    }
  },
  modules: {
    users,
    roles
  }
})
