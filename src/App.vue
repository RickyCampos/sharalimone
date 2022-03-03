<template>
  <div id="app">
    <my-menu/>
    <router-view/>
  </div>
</template>
<script>

import MyMenu from '@/components/MyMenu.vue'

export default {
  name: 'App',
  components: {
    MyMenu
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
