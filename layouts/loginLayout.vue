<template>
  <div class="container">
    <ChatieLogo class="chatie-logo" />
    <Nuxt />
  </div>
</template>

<style lang="scss">
.container {
  display: grid;
  justify-content: center;
}

.chatie-logo {
  justify-self: start;
  padding-top: 0;
  padding-left: 30px;
  padding-bottom: 30px;
}
</style>
