<script setup lang="ts">

import {ref, computed} from 'vue'

const username = ref('')
const password = ref('')

// Do you always have to call .value manually? Or is there some easier method
const isFormFilled = computed(() => {
  return username.value !== "" && password.value !== ""
})

</script>

<template>
  <div>
    <div class="container">
      <div class="form-container">
        <h1>Login page</h1>
        <form @submit.prevent="onSubmit">
          <div><label for="username">Username</label></div>
          <div><input type="text" name="username" id="username" v-model="username"></div>
          <div><label for="password">Password</label></div>
          <div><input type="password" name="password" id="password" v-model="password"></div>
          <div><button class="navbar-link" type="submit" :disabled="!isFormFilled">Submit</button></div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  color: #213457;
  border: 1px;
  border-radius: 10%;
  padding: 10px 30px 10px 30px;
  font-size: 16px;
}

.form-container input {
  margin-top: 10px;
  margin-bottom: 10px;
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
