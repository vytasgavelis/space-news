<script setup lang="ts">

import {ref, computed} from 'vue'
import Button from "@/components/Button.vue";
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
  <Transition appear>
  <div>
    <div class="container">
      <div class="form green-border">
        <h1 class="form__header">Login</h1>
        <form @submit.prevent="onSubmit">
          <div><label for="username">Username</label></div>
          <div><input type="text" name="username" id="username" v-model="username"></div>
          <div><label for="password">Password</label></div>
          <div><input type="password" name="password" id="password" v-model="password"></div>
          <div><Button class="form__button" @click="login" :disabled="!isFormFilled">Submit</Button></div>
        </form>
      </div>
    </div>
  </div>
  </Transition>
</template>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  padding: 10px 30px 10px 30px;
  font-size: 16px;

  &__header {
    color: white;
  }

  &__button:disabled {
    background: white;
  }

  input {
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 4px;
    border: none;
  }
}

.container {
  flex-direction: row;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin: 10px;
  text-align:center;
}

/*TODO: How to reuse these?*/
.v-enter-active,
.v-leave-active {
  transition: opacity 0.7s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
