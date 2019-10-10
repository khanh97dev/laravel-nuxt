<template>
  <v-menu
    :close-on-content-click="false"
    :nudge-width="200"
    offset-y
  >
    <template v-slot:activator="{ on }">
      <v-btn
        icon
        v-on="on"
      >
        <v-badge
          color="green"
          overlap
          :value="count"
        >
          <template v-slot:badge>
            <span>{{ count }}</span>
          </template>
          <v-icon large>{{ icon || mdi-notifications }}</v-icon>
        </v-badge>
      </v-btn>
    </template>
    <v-card>
      <v-list v-for="(item, i) in notifies" :key="i">
        <v-list-item>
          <v-list-item-avatar>
            <img :src="item.img" :alt="item.name">
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.msg }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>
<script>
export default{
  watch: {
    '$store.state.notifies.email'(val){
      return this.notifies = val
    },
  },//watch
  data(){
    return {
      icon: 'mdi-email',
      notifies: this.$store.state.notifies.email
    }
  },//data
  computed: {
    count: {
      get(){
        return this.notifies.length
      }
    },
  },//computed
}
</script>
