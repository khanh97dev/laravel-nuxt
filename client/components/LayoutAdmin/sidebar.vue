<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-list dense>
      <template v-for="item in menus">
        <!-- Is sub menu -->
        <v-list-group v-if="item.children" v-model="item.active" no-action>
          <template v-slot:activator>
            <v-list-item-icon>
              <v-icon>{{ item.icon || 'mdi-menu'}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item v-for="subItem in item.children" :key="subItem.title" @click="" :to="subItem.href">
            <v-list-item-content>
              <v-list-item-title v-text="subItem.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <!-- End sub menu -->
        <template v-if="!item.children">
          <v-list-item :to="item.href" @click="() => $router.push(item.href)">
            <v-list-item-icon>
              <v-icon v-text="item.icon || 'mdi-arrow-right-bold-outline'"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
  import Menus from '~/static/configs/menu.json'
  export default {
    props: {
      drawer: { default: true },
    },
    data () {
      return {
        menus: Menus,
      }
    },
  }
</script>