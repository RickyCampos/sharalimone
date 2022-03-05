<template>
  <div class="contact-form">
    <form ref="form" @submit.prevent="sendEmail" class="contact-form-fields">
      <input v-model="form.name" placeholder="Nombre *" name="name" />
      <input v-model="form.email" placeholder="Email *" name="email" />
      <input v-model="form.subject" placeholder="Asunto *" name="subject"/>
      <textarea v-model="form.message" placeholder="Mensaje *" name="message"/>
      <input type="submit" value="CONTACTAR">
    </form>
  </div>
</template>

<script>
import emailjs from 'emailjs-com'

export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        name: null,
        email: null,
        subject: null,
        message: null,
      },
    }
  },
  methods: {
    sendEmail() {
      emailjs.sendForm(process.env.VUE_APP_EMAILJS_SERVICE_ID, process.env.VUE_APP_EMAILJS_TEMPLATE_ID, this.$refs.form, process.env.VUE_APP_EMAILJS_USER_ID)
        .then((result) => {
          console.log('SUCCESS!', result.text)
          this.resetFormFields()
        }, (error) => {
          console.log('FAILED...', error.text)
        })
    },
    resetFormFields(){
      this.form = {
        name: null,
        email: null,
        subject: null,
        message: null,
      }
    }
  },

}
</script>

<style lang="scss" scoped>
.contact-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &-fields {
    width: 100%;
    display: flex;
    flex-direction: column;

    input,
    textarea {
      @include font-weight(regular);
      font-size: 1rem;
      padding: 10px;
      background-color: $color-gray-light;
      border: 1px solid $color-dark;
      margin-bottom: 10px;
    }

    textarea {
      resize: none;
      height: 200px;
    }

    input[type=submit] {
      margin: 10px 0 0 auto;
      padding: 8px 20px;
      cursor: pointer;
      background-color: $color-primary;
      border: 1px solid black;
      transition: all 0.1s ease;
      @include font-weight(bold);

      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
          0 10px 10px rgba(0, 0, 0, 0.22);

      &:active {
        transform: translateY(2px);
      }
  
    }
  }
}
</style>
