<script setup lang="ts">

import {onMounted, ref} from "vue"
import type {Ref} from "vue"
import type {Article} from "@/types/Article"
import ArticleComp from "@/views/ArticleComp.vue";
import {NewsClient} from "@/client/NewsClient";
import Button from "@/components/Button.vue";
import {useArticle} from "@/composables/useArticle";


const articles: Ref<Article[]> = ref([])

const client = new NewsClient()

// Use fetch cia galima naudoti
onMounted(() => {
  fetchNews()
})

async function fetchNews() {
  const data = await client.getArticles()
  articles.value = data
}

async function showRandomArticle() {
  const id = Math.round(Math.random() * 10);
  const article = await useArticle(id)
  alert(article.id + ' ' + article.title)
}

</script>

<template>
<!--  Is it possible to reuse this? So I dont have to put this before every component -->
  <Transition appear>
  <main>
    <Button @click="showRandomArticle">🎲 Random article</Button>
    <div class="article-container">
      <div v-for="article in articles" :key="article.id">
        <ArticleComp  :data="article"/>
      </div>
    </div>
  </main>
  </Transition>
</template>

<style scoped>
.article-container {
  display: grid;
  grid-gap: 10px;
  margin: 10px;
}

@media (min-width: 600px) {
  .article-container { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 900px) {
  .article-container { grid-template-columns: repeat(3, 1fr); }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.7s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>