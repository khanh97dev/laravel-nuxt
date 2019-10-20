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
    <div id="gallery" style="display:none;">
        <img alt="Image 2 Title" src="https://picsum.photos/id/45/500/500"
          data-image="https://picsum.photos/id/45/1500/1200"
          data-description="Image 2 Description">
        <img alt="Image 2 Title" src="https://picsum.photos/id/46/500/500"
          data-image="https://picsum.photos/id/46/1500/1200"
          data-description="Image 2 Description">
      </div>
  </v-app>
</template>
<script>
  export default {
    layout: 'admin',
    mounted() {
      // function loadUnitegallery(){
        let styles = [
          'https://cdnjs.cloudflare.com/ajax/libs/unitegallery/1.7.40/css/unite-gallery.css',
          'https://cdnjs.cloudflare.com/ajax/libs/unitegallery/1.7.40/themes/default/ug-theme-default.min.css'
        ];
        let scripts = [
          {
            key: 'unitegallery',
            src: 'https://cdnjs.cloudflare.com/ajax/libs/unitegallery/1.7.40/js/unitegallery.min.js',
          },
          {
            key: 'last',
            src: 'https://cdnjs.cloudflare.com/ajax/libs/unitegallery/1.7.40/themes/default/ug-theme-default.min.js'
          }
        ];
        styles.forEach( href => {
          let link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = href;
          document.head.appendChild(link);
        });
        scripts.forEach( item => {
          let script = document.createElement('script');
          script.src = item.src;
          // then init unitegallery
          if(item.key === 'last'){
            script.onload = function (){
              jQuery("#gallery").unitegallery();
            }
          }
          document.head.appendChild(script);
        });
      // }
    },
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