<template>
  <div class="container">
    <div class="chat-container">
      <div class="card">
        <h1>👋 Welcome to Chatie!</h1>
        <p>
          We're excited to provide you with a fast, reliable, and secure way to
          communicate with your friends and loved ones.
        </p>
      </div>
      <div class="card">
        <p>
          Chatie is designed with simplicity in mind, making it easy for you to
          send messages with just a few taps.
        </p>
      </div>
      <div class="card">
        <p>
          Plus, with end-to-end encryption, you can be confident that your
          conversations are private and secure. So why wait? Download Chatie now
          and start chatting with your friends and loved ones today!
        </p>
      </div>
      <div id="cta" class="card">
        <NuxtLink to="/signup">
          <p>
            Get Started <font-awesome-icon :icon="['fas', 'arrow-right']" />
          </p>
        </NuxtLink>
      </div>
    </div>
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
  grid-template: 1fr / 1fr;
  justify-items: stretch;
  padding-top: 10px;
}

.chat-container {
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: minmax(max-content, 600px);
  justify-content: center;
  grid-row-gap: 20px;
}

.card {
  width: max-content;
  height: max-content;
  max-width: 350px;
  padding: 10px 15px 0 15px;

  svg {
    padding-left: 5px;
  }

  * > {
    padding: 0;
    margin: 0;
  }
}

.card:nth-of-type(even) {
  justify-self: end;
  background-color: rgb(248, 222, 177);
}

#cta {
  display: grid;
  justify-items: center;

  * > {
    padding: 0;
    margin: 0;
  }
}
</style>
