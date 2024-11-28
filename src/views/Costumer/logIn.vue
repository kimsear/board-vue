<template>
    <div>
      <form @submit="handleSubmit">
        <div class="mb-3 mt-auto">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" v-model="email" aria-describedby="emailHelp" />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" v-model="password"/>
        </div>
        <div class="mb-3 form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
            v-model="isChecked"
          />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const email = ref('');
  const password = ref('');
  const isChecked = ref(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (!email.value || !password.value) {
      alert('Please fill in all fields.');
      return;
    }
  
    if (!isChecked.value) {
      alert('Please agree to the terms.');
      return;
    }
  
    alert(`Form submitted!\nEmail: ${email.value}\nPassword: ${password.value}`);
  };
  </script>
  
  <style lang="scss" scoped>
  form {
    max-width: 400px;
    margin: 0 auto;
  }
  
  button {
    width: 100%;
    font-weight: bold;
  }
  </style>
  