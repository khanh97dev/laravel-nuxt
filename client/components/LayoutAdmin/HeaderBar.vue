<template>
  <v-app-bar app color="primary accent-4" dark>
    <v-app-bar-nav-icon @click="$emit('toggleSidebar')"></v-app-bar-nav-icon>

    <span style="cursor: pointer;" @click="$router.push('/')">{{ $store.state.auth.user.name }}</span>

    <div class="flex-grow-1"></div>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-badge
        color="green"
        overlap
      >
        <template v-slot:badge>
          <span>1</span>
        </template>
        <v-icon large>mdi-email</v-icon>
      </v-badge>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
    </v-btn>
    <component v-for="(component, i) in notifies" :key="i" :is="component"></component>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-toolbar-title>
            <v-avatar color="indigo" size="36">
              <span class="white--text headline">{{ $store.state.auth.user.name.substring(0, 2)  }}</span>
            </v-avatar>
          </v-toolbar-title>
        </v-btn>
      </template>
      <v-list>
        <v-list-item @click="$store.dispatch('auth/logout')">
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<script>
  export default {
    data(){
      return {
        notifies: [
          require('~/components/notifies/Email.vue').default
        ]
      }
    },//data
  }
</script>