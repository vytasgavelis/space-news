<script setup lang="ts">

import {onMounted, ref} from "vue"
import type {Ref} from "vue"
import type {Article} from "@/types/Article"
import ArticleComp from "@/views/ArticleComp.vue";
import {NewsClient} from "@/client/NewsClient";

const articles: Ref<Article[]> = ref([])

const client = new NewsClient()

onMounted(() => {
  fetchNews()
})

async function fetchNews() {
  const data = await client.getArticles()
  articles.value = data
}

</script>

<template>
  <main>
    <div class="article-container">
      <div v-for="article in articles" :key="article.id">
        <ArticleComp  :data="article"/>
      </div>
    </div>
  </main>
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

</style>