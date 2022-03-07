<template>
  <div class="contact-form">
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quos error accusamus illo quaerat culpa cumque inventore adipisci repudiandae. Sed modi enim architecto aliquid beatae commodi earum maiores sint ipsum?</h2>

    <ValidationObserver v-slot="{ handleSubmit }" class="contact-form-container"> 
      <form ref="form"  @submit.prevent="handleSubmit(sendEmail)" class="contact-form-fields">
        <validation-provider rules="required" v-slot="{ errors }">
          <input v-model="form.name" placeholder="Nombre *" name="name" :class="{error: errors[0]}" />
          <p class="error-message" v-show="!!errors[0]">{{errors[0]}}</p>
        </validation-provider>

        <validation-provider rules="required|email" v-slot="{ errors }">
          <input v-model="form.email" placeholder="Email *" name="email" :class="{error: errors[0]}" />
          <p class="error-message" v-show="!!errors[0]">{{errors[0]}}</p>
        </validation-provider>

        <validation-provider rules="required" v-slot="{ errors }">
          <input v-model="form.subject" placeholder="Asunto *" name="subject" :class="{error: errors[0]}"/>
          <p class="error-message" v-show="!!errors[0]">{{errors[0]}}</p>
        </validation-provider>

        <validation-provider rules="required" v-slot="{ errors }">
          <textarea v-model="form.message" placeholder="Mensaje *" name="message" :class="{error: errors[0]}"/>
          <p class="error-message" v-show="!!errors[0]">{{errors[0]}}</p>
        </validation-provider>

        <input type="submit" value="CONTACTAR">
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import emailjs from 'emailjs-com'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'


extend('email', {
  ...email,
  message: 'Introduce un formato de email valido'
})

extend('required', {
  ...required,
  message: 'Este campo es obligatorio',
  validate(value) {
    return {
      required: true,
      valid: ['', null, undefined].indexOf(value) === -1
    }
  },
  computesRequired: true
})

export default {
  name: 'ContactForm',
  components: {ValidationProvider, ValidationObserver},
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
      this.$emit('showLoading', true)
      emailjs.sendForm(process.env.VUE_APP_EMAILJS_SERVICE_ID, process.env.VUE_APP_EMAILJS_TEMPLATE_ID, this.$refs.form, process.env.VUE_APP_EMAILJS_USER_ID)
        .then(() => {
          this.$emit('showLoading', false)
          this.$emit('setStatus', 'success')
        }, () => {
          this.$emit('showLoading', false)
          this.$emit('setStatus', 'error')
        })
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

  &-container {
    width: 100%;
    margin-top: 30px;
  }

  &-fields {
    width: 100%;
    display: flex;
    flex-direction: column;

    >span {
      margin-bottom: 10px;
    }

    input,
    textarea {
      width: 100%;
      @include font-weight(regular);
      font-size: 1rem;
      padding: 10px;
      background-color: $color-gray-light;
      border: 1px solid $color-dark;
      margin-bottom: 10px;

      &.error {
        border: 1px solid red;
      }
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
      width: auto;

      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
          0 10px 10px rgba(0, 0, 0, 0.22);

      &:active {
        transform: translateY(2px);
      }
  
    }

    .error-message {
      color: red;
      font-size: 0.9rem;
    }
  }
}
</style>
