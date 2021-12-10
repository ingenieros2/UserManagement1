<template>
  <b-container>
    <b-row class="w-100">
      <b-col md="1">
        <AsideMenu/>
      </b-col>
      <b-col  md="11">
        <div class="d-flex justify-content-between mt-5">
          <h2>Users</h2>
          <b-button v-b-modal.users-modal :modalId="'users-modal'">Add User</b-button>
        </div>
        <div class="d-flex justify-content-between mt-5">
          <div>
            <h5>Filters</h5>
            <form class="mt-3 mr-5">
              <b-form-group label="Name">
                <b-form-input type="text" v-model="filters.name"/>
              </b-form-group>

              <b-form-group label="Email">
                  <b-form-input type="email" v-model="filters.email"/>
              </b-form-group>

              <b-form-group label="Role">
                <b-form-select v-model="filters.role" >
                  <b-form-select-option :value="0">Any</b-form-select-option>
                  <b-form-select-option v-for="item in roles" :key="item.id" :value="item.id">{{ item.role }}</b-form-select-option>
                </b-form-select>
              </b-form-group>
            </form>
          </div>
          <b-table striped hover :items="filteredData" :fields="fields"></b-table>
        </div>
      </b-col>
    </b-row>
    <UsersModal :title="'New User'"/>
  </b-container>
</template>

<script>
import AsideMenu from '../components/AsideMenu.vue'
import UsersModal from '../components/UsersModal.vue'
import { mapGetters } from 'vuex'
export default {

  name: 'Users',
  components: {
    AsideMenu, UsersModal
  },
  data: () => ({
    fields: ['name', 'email', 'role'],
    filters: {
      name: '',
      email: '',
      role: 0
    }
  }),
  computed: {
    ...mapGetters({
      users: 'users/getUsers',
      roles: 'roles/getRoles'
    }),

    filteredData () {
      return this.users.filter(el => (
        el.name.toLowerCase().includes(this.filters.name.toLowerCase()) &&
        el.email.toLowerCase().includes(this.filters.email.toLowerCase()) &&
        (el.role === this.filters.role || this.filters.role === 0)
      ))
    }
  }
}
</script>
