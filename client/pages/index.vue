<template>
  <v-app>
    <v-row align="center" justify="center">
      <vue-picture-swipe v-for="key in 1" :key="key" :items="[
          {src: 'https://picsum.photos/1200/900?image=' + 1, thumbnail: 'https://picsum.photos/600/400?image=' + 1, w: 600,h: 400, title: 'Piture' + 1},
          {src: 'https://picsum.photos/1200/900?image=' + 2, thumbnail: 'https://picsum.photos/600/400?image=' + 2, w: 600,h: 400, title: 'Piture' + 2},
          {src: 'https://picsum.photos/1200/900?image=' + 3, thumbnail: 'https://picsum.photos/600/400?image=' + 3, w: 600,h: 400, title: 'Piture' + 3},
          {src: 'https://picsum.photos/1200/900?image=' + 4, thumbnail: 'https://picsum.photos/600/400?image=' + 4, w: 600,h: 400, title: 'Piture' + 4},
          {src: 'https://picsum.photos/1200/900?image=' + 5, thumbnail: 'https://picsum.photos/600/400?image=' + 5, w: 600,h: 400, title: 'Piture' + 5},
        ]"></vue-picture-swipe>
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