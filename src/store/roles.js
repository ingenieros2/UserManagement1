export default {
  namespaced: true,
  state: {
    roles: []
  },
  getters: {

  },
  mutations: {
    SET_ROLES: (state, payload) => {
      state.roles = payload
    },
    ADD_ROLE: (state, newRole) => {
      state.roles = [...state.roles, newRole]
    },
    MODIFY_ROLE: (state, role) => {
      const rolesCopy = [...state.roles]
      const foundRole = rolesCopy.findIndex(el => el.id === role.id)
      if (foundRole !== -1) {
        rolesCopy[foundRole] = role
        state.roles = rolesCopy
      }
    },
    DELETE_ROLE: (state, role) => {
      const rolesCopy = [...state.roles]
      const foundRole = rolesCopy.findIndex(el => el.id === role.id)
      if (foundRole !== -1) {
        rolesCopy.splice(foundRole, 1)
        state.roles = rolesCopy
      }
    }
  },
  actions: {
  }
}
