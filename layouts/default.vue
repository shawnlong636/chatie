<template>
  <v-app :style="{ background: $vuetify.theme.themes['light'].background }">
    <div class="outer-container">
      <div class="menu-container">
        <ChatieLogo />
        <div class="nav-container">
          <div v-if="$auth.loggedIn">
            <p>Signed In!</p>
          </div>
          <div v-else>
            <v-btn color="accent" elevation="0" to="/login">Sign In</v-btn>
          </div>
        </div>
      </div>
      <Nuxt />
    </div>
  </v-app>
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
.menu-container {
  width: 100%;
  display: grid;
  justify-content: start;
  align-items: center;
  grid-template: 1fr / 1fr 1fr;
}

.nav-container {
  // width: 100%;
  justify-self: flex-end;

  display: flex;
  justify-content: flex-end;
}
</style>
