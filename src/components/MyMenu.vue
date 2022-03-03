<template>
  <div class="my-menu">
    <div class="logo">
      <img src="@/assets/images/sharalimone-profile.png" alt="">
    </div>
    <div class="title">
      <h1>🍋 Shara Limone 🍋</h1>
    </div>
    <nav class="navigation">
      <router-link to="/">Home</router-link> |
      <router-link to="/contacto">Contacto</router-link>
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
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 80px;

    .logo > img {
      width: 80px;
    }
    .title {
      @include flex-vertical-center;
      h1 {
        font-size: 2rem;
      }
    }

    .navigation {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
</style>
