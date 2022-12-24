<template>
  <div class="card">
    <form>
      <h2 id="header">Create your account</h2>
      <div class="input-group">
        <label for="email">Email</label>
        <input id="email" type="text" name="email" />
      </div>
      <div class="input-group">
        <label for="full-name">Full Name</label>
        <input id="full-name" type="text" name="full-name" />
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input id="password" type="password" name="password" />
      </div>
      <div class="row-container">
        <NuxtLink to="/login">
          <button type="button" class="button-fill">Create account</button>
        </NuxtLink>
      </div>
    </form>
  </div>
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
  grid-template: repeat(6, auto) / 1fr;
  grid-row-gap: 20px;

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
  margin: 10px 0;
  width: auto;
  justify-self: center;
}
.card {
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.28);
  padding: 30px;
}
</style>
