<template>
  <v-navigation-drawer v-model="drawer" class="indigo lighten-5" app>
    <v-list dense>
      <template v-for="item in items">
        <v-list-item v-if="!item.children" :to="{ path: item.href }">
          <v-list-item-icon>
            <v-icon>{{ item.icon || 'mdi-arrow-right' }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group v-else v-model="item.active" no-action>
          <template v-slot:activator>
            <v-list-item-icon>
              <v-icon>{{ item.icon || 'mdi-arrow-right' }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item v-for="subItem in item.children" :key="subItem.title" :to="{ path: subItem.href }">
            <v-list-item-content>
              <v-list-item-title v-text="subItem.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
  import menu from '~/configs/menu.js';
  export default {
    data () {
      return {
        search: '',
        items: menu
      }
    },// data
    computed: {
      drawer: {
        get(){ return this.$store.getters['app/sidebar'] },
        set(val){
          this.$store.commit('app/SET_SIDEBAR', val)
          return val
        },
      }
    },// computed
    methods:{
      searchMenu(){
        let search = this.search;
        if(search.length == 0) {
          this.items = menu;
          console.log(menu);
          return menu;
        }
        this.items = this.items.map(function f(o) {
          if (o.title.includes(search)) return true

          if (o.children) {
            return (o.children = o.children.map(f)).length
          }
        });
      },
    },//methods
  }
</script>