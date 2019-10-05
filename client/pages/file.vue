<template>
  <pre>
    {{ file }}
  </pre>
</template>
<script>
import file from '@/static/setting.json'

export default {
  data: () => ({
    file: file,
  })
}
</script>