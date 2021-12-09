<template>
  <div class="home">
    <router-link to="/login">adasdasdasd</router-link>
    <button @click="test4">asdasdasdasdadadpene</button>
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
    <AsideMenu></AsideMenu>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AsideMenu from '../components/AsideMenu.vue'
export default {
  name: 'Home',
  components: {
    AsideMenu
  },
  data: () => ({
    name: '',
    valores: ''
  }),
  computed: {
    ...mapGetters({
      test: 'roles/getRoles'
    })
  },
  methods: {
    ...mapActions({
      test2: 'roles/addRole',
      test3: 'roles/modifyRole',
      test4: 'checkLogged'
    })
  }
}
</script>
