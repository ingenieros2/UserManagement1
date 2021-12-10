<template>
  <div class="home">
    <b-container fluid class="bg-secondary" >
      <b-row>
        <b-col  md="2">
          <AsideMenu/>
        </b-col>
        <b-col md="7">
          <h2>Profile</h2>
          <div class="d-flex justify-content-between">
            <img class="rounded-3" src="https://es.web.img3.acsta.net/pictures/19/05/22/10/42/3773139.jpg" width="130px" height="150px" alt="img">
            <div>
              <label for="img"> Image</label>
              <br>
              <input class="rounded-3" type="text">
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
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
