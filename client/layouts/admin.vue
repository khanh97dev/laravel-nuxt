<template>
  <div id="app">
    <v-app id="inspire">
      <sidebar :drawer="drawer" />

      <header-bar @toggleSidebar="toggleSidebar"/>

      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex text-xs-center>
              <nuxt />
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
      <v-footer color="indigo" app>
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

  components: {
    HeaderBar, sidebar
  },
  data() {
    return {
      drawer: localStorage.getItem('sidebarOff') ? false : true,
      numbers: 1,
    }
  },// data
  methods: {
    toggleSidebar(){
      this.drawer = !this.drawer
      this.drawer
        ? localStorage.removeItem('sidebarOff')
        : localStorage.setItem('sidebarOff', 1)
    }
  },// methods
}
</script>