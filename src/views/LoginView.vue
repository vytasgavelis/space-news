<script setup lang="ts">

import {ref, computed} from 'vue'

import { useRouter, useRoute } from 'vue-router'
const username = ref('')
const password = ref('')

const router = useRouter()

// Do you always have to call .value manually? Or is there some easier method
const isFormFilled = computed(() => {
  return username.value !== "" && password.value !== ""
})

function login(): void {
  router.push({name: 'news'})
}


</script>

<template>
  <div>
    <div class="container">
      <div class="form-container">
        <h1>Login</h1>
        <form @submit.prevent="onSubmit">
          <div><label for="username">Username</label></div>
          <div><input type="text" name="username" id="username" v-model="username"></div>
          <div><label for="password">Password</label></div>
          <div><input type="password" name="password" id="password" v-model="password"></div>
          <div><button @click="login" class="navbar-link" type="submit" :disabled="!isFormFilled">Submit</button></div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  border: 1px;
  /*color: #213457;*/
  border-radius: 4px;
  padding: 10px 30px 10px 30px;
  font-size: 16px;
}

.form-container h1 {
  color: white;
}

.form-container input {
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: none;
}

.form-container button:disabled {
  background: white;
}

.container {
  flex-direction: row;
  display: flex;
  width: 100%;
  border: 1px black;
  justify-content: space-evenly;
  text-align:center;
}
</style>
