<template>
  <div id="app">
    <my-menu/>
    <router-view class="view"/>
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
  height:100vh;
  display: flex;
  flex-direction: column;

  .my-menu {
    position: fixed;
    top: 0;
    z-index: 1;
    left: 50%;
    transform: translateX(-50%);
  }

  .view {
    margin-top: 80px;

    @media screen and (max-width: $viewport-size-mobile) {
      margin-top: 126px;
    }
  }

  .my-footer {
    margin: auto auto 0 auto;
  }
}
</style>
