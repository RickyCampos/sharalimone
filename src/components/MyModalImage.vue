<template>
  <div class="my-modal-image">
    <transition name="fade" mode="out-in">
      <my-modal v-if="show" :title="title" @clickoutside="$emit('clickoutside')">
        <div :style="image" class="image"/>
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
    title: String,
    show: Boolean
  },
  computed: {
    image: function(){
      return { backgroundImage: `url(${this.src})` }
    }
  },
}
</script>

<style lang="scss" scoped>

  .my-modal-image {
    z-index: 1;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .8s ease;
  }
  
  .image {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 100%;
    height: 100%;
    max-width: 100%;
  }

</style>
