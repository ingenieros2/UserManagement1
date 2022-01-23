<template>
  <b-modal :id="modalId" :title="title" class="d-flex" ok-title="Save" hide-header-close>
    <form>
      <b-row>
        <b-col md="6">
          <b-form-group label="Name">
            <b-form-input type="text" v-model="name"/>
          </b-form-group>

         <b-form-group label="Email">
            <b-form-input type="email" v-model="email"/>
         </b-form-group>

          <b-form-group label="Role">
            <b-form-select v-model="selected" >
              <b-form-select-option v-for="item in roles" :key="item.id" :value="item.id">{{ item.role }}</b-form-select-option>
            </b-form-select>
          </b-form-group>
        </b-col>

        <b-col md="6">
          <b-form-group label="Last Name">
            <b-form-input type="text" v-model="lastName"/>
          </b-form-group>

          <b-form-group label="Phone">
            <b-form-input type="number" v-model="phone"/>
          </b-form-group>

          <b-form-group label="Image">
            <b-form-input type="text" v-model="image"/>
          </b-form-group>
        </b-col>
      </b-row>
    </form>
  </b-modal>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'UsersModal',
  computed: {
    ...mapGetters({
      roles: 'roles/getRoles'
    })
  },
  data: () => ({
    selected: null
  }),
  props: {
    modalId: {
      type: String,
      default: 'users-modal'
    },
    title: {
      type: String,
      default: 'Users'
    },
    name: {
      type: String,
      default: ''
    },
    email: {
      type: String,
      default: ''
    },
    lastName: {
      type: String,
      default: ''
    },
    phone: {
      type: Number,
      default: 0
    },
    image: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>>
