<template>
  <div class="contacto-view">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quos error accusamus illo quaerat culpa cumque inventore adipisci repudiandae. Sed modi enim architecto aliquid beatae commodi earum maiores sint ipsum?</p>
    <contact-form/>
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue'


export default {
  name: 'ContactoView',
  components: {
    ContactForm
  }
}

</script>

<style lang="scss" scoped>
  .contacto-view {
    text-align: center;
    max-width: $viewport-size / 2;
    width: 100%;
    margin: 30px auto 0 auto;

    @media screen and (max-width: $viewport-size / 2) {
      max-width: 100%;
      padding: 0 20px;
    }

    p {
      margin-top: 20px;
    }

    .contact-form {
      margin-top: 30px;
    }
  }
</style>