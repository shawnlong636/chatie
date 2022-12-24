<template>
  <div class="container">
    <ChatieLogo class="chatie-logo" />
    <div class="card">
      <Nuxt />
    </div>
  </div>
</template>

<style lang="scss">
.container {
  display: grid;
  justify-content: center;
}
.card {
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.28);
  padding: 30px;
}

.chatie-logo {
  justify-self: start;
  padding-top: 0;
  padding-left: 30px;
  padding-bottom: 30px;
}
</style>
