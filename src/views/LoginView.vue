<script setup lang="ts">

import { ref, computed } from 'vue'

const username = ref('')
const password = ref('')

// Do you always have to call .value manually? Or is there some easier method
const isFormFilled = computed(() => {
  return username.value !== "" && password.value !== ""
})

</script>

<template>
  <div>
    <h1>Login page</h1>
    <form @submit.prevent="onSubmit">
      <label for="username">Username</label>
      <input type="text" name="username" id="username" v-model="username">
      <label for="password">Password</label>
      <input type="password" name="password" id="password" v-model="password">
      <button type="submit" :disabled="!isFormFilled">Submit</button>
    </form>
  </div>
</template>

<style>
</style>
