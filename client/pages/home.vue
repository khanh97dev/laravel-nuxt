<template>
  <card :title="$t('home')">
    {{ $t('you_are_logged_in') }}
      <v-btn @click="setDataNotifyEmail">Set Data Email</v-btn>
  </card>
</template>

<script>
export default {
  middleware: 'auth',
  layout: 'admin',
  head () {
    return { title: this.$t('home') }
  },
  mounted() {
    setTimeout(() => {
      this.$store.commit('notifies/SET_EMAIL', [
        {
          name: 'John Leider',
          img: 'https://cdn.vuetifyjs.com/images/john.jpg',
          msg: 'Founder of Vuetify.js'
        },
        {
          name: 'John Leider',
          img: 'https://cdn.vuetifyjs.com/images/john.jpg',
          msg: 'Founder of Vuetify.js'
        },
        {
          name: 'John Leider',
          img: 'https://cdn.vuetifyjs.com/images/john.jpg',
          msg: 'Founder of Vuetify.js'
        },
        {
          name: 'John Leider',
          img: 'https://cdn.vuetifyjs.com/images/john.jpg',
          msg: 'Founder of Vuetify.js'
        },
      ])
    }, 2000)
  }, //mounted
  methods:{
    setDataNotifyEmail(){

      this.$store.commit('notifies/SET_EMAIL', [
        {
          name: 'John Leider',
          img: 'https://cdn.vuetifyjs.com/images/john.jpg',
          msg: 'Founder of Vuetify.js'
        },
        {
          name: 'John Leider',
          img: 'https://cdn.vuetifyjs.com/images/john.jpg',
          msg: 'Founder of Vuetify.js'
        }
      ])
    }
  },//methods
}
</script>
