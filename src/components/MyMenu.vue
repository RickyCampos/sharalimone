<template>
  <div class="my-menu">
    <div class="logo">
      <img src="@/assets/images/sharalimone-logo.png" alt="">
    </div>

    <div class="nav-menu" :class="{ active: isActive }">
      <router-link to="/strips" @click.native="setActive(false)">VIÑETAS</router-link>
      <router-link to="/walls" @click.native="setActive(false)">MUROS</router-link>
      <router-link to="/merchandising" @click.native="setActive(false)">MERCHANDISING</router-link>
      <router-link to="/contacto" @click.native="setActive(false)">CONTACTO</router-link>
    </div>
    <div class="nav-menu-responsive">
      <font-awesome-icon v-if="!isActive" icon="fa-solid fa-bars" class="hamburger" @click="setActive(true)" />
      <font-awesome-icon v-if="isActive" icon="fa-solid fa-xmark" class="hamburger" @click="setActive(false)"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyMenu',
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    setActive(active){
      this.isActive = active
    }
  }
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
    align-items: center;
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

    .nav-menu {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-left: auto;

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
    .hamburger {
      display: none;
      font-size: 25px;
    }
  }

@media only screen and (max-width: $viewport-size-mobile) {
  .my-menu {
    .nav-menu {
      position: fixed;
      left: -100%;
      top: 5rem;
      flex-direction: column;
      background-color: #fff;
      width: 100%;
      border-radius: 10px;
      text-align: center;
      transition: 0.3s;
      box-shadow:
          0 10px 27px rgba(0, 0, 0, 0.05);

      &.active {
        left: 0;
      }
    }
    .hamburger {
      width: 50px;
        display: block;
        cursor: pointer;
    }
  }
}
</style>
