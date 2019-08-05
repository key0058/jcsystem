<template>
  <div id="app">
      <LoginPanel />
  </div>
</template>

<script>
import LoginPanel from '@/components/LoginPanel.vue'

export default {
  name: 'app',
  components: {
    LoginPanel
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
