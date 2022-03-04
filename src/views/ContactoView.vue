<template>
  <div class="contacto-view">
    <h1>Contacto</h1>
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
    max-width: $viewport-size / 2;
    width: 100%;
    margin: 30px auto 0 auto;

    p {
      margin-top: 20px;
    }

    .contact-form {
      margin-top: 30px;
    }
  }
</style>