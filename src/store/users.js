export default {
  namespaced: true,
  state: {
    users: []
  },
  getters: {

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
    }
  },
  actions: {
  }
}
