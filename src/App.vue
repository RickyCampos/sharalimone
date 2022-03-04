<template>
  <div id="app">
    <my-menu/>
    <router-view/>
    <my-footer/>
  </div>
</template>
<script>

import MyMenu from '@/components/MyMenu.vue'
import MyFooter from '@/components/MyFooter.vue'

export default {
  name: 'App',
  components: {
    MyMenu,
    MyFooter
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
