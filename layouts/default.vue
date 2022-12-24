<template>
  <div>
    <div class="menu-container">
      <ChatieLogo />
      <div class="nav-container">
        <transition name="nav-slide" appear>
          <div v-if="signedIn">
            <p>Signed In!</p>
          </div>
        </transition>
        <transition name="button">
          <div v-if="!signedIn">
            <NuxtLink to="/login"><button>Sign In</button></NuxtLink>
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

.button-enter-active,
.button-leave-active {
  transition: all 0.5s ease;
}

.button-enter-from,
.button-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.nav-slide-enter-active,
.nav-slide-leave-active {
  transition-property: opacity;
  transition-delay: 0.5s;
  transition-duration: 0.25s;
}
.nav-slide-enter,
.nav-slide-leave-to {
  opacity: 0;
}
</style>
