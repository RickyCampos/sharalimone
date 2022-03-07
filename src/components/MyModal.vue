<template>
  <div class="my-modal">
    <div class="backdrop" @click.self="$emit('clickoutside')">
      <div class="my-modal-container" @contextmenu.prevent>
        <div class="header">  
          <h2 class="title">{{title}}</h2>
          <font-awesome-icon icon="fa-solid fa-xmark" class="close" @click="$emit('clickoutside')"/>
        </div>
        <div class="container">
          <slot></slot>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'MyModal',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .backdrop {
    width: 100vw;
    height: 100vh;
    background-color: rgba($color-dark,0.8);
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
  }

  .my-modal-container {
    max-width: 90%;
    max-height: 90%;
    width: 100%;
    height: 100%;
    position: fixed;
    left: 50%;
    top: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background-color: $color-light;
    z-index: 1;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: $viewport-size-mobile) {
      max-width: 100%;
      max-height: 100%;
      width: 100%;
      height: 100%;
    }

    .header {
      padding: 15px;
      display: flex;
      justify-content: space-between;
      align-content: center;
      // background-color: $color-gray-light;
      border-bottom: 1px solid $color-gray-dark;

      .close {
        font-size: 30px;
        cursor: pointer;

        &:hover {
        color: $color-primary;
        }
      }
    } 
    .container {
      width: 100%;
      height: 100%;
      padding: 20px;
    }


}

</style>
