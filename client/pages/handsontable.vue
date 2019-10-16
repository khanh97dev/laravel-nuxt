<template>
  <div>
    <hot-table
      :data="data"
      :colHeaders="true"
      :rowHeaders="true"
      :width="'auto'"
      :columns="columns"
      :height="500"
    >
    </hot-table>
    <!-- Pagination -->
    <v-pagination
      v-model="page"
      :length="4"
      prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right"
    ></v-pagination>
  </div>
</template>
<script>

  import { HotTable } from '@handsontable/vue';
  const dataDemo = require('~/static/demo/data').default

  export default {
    layout: 'admin',
    components: {
      HotTable
    },
    computed: {
      page: {
        get(){
          return parseInt(this.$route.query.page) || 1
        },
        set(page){
          this.handlePage(page);
          return page;
        }
      }
    },//computed
    data: function() {
      return {
        data: dataDemo,
        columns: [
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              td.className += 'pink darken-1'
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              td.className += 'purple darken-1'
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              td.className += 'red darken-1'
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
          {
            renderer: function(instance, td, row, col, prop, value, cellProperties){
              if(value) return td.innerHTML = value;
              else return td.innerHTML = 'Not found'
            }
          },
        ]
      };
    },
    methods:{
      handlePage(page){
        // set query
        this.$router.push({ query: { page } })
        // handle
        console.log(page)
      }
    },//methods
  }
</script>