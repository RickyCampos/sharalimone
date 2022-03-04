<template>
  <div class="my-footer">
    <div class="social">
      <font-awesome-icon @click="goto('https://www.facebook.com/SharaLimone')" icon="fa-brands fa-facebook-f" />
      <img src="@/assets/images/sharalimone-profile.png" alt="">
      <font-awesome-icon @click="goto('https://www.instagram.com/sharalimone')" icon="fa-brands fa-instagram" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyFooter',
  methods: {
    goto(url) {
      window.open(url)
    },
  }
}

</script>

<style lang="scss" scoped>
  .my-footer {
    margin: 0 auto;
    width: $viewport-size;
    height: 80px;
    min-height: 80px;
    background-color: $color-light;
    @include flex-vertical-center;
    .social {
      width: 200px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      svg {
        width: 30px;
        height: 30px;
        cursor: pointer;
        transition: color .4s ease;
        &:hover {
          color: $color-primary;
        }
      }
      img {
        width: 60px;
      }
    }
  }
</style>
