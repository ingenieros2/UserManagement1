<template>
  <div class="container-fluid">
    <div class="row min-vh-100 flex-column flex-md-row">
      <aside class="col-12 col-md-3 col-xl-2 p-0 bg-dark flex-shrink-1">
        <nav class="navbar min-vh-100 navbar-expand-md navbar-dark bd-dark flex-md-column flex-row align-items-center py-2 text-center sticky-top" id="asidemenu">
          <div class="text-center p-3">
            <img height="80px" src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" class="img-fluid rounded-circle my-4 p-1 d-md-block shadow" alt="">
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
            <b-col>
              <a href="#" @click="logout({ name: 'Vachu', email: 'vachucrack@gmail.com', logged: false })" class="nav-link text-white"><span class="material-icons">person</span> logout</a>
            </b-col>
          </b-row>
        </nav>
      </aside>
    </div>
  </div>
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
