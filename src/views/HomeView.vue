<template>
  <div class="home-view">
    <transition name="fade">
      <my-spinner v-if="loading"/>
      <my-gallery v-else :items="items"/>
    </transition>
  </div>
</template>

<script>

import MyGallery from '@/components/MyGallery.vue'
import MySpinner from '@/components/MySpinner.vue'


export default {
  name: 'HomeView',
  components: {
    MyGallery,
    MySpinner
  },
  data(){
    return {
      items: [],
      loading: false
    }
  },
  async created() {
    this.loading = true
    await this.getData()
    this.loading = false
  },
  methods: {
    async getData(){
      await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=gzjNaV-ALYJr_j_kMbxcWG0TsYpImxzutFyFB1nRmSAdrjrW91ZLKhm8SpaHb41sEXFEt-5Fsjx7rQX6dnYsvzdtSOBTQJJGm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnIZotgLJRKZ5JeP1WSZZjk_gc8mB_imkg4kAe6ONjdrsDTh8wx4sqqykQypKVE8cx941idI6grXz&lib=MrLHWzKqYum5nWZXb9DjOfzM3DsLC6oa1')
        .then(response => response.json())
        .then(json => {
          this.items=json
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.home-view {
  @include flex-vertical-center;
  margin: 20px 0;

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }

}

@media screen and (max-width: $viewport-size) {

  .my-gallery {
    padding: 0 20px;
  }
}

</style>
