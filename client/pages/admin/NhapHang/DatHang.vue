<template>
  <div>
    <v-row
      align="center"
    >
      <v-col class="py-0">
        <v-select
          @change="onChange()"
          :items="ncc"
          v-model="viewProductNhaCC"
          label="Xem sản phẩm nhà cung cấp"
        ></v-select>
      </v-col>
      <v-col class="py-0">
        <v-row>
          <v-text-field
            v-model="evalInput"
            label="Tính toán"
          >
          </v-text-field>
          <v-chip
            label
          >{{ evalThenCalutor }}</v-chip>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="py-0">
        <v-text-field
          v-model="filterProductNhaCCAndDat"
          label="Lọc sản phẩm"
        ></v-text-field>
      </v-col>
      <v-col class="py-0">
        <v-select
          :items="ncc"
          v-model="filterProductNhaCCAndDat"
          label="Lọc sản phẩm đã đặt từ nhà cung cấp"
        ></v-select>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default{
  fetch({ $axios }){

  },
  watch: {
    'evalInput'(val){
      try {
        // let calculator = eval(val);
        this.evalThenCalutor = eval(val);
      } catch(e) {
      }
    }
  },//watch
  data(){
    return {
      ncc: [
        'ncc 1',
        'ncc 2',
        'ncc 3'
      ],
      evalInput: 0,
      evalThenCalutor: 0,
      viewProductNhaCC: '',
      filterProductNhaCCAndDat: null
    }
  },//data
  methods:{
    onChange() {
        if(!confirm('check')) this.viewProductNhaCC = ''
    }
  },//methods
}
</script>