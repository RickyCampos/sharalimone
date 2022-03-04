<template>
  <div class="my-menu">
    <div class="logo">
      <img src="@/assets/images/sharalimone-logo.png" alt="">
    </div>
    <nav class="navigation">
      <router-link to="/">PORTFOLIO</router-link>
      <router-link to="/contacto">CONTACTO</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'MyMenu'
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .my-menu {
    background-color: $color-light;
    margin: 0 auto;
    width: 100%;
    max-width: $viewport-size;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;

    .logo{
      display: flex;
      align-items: center;

      img {
        width: auto;
        height: 60px;
      }
      p {
        margin-left: 10px;
        font-size: 1.5rem;
      }
    }

    .navigation {
      display: flex;
      flex-direction: row;
      align-items: center;

      a {
        padding: 15px;
        color: $color-dark;
        @include font-weight(bold);
        transition: .5s all ease;

        &:hover {
          color: $color-primary;
        }



      }

      .router-link-exact-active {
        color: $color-primary;
      }
    }
  }

@media screen and (max-width: $viewport-size-mobile) {
  .my-menu {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
