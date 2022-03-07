<template>
  <div class="contacto-view">
    <my-spinner v-if="loading"/>

    <div class="contacto-view-container">
      <contact-form v-if="status === 'form' && !loading" @showLoading="loading = $event" @setStatus="status = $event"/>
      
      <div v-if="status === 'success'" class="success">
        <h2>Gracias por ponerte en contacto conmigo. En poco tiempo tendrás noticias mías.</h2>
      </div>

      <div v-if="status === 'error'" class="error">
        <h2>Parece que ha ocurrido un error. Por favor, intentalo de nuevo más tarde o ponte en contacto
        conmigo a través de mis redes sociales.</h2>
        
      </div>
    </div>


    
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue'
import MySpinner from '@/components/MySpinner.vue'


export default {
  name: 'ContactoView',
  components: {
    ContactForm,
    MySpinner
  },
  data(){
    return {
      loading: false,
      status: 'form'
    }
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

    .contacto-view-container {
      margin-top: 30px;
    }
  }
</style>