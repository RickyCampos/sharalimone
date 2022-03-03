<template>
  <div class="home-view">
    <my-gallery/>
  </div>
</template>

<script>
// @ is an alias to /src
import MyGallery from '@/components/MyGallery.vue'

export default {
  name: 'HomeView',
  components: {
    MyGallery
  }
}
</script>

<style lang="scss" scoped>
.home-view {
  @include flex-vertical-center;

  .my-gallery {
    margin-top: 30px;
  }
}

</style>
