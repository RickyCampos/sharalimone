<template>
  <div class="contact-form">
    <div class="contact-form-fields">
      <input v-model="form.name" placeholder="Nombre *" />
      <input v-model="form.email" placeholder="Email *" />
      <input v-model="form.subject" placeholder="Asunto *" />
      <textarea v-model="form.message" placeholder="Mensaje *" />
      <button>CONTACTAR</button>
    </div>
  </div>
</template>

<script>
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
  }
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

    button {
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
