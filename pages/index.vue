<template>
  <div class="container">
    <h1>Welcome to Chatie</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>

<style scoped lang="scss">
h1 {
  padding: 0;
  margin: 0;
}

.container {
  display: grid;
  justify-content: center;
}
</style>
