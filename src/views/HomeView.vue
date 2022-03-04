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
      await fetch('https://script.google.com/macros/s/AKfycbyq_Ym8suRTHCJl1QauLhTqZwuxeJcPtc3c2c2YYOrfvZbhJok2/exec')
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

</style>
