<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <nuxt-link :to="prefixAdmin">Không có trang</nuxt-link>
  </div>
</template>

<script>
import { prefixAdmin } from '~/configs/prefix'
export default {
  props: ['error'],
  data() {
    return {
      prefixAdmin: prefixAdmin
    }
  },// data
}
</script>