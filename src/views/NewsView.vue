<script setup lang="ts">

import {onMounted, ref} from "vue"
import type {Ref} from "vue"
import type {Article} from "@/types/Article"
import ArticleComp from "@/views/ArticleComp.vue";

const articles: Ref<Article[]> = ref([])

onMounted(() => {
  fetchNews()
})

async function fetchNews() {
  const res = await fetch('https://api.spaceflightnewsapi.net/v3/articles')
  const data:[] = await res.json()
  data.forEach((article: Article) => {
    articles.value.push({
      id: article.id,
      title: article.title,
      url: article.url,
      imageUrl: article.imageUrl,
      summary: article.summary,
      publishedAt: article.publishedAt,
      updatedAt: article.updatedAt,
    })
  })
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
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  margin: 10px;
}

</style>