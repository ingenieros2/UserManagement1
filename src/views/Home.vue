<template>
  <div class="home">
    <button v-b-modal.users-modal :modalId="'users-modal'">Modal Test</button>
    <button @click="test5(test25[0])">test</button>
    <p>{{ test25 }}</p>
    <UsersModal :title="'New User'"/>
    <table>
      <tr>
        <th>nombre</th>
        <th>id</th>
        <th>permisos</th>
      </tr>
      <tr v-for="item in test" :key="item.id">
        <td>{{ item.role }}</td>
        <td>{{ item.id }}</td>
        <td>{{ item.permissions}}</td>
        <button v-b-modal.modal-2>EL EXEQUIEL ES UN RETRASDAO</button>
      </tr>
    </table>
    <b-modal id="modal-2" title="Modifica el rol" cancel-variant="danger" ok-variant="success" @ok="test3({role: name, id: 1, permissions: valores})">
      <b-form>
        <label for="txt_name" class="mb-2">Ingrese su nombre</label>
        <b-form-input id="txt_name" class="mb-3" v-model="name" :value="name"></b-form-input>
        <label for="txt_party" class="mb-2">elegir permisos</label>
        <b-form-input id="txt_party" class="mb-3" v-model="valores" :value="valores"></b-form-input>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import UsersModal from '../components/UsersModal.vue'
export default {
  name: 'Home',
  components: {
    UsersModal
  },
  data: () => ({
    name: '',
    valores: ''
  }),
  computed: {
    ...mapGetters({
      test: 'roles/getRoles',
      test25: 'users/getUsers'
    })
  },
  methods: {
    ...mapActions({
      test2: 'roles/addRole',
      test3: 'roles/modifyRole',
      test4: 'checkLogged',
      test5: 'users/deleteUser'
    })
  }
}
</script>
