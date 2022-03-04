<template>
  <div class="my-modal">
    <div class="backdrop" @click.self="$emit('clickoutside')">
      <div class="my-modal-container" @contextmenu.prevent>
        <span class="close" @click.self="$emit('clickoutside')"/>
        <slot></slot>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'MyModal'
}
</script>

<style lang="scss" scoped>
  .backdrop {
    width: 100vw;
    height: 100vh;
    background: $color-dark;
    background-color: rgba(0,0,0,0.8);
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
  }

  .my-modal-container {
    max-width: 90%;
    max-height: 90%;
    position: fixed;
    left: 50%;
    top: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background-color: $color-light;
    z-index: 1;
    display: flex;

    @media screen and (max-width: $viewport-size-mobile) {
      max-width: 100%;
      max-height: 100%;
      width: 100%;
      height: 100%;
    }

    .close {
      position: absolute;
      right: 32px;
      top: 32px;
      width: 32px;
      height: 32px;
      opacity: 0.3;
      cursor: pointer;
      transition: all .5s ease;

      &:hover {
        opacity: 1;
      }
      &:before, &:after {
        position: absolute;
        left: 15px;
        content: '';
        height: 33px;
        width: 2px;
        background-color: $color-dark;
      }

      &:before {
      transform: rotate(45deg);
      }
      &:after {
        transform: rotate(-45deg);
      } 
    }
}

</style>
