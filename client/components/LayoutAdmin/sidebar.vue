<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-list dense>
      <template v-for="item in items">
        <v-list-group v-if="item.children" v-model="item.active" no-action>
          <template v-slot:activator>
            <v-list-item-icon>
              <v-icon>mdi-magnify</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item v-for="subItem in item.children" :key="subItem.title" @click="">
            <v-list-item-content>
              <v-list-item-title v-text="subItem.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-item v-else @click="">
          <v-list-item-icon>
            <v-icon>mdi-magnify</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
  const menu =  [
    {
      action: 'local_activity',
      title: 'No Sub Menu',
      active: false
    },
    {
      action: 'local_activity',
      title: 'Attractions',
      children: [
        { title: 'List Item' },
      ],
    },
    {
      action: 'restaurant',
      title: 'Dining',
      active: true,
      children: [
        { title: 'Breakfast & brunch' },
        { title: 'New American' },
        { title: 'Sushi' },
      ],
    },
    {
      action: 'school',
      title: 'Education',
      children: [
        { title: 'List Item' },
      ],
    },
    {
      action: 'directions_run',
      title: 'Family',
      children: [
        { title: 'List Item' },
      ],
    },
    {
      action: 'healing',
      title: 'Health',
      children: [
        { title: 'List Item' },
      ],
    },
    {
      action: 'content_cut',
      title: 'Office',
      children: [
        { title: 'List Item' },
      ],
    },
    {
      action: 'local_offer',
      title: 'Promotions',
      children: [
        { title: 'List Item' },
      ],
    },
  ];
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