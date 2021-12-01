import Vue from 'vue'
import Vuex from 'vuex'
import users from './users'
import roles from './roles'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedUser: {
      name: 'Exe',
      email: 'aisdaisd@asdasi.com',
      logged: false,
      role: {
        id: 1,
        role: 'admin',
        permissions: {
          roles: 2,
          users: 2
        }
      }
    }
  },
  getters: {
  },
  mutations: {
    SET_LOGGED_USER: (state, newUser) => {
      state.loggedUser = newUser
    },
    CHECK_LOGGED: (user) => {
    }
  },
  actions: {
    checkLogged: async ({ commit, rootState }) => {
      commit('CHECK_LOGGED', rootState.users.users)
    }
  },
  modules: {
    users,
    roles
  }
})
