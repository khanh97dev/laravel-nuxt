<template>
  <div id="app">
    <v-app id="inspire">
      <sidebar />
      <header-bar @toggleSidebar="toggleSidebar"/>
      <v-content>
        <v-layout justify-center>
          <v-flex text-xs-center>
            <nuxt />
          </v-flex>
        </v-layout>
      </v-content>
      <v-footer color="purple darken-3" app>
        <span class="white--text">&copy; 2019</span>
      </v-footer>
    </v-app>
  </div>
</template>
<script>
import HeaderBar from '@/components/LayoutAdmin/HeaderBar.vue'
import sidebar from '@/components/LayoutAdmin/sidebar.vue'
export default {
  middleware: 'auth',
  head: () => ({title: 'Quản lý'}),
  components: {
    HeaderBar, sidebar
  },
  data() {
    return {
      numbers: 1,
    }
  },// data
  computed: {
    drawer(){
      return this.$store.getters['app/sidebar']
    }
  },// computed
  methods: {
    toggleSidebar(){
      this.$store.commit('app/SET_SIDEBAR', !this.drawer)
    }
  },// methods
}
</script>