import Vue from 'vue'
import Vuex from 'vuex'
import users from './users'
import roles from './roles'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedUser: null
  },
  getters: {
  },
  mutations: {
    SET_LOGGED_USER: (state, newUser) => {
      state.loggedUser = newUser
    }
  },
  actions: {
  },
  modules: {
    users,
    roles
  }
})
