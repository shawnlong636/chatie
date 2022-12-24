<template>
  <form action="/" target="_self">
    <h2 id="header">Sign in to your account</h2>
    <div class="input-group">
      <label id="email-label" for="email">Email</label>
      <input id="email" type="text" name="email" />
    </div>
    <div class="input-group">
      <label id="password-label" for="password">Password</label>
      <input id="password" type="password" name="password" />
    </div>

    <button type="submit">Sign In</button>
  </form>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  layout: 'loginLayout',
})
</script>

<style scoped lang="scss">
form {
  display: grid;
  grid-template: repeat(4, auto) / 1fr;
  grid-row-gap: 20px;

  h2 {
    padding: 0;
    margin: 0;
  }
}

.input-group {
  display: grid;
  grid-template: auto auto / 1fr;

  label {
    padding: 5px 0;
    margin: 0;
  }
}
input {
  border: 2px solid lightslategray;
  box-shadow: 0 0 1px gray;
  border-radius: 5px;
  height: 30px;
  outline: none;

  &:focus {
    border: 2px solid $accent;
  }
}

button {
  margin: 20px 0;
  width: 100px;
  justify-self: center;
}
</style>
