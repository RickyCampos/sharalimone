<template>
  <div class="my-gallery-item">
      <img :src="item.url" alt="" />
      <div class="transparent-box">
        <div class="text">
          <p>TEXTOOOOOOO</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'MyGalleryItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>


.my-gallery-item {
  border: 2px solid $color-dark;
  box-sizing: content-box;
  margin: 10px;
  overflow: hidden;
  display: inline-block;
  color: $color-dark;
  position: relative;
  background-color: $color-dark;

  &:hover {
    cursor: pointer;

    img { 
      transform: scale(1.1);
    }

    .transparent-box {
      background-color:rgba($color-primary, 0.8);
    }

    .text {
      transform: translateY(-20px);
      opacity: 1.0;
    }
  } 

  img {
    width: 100%;
    height: 100%;
    transition: transform 0.4s ease;
    object-fit: cover;
  }
  .text {
    transform: translateY(20px);
    opacity: 0.0;
    transition: transform 0.3s ease, opacity 0.3s ease;
    font-weight: bold;
  }

  .transparent-box {
    height: 100%;
    width: 100%;
    background-color:rgba($color-primary, 0);
    position: absolute;
    top: 0;
    left: 0;
    transition: background-color 0.3s ease;
    @include flex-vertical-center;
  }
}

</style>
