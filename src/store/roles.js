export default {
  namespaced: true,
  state: {
    roles: [{
      role: 'Admin',
      id: 1,
      permissions: {
        roles: 2,
        users: 2
      }
    }]
  },
  getters: {
    getRoles: (state) => state.roles
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
    addRole: async ({ commit }, newRole, state) => {
      if (newRole.role !== state.roles.role) {
        commit('ADD_ROLE', newRole)
        return true
      }
      return false
    },
    modifyRole: async ({ commit, rootState }, role) => {
      if (rootState.loggedRole.role.permissions.roles === 2) {
        commit('MODIFY_ROLE', role)
        return true
      }
      return false
    },
    deleteRole: async ({ commit, rootState }, role) => {
      if (rootState.loggedRole.role.permissions.roles === 2) {
        commit('DELETE_USER', role)
        return true
      }
      return false
    }
  }
}
