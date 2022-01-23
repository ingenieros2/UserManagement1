<template>
  <div id="app" style="height: 100vh">
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getUser'])
  },
  watch: {
    getUser (current) {
      if (!current) this.$router.push('/login')
    }
  }
}
</script>
