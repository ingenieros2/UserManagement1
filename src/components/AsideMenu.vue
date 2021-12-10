<template>
  <b-container class="w-100">
    <b-row>
      <aside v-if="loggedUser" class="bg-dark">
        <nav class="navbar  navbar-expand-md navbar-dark bd-dark flex-md-column flex-row align-items-center py-2 text-center ">
          <div class="text-center p-3">
            <img src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" class="img-fluid rounded-circle my-4 p-1 d-md-block shadow" alt="">
            <a href="#" class="navbar-brand mx-0 font-weight-bold">{{ loggedUser.name }}</a>
            <br>
            <span class="text-white font-weight-bold">{{ loggedUser.role.role }}</span>
          </div>
          <b-row class="d-flex flex-column justify-content-between">
            <b-col>
              <ul class="navbar-nav flex-column w-100">
                <li>
                  <a href="#" class="nav-link text-white"><span class="material-icons">person</span> Profile</a>
                </li>
                <li v-if="loggedUser.role.permissions.users === 2">
                  <a href="#" class="nav-link text-white"><span class="material-icons">person</span> Users</a></li>
                <li v-if="loggedUser.role.permissions.roles === 2">
                  <a href="#" class="nav-link text-white"><span class="material-icons">person</span> Roles</a></li>
              </ul>
            </b-col>
          </b-row>
        </nav>
        <div>
            <b-col class=" text-center">
              <a href="#" @click="logout({ name: 'Vachu', email: 'vachucrack@gmail.com', logged: false })" class="nav-link text-white"><span class="material-icons">person</span> logout</a>
            </b-col>
        </div>
      </aside>
    </b-row>
  </b-container>
  <!--<a href="#"><span class="material-icons">person</span></a>-->
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'AsideMenu',
  data: () => ({
  }),
  computed: {
    ...mapGetters({
      loggedUser: 'getUser',
      user: 'users/getUsers'
    })
  },
  methods: {
    ...mapActions({
      logout: 'users/modifyLogged'
    })
  }
}
</script>
