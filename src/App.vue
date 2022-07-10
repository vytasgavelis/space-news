<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Button from "@/components/Button.vue";
</script>

<template>
  <header>

      <nav class="navbar">
        <RouterLink to="/news">
          <Button>News</Button>
        </RouterLink>
        <h1 class="navbar__header">🚀Space News🚀</h1>
        <RouterLink to="/login">
          <Button>Login</Button>
        </RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style lang="scss">
@import '@/assets/base.css';

body {
  background: #181818;
  color: var(--color-text);
}

:root {
  --light-green: #42d392;
}


.navbar {
  flex-direction: row;
  display: flex;
  width: 100%;
  border: 1px black;
  justify-content: space-evenly;

  &__header {
    color: white;
  }
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

.green-border {
  border-radius: 4px;
  border: 2px solid var(--light-green);
}
</style>
