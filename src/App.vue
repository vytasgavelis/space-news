<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <header>

    <div class="wrapper">
      <nav class="navbar-container">
        <RouterLink class="navbar-link" to="/news">News</RouterLink>
<!--        <RouterLink class="navbar-link" to="/about">About</RouterLink>-->
        <h1>🚀Space News🚀</h1>
        <RouterLink class="navbar-link" to="/login">Login</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import '@/assets/base.css';

body {
  background: #181818;
  color: var(--color-text);
}

:root {
  --light-green: #42d392;
}


.navbar-container {
  flex-direction: row;
  display: flex;
  width: 100%;
  border: 1px black;
  justify-content: space-evenly;
}

.navbar-container h1 {
  color: white;
}

.navbar-link {
  background: #42d392;
  color: #213457;
  border: 1px;
  border-radius: 4px;
  padding: 10px 30px 10px 30px;
  font-size: 16px;
  text-decoration: none;
  max-width: 200px;
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

/*header {*/
/*  line-height: 1.5;*/
/*  max-height: 100vh;*/
/*}*/

/*.logo {*/
/*  display: block;*/
/*  margin: 0 auto 2rem;*/
/*}*/

/*a,*/
/*.green {*/
/*  text-decoration: none;*/
/*  color: hsla(160, 100%, 37%, 1);*/
/*  transition: 0.4s;*/
/*}*/

/*@media (hover: hover) {*/
/*  a:hover {*/
/*    background-color: hsla(160, 100%, 37%, 0.2);*/
/*  }*/
/*}*/

/*nav {*/
/*  width: 100%;*/
/*  font-size: 12px;*/
/*  text-align: center;*/
/*  margin-top: 2rem;*/
/*}*/

/*nav a.router-link-exact-active {*/
/*  color: var(--color-text);*/
/*}*/

/*nav a.router-link-exact-active:hover {*/
/*  background-color: transparent;*/
/*}*/

/*nav a {*/
/*  display: inline-block;*/
/*  padding: 0 1rem;*/
/*  border-left: 1px solid var(--color-border);*/
/*}*/

/*nav a:first-of-type {*/
/*  border: 0;*/
/*}*/

/*@media (min-width: 1024px) {*/
/*  body {*/
/*    display: flex;*/
/*    place-items: center;*/
/*  }*/

/*  #app {*/
/*    display: grid;*/
/*    grid-template-columns: 1fr 1fr;*/
/*    padding: 0 2rem;*/
/*  }*/

/*  header {*/
/*    display: flex;*/
/*    place-items: center;*/
/*    padding-right: calc(var(--section-gap) / 2);*/
/*  }*/

/*  header .wrapper {*/
/*    display: flex;*/
/*    place-items: flex-start;*/
/*    flex-wrap: wrap;*/
/*  }*/

/*  .logo {*/
/*    margin: 0 2rem 0 0;*/
/*  }*/

/*  nav {*/
/*    text-align: left;*/
/*    margin-left: -1rem;*/
/*    font-size: 1rem;*/

/*    padding: 1rem 0;*/
/*    margin-top: 1rem;*/
/*  }*/
/*}*/
</style>
