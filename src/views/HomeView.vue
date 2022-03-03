<template>
  <div class="home-view">
    <my-header/>
    <my-gallery/>
  </div>
</template>

<script>
// @ is an alias to /src
import MyGallery from '@/components/MyGallery.vue'
import MyHeader from '@/components/MyHeader.vue'

export default {
  name: 'HomeView',
  components: {
    MyGallery,
    MyHeader
  }
}
</script>

<style lang="scss" scoped>
.home-view {
  @include flex-vertical-center;
}

</style>
