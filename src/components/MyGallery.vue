<template>
  <div class="my-gallery">
    <div class="my-gallery-list">
      <my-gallery-item :class="{featured: item.featured}" @click.native="loadImage(item.url)" v-for="(item, index) in items" :key="index" :item="item"/>
    </div>
    <my-modal-image :src="srcImageLoaded" :show="showImage" @clickoutside="showImage=false"/>
  </div>
</template>

<script>
import MyGalleryItem from '@/components/MyGalleryItem.vue'
import MyModalImage from '@/components/MyModalImage.vue'

export default {
  name: 'MyGallery',
  components: { MyGalleryItem, MyModalImage},
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      showImage: false,
      srcImageLoaded: null
    }
  },
  methods: {
    loadImage(src){
      this.srcImageLoaded = src
      this.showImage = true

    }
  }
}
</script>

<style lang="scss" scoped>
.my-gallery {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.my-gallery-list {
  width: 100%;
  max-width: $viewport-size;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 250px;
  grid-auto-flow: dense;

  .my-gallery-item {
    &.featured {
      grid-column: span 2;
      grid-row: span 2;
    }
  }

}
</style>
