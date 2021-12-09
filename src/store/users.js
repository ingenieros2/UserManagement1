export default {
  namespaced: true,
  state: {
    users: [{ name: 'Vachu', email: 'vachucrack@gmail.com', logged: false }]
  },
  getters: {
    getUsers: (state) => state.users
  },
  mutations: {
    ADD_USER: (state, newUser) => {
      state.users = [...state.users, newUser]
    },
    MODIFY_USER: (state, user) => {
      const usersCopy = [...state.users]
      const foundUser = usersCopy.findIndex(el => el.email === user.email)
      if (foundUser !== -1) {
        usersCopy[foundUser] = user
        state.users = usersCopy
      }
    },
    DELETE_USER: (state, user) => {
      const usersCopy = [...state.users]
      const foundUser = usersCopy.findIndex(el => el.email === user.email)
      if (foundUser !== -1) {
        usersCopy.splice(foundUser, 1)
        state.users = usersCopy
      }
    },
    MODIFY_LOGGED: (state, user) => {
      const usersCopy = [...state.users]
      const foundUser = usersCopy.findIndex(el => el.email === user.email)
      if (foundUser !== -1) {
        if (usersCopy.logged === true) {
          usersCopy.logged = false
          state.users = usersCopy
        } else {
          usersCopy.logged = true
          state.users = usersCopy
        }
      }
    }
  },
  actions: {
    addUser: async ({ commit, state }, newUser) => {
      const usersCopy = [...state.users]
      const foundEmail = usersCopy.findIndex(el => el.email === newUser.email)
      const foundName = usersCopy.findIndex(el => el.name === newUser.name)
      if (foundEmail !== state.users.email) {
        if (foundName !== state.user.name) {
          commit('ADD_USER', newUser)
          return true
        }
      }
      return false
    },
    modifyUser: async ({ commit, rootState }, user) => {
      if (rootState.loggedUser.role.permissions.users === 2) {
        commit('MODIFY_USER', user)
        return true
      }
      return false
    },
    deleteUser: async ({ commit, rootState }, user) => {
      if (rootState.loggedUser.role.permissions.users === 2) {
        commit('DELETE_USER', user)
        return true
      }
      return false
    },
    modifyLogged: async ({ commit, state, dispatch }, user) => {
      commit('MODIFY_USER', user)
      dispatch('setLoggedUser', state.users, { root: true })
    }
  }
}
