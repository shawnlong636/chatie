<template>
  <div class="outer-container">
    <div class="menu-container">
      <ChatieLogo />
      <div class="nav-container">
        <div v-if="signedIn">
          <p>Signed In!</p>
        </div>
        <transition name="button">
          <div v-if="!signedIn">
            <NuxtLink to="/login">
              <button class="button-fill">Sign In</button>
            </NuxtLink>
          </div>
        </transition>
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      signedIn: false,
    }
  },
  methods: {
    signIn() {
      this.signedIn = true
    },
  },
})
</script>

<style scoped lang="scss">
a:focus {
  outline: none;
}
.menu-container {
  width: 100%;
  display: flex;
  justify-content: flex-start;
}

.nav-container {
  width: 100%;
  justify-self: flex-end;

  display: flex;
  justify-content: flex-end;
}

p {
  padding: 0;
  margin: 0;
}

.outer-container {
  display: grid;
  grid-auto-flow: row;
  grid-template: 1fr / 1fr;
}
</style>
