<template>
  <div class="my-modal-image">
    <transition name="fade" mode="out-in">
      <my-modal v-if="show" @clickoutside="$emit('clickoutside')">
        <img :src="src" alt="">
      </my-modal>
    </transition>
  </div>
</template>

<script>
import MyModal from '@/components/MyModal.vue'

export default {
  name: 'MyModalImage',
  components: {
    MyModal
  },
  props: {
    src: String,
    show: Boolean
  }
}
</script>

<style lang="scss" scoped>

 .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s ease;
  }
  
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;

    @media screen and (max-width: $viewport-size-mobile) {
      object-fit: contain;
    }
  }

</style>
