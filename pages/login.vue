<template>
  <div class="card">
    <v-form ref="login">
      <h2 id="header">Sign in to your account</h2>
      <div class="input-group">
        <label for="email">Email</label>
        <input id="email" type="text" name="email" />
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input id="password" type="password" name="password" />
      </div>

      <div class="row-container">
        <v-btn outlined color="accent" elevation="2" to="/signup"
          >Sign Up</v-btn
        >
        <v-btn color="accent" elevation="2" to="/">Sign In</v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  layout: 'loginLayout',
  methods: {
    login() {},
  },
})
</script>

<style scoped lang="scss">
form {
  display: grid;
  grid-template: repeat(4, auto) / 1fr;
  grid-row-gap: 20px;
  justify-content: stretch;

  h2 {
    padding: 0;
    margin: 0;
  }
}

.row-container {
  display: grid;
  grid-auto-flow: column;
  padding: 0;
  margin: 0;
  justify-content: center;
  grid-gap: 20px;
}

.input-group {
  display: grid;
  grid-template: auto auto / 1fr;

  label {
    padding: 5px 0;
    margin: 0;
  }
}

button {
  margin: 10px 0;
  justify-self: center;
}
</style>
