<template>
  <div class="my-spinner">
    <img src="@/assets/images/lemon.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'MySpinner'
}
</script>

<style lang="scss" scoped>

  .my-spinner {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);

    img {
      width: 100%;
      animation: rotation 3s;
      animation-timing-function: cubic-bezier(.43,.84,.61,.14); 
      animation-iteration-count: infinite;

      @keyframes rotation {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(1260deg);
        }
      }
    }




  }

</style>
