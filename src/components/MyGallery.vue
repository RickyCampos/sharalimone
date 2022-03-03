<template>
  <div class="my-gallery">
    <my-gallery-item v-for="(item, index) in items" :key="index" :item="item"/>
  </div>
</template>

<script>
import MyGalleryItem from '@/components/MyGalleryItem.vue'
export default {
  name: 'MyGallery',
  components: { MyGalleryItem },
  data() {
    return {
      items: [
        {
          url: 'https://i.imgur.com/m7oOwra.jpg',
          text: 'HOLA',
        },
        {
          url: 'https://i.imgur.com/l2VPaoe.jpg',
          text: 'HOLA',
        },
        {
          url: 'https://i.imgur.com/m7oOwra.jpg',
          text: 'HOLA',
        },
        {
          url: 'https://i.imgur.com/m7oOwra.jpg',
          text: 'HOLA',
        },
        {
          url: 'https://i.imgur.com/l2VPaoe.jpg',
          text: 'HOLA',
        },
        {
          url: 'https://i.imgur.com/m7oOwra.jpg',
          text: 'HOLA',
        },
        {
          url: 'https://i.imgur.com/m7oOwra.jpg',
          text: 'HOLA',
        },
        {
          url: 'https://i.imgur.com/m7oOwra.jpg',
          text: 'HOLA',
        },
        {
          url: 'https://i.imgur.com/m7oOwra.jpg',
          text: 'HOLA',
        },
        {
          url: 'https://i.imgur.com/m7oOwra.jpg',
          text: 'HOLA',
        },
        {
          url: 'https://i.imgur.com/m7oOwra.jpg',
          text: 'HOLA',
        },
        {
          url: 'https://i.imgur.com/m7oOwra.jpg',
          text: 'HOLA',
        },
        {
          url: 'https://i.imgur.com/m7oOwra.jpg',
          text: 'HOLA',
        },
        {
          url: 'https://i.imgur.com/m7oOwra.jpg',
          text: 'HOLA',
        },
        {
          url: 'https://i.imgur.com/m7oOwra.jpg',
          text: 'HOLA',
        },
        {
          url: 'https://i.imgur.com/m7oOwra.jpg',
          text: 'HOLA',
        },
        {
          url: 'https://i.imgur.com/m7oOwra.jpg',
          text: 'HOLA',
        },
        {
          url: 'https://i.imgur.com/m7oOwra.jpg',
          text: 'HOLA',
        },
        {
          url: 'https://i.imgur.com/m7oOwra.jpg',
          text: 'HOLA',
        },
        {
          url: 'https://i.imgur.com/m7oOwra.jpg',
          text: 'HOLA',
        },
        {
          url: 'https://i.imgur.com/m7oOwra.jpg',
          text: 'HOLA',
        },
        {
          url: 'https://i.imgur.com/m7oOwra.jpg',
          text: 'HOLA',
        },
        {
          url: 'https://i.imgur.com/m7oOwra.jpg',
          text: 'HOLA',
        },
        {
          url: 'https://i.imgur.com/m7oOwra.jpg',
          text: 'HOLA',
        },
        {
          url: 'https://i.imgur.com/m7oOwra.jpg',
          text: 'HOLA',
        },
        {
          url: 'https://i.imgur.com/m7oOwra.jpg',
          text: 'HOLA',
        },
        {
          url: 'https://i.imgur.com/m7oOwra.jpg',
          text: 'HOLA',
        },
        {
          url: 'https://i.imgur.com/m7oOwra.jpg',
          text: 'HOLA',
        },
        {
          url: 'https://i.imgur.com/m7oOwra.jpg',
          text: 'HOLA',
        },
        {
          url: 'https://i.imgur.com/m7oOwra.jpg',
          text: 'HOLA',
        },
        {
          url: 'https://i.imgur.com/m7oOwra.jpg',
          text: 'HOLA',
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.my-gallery {
  width: 100%;
  max-width: $viewport-size;
  overflow: hidden;
  display: grid;
  grid-auto-rows: 15rem;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
</style>
