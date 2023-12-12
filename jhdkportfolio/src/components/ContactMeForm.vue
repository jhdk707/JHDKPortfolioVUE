<!-- ContactMeForm.vue -->

<template>
  <form @submit.prevent="submitForm" ref="form">
    <!-- Your form fields go here -->
    <label for="user_name">Name</label>
    <input v-model="formData.user_name" type="text" id="user_name" name="user_name">
    
    <label for="user_email">Email</label>
    <input v-model="formData.user_email" type="email" id="user_email" name="user_email">
    
    <label for="message">Message</label>
    <textarea v-model="formData.message" id="message" name="message"></textarea>
    
    <button type="submit">Send</button>
  </form>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  data() {
    return {
      formData: {
        user_name: '',
        user_email: '',
        message: '',
      },
    };
  },
  methods: {
    submitForm() {
      const form = this.$refs.form; // Get the form reference
      this.sendEmail(form);
    },
    sendEmail(form) {
      emailjs.sendForm('service_l56qw5o', 'template_hsg31yy', form, 'Vc7UiEAGTRzOCP8H7')
        .then((result) => {
          console.log('SUCCESS!', result.text);
        })
        .catch((error) => {
          console.log('FAILED...', error.text);
        });
    },
  },
};
</script>

<style scoped>
/* Add your styling here */
</style>
