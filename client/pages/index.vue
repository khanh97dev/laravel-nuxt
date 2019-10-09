<template>
  <v-app>
    <v-row align="center" justify="center">
      <carousel>
        <img v-for="(src, i) in images" :key="i":src="src"> </img>
      </carousel>
    </v-row>
</v-app>
</template>
<script>
export default {
  mounted(){
    this.$router.push('/login')
  },// mounted
  data(){
    return {
      images: [
        'https://picsum.photos/500/300?image=41',
        'https://picsum.photos/500/300?image=42',
        'https://picsum.photos/500/300?image=43',
        'https://picsum.photos/500/300?image=44',
        'https://picsum.photos/500/300?image=45',
      ]
    }
  },//data
}
</script>