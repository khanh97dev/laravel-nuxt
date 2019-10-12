<template>
  <hot-table
    :data="data"
    :colHeaders="true"
    :rowHeaders="true"
    :width="'auto'"
    :columns="columns"
    :height="'auto'"
  >

  </hot-table>
</template>
<script>
  import { HotTable } from '@handsontable/vue';
  const dataDemo = require('~/static/demo/data').default

  export default {
    layout: 'admin',
    components: {
      HotTable
    },

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
  }
</script>