<template>
  <v-app>
    <carousel :autoplay="true" :nav="false" :dots="false" :items="1">
      <v-img
        v-for="(src, index) in images" :key="index" :src="src" @dblclick="showImg(index)"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="200px"
      >
        <v-card-title> Head </v-card-title>
      </v-img>
    </carousel>
    <vue-easy-lightbox :visible="visible" :imgs="images" :index="indexImg" @hide="visible = false"></vue-easy-lightbox>

  </v-app>
</template>
<script>
  export default {
    layout: 'admin',
    data() {
      return {
        visible: false,
        indexImg: 0,
        images: [
          'https://picsum.photos/id/45/1500/500',
          'https://picsum.photos/id/45/1500/500',
        ]
      }
    }, //data
    methods: {
      showImg(index) {
        this.indexImg = index
        this.visible = true
      },
      handleHide() {
        this.visible = false
      }
    }, // methods
  }
</script>