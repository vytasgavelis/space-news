<script setup lang="ts">
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import type {Ref} from "vue"
import {NewsClient} from "@/client/NewsClient";
import type {Article} from "@/types/Article"
import {formatDate} from '@/helpers/DateHelpers'

const article: Ref<Article | null> = ref(null)
const loaded: Ref<boolean> = ref(false)

const route = useRoute()
const id = route.params.id // How to add typed property here

const client = new NewsClient()

onMounted(async () => {
  const data = await client.getArticle(id)
  article.value = data
  loaded.value = true
})

</script>

<template>
  <div class="container">
    <p v-if="!loaded">Is loading...</p>
    <div v-else class="article-container">
      <h1>{{ article.title }}</h1>
      <div class="image-container">
        <!--  Show placeholder when image is not there  -->
        <img :src="article.imageUrl" alt="Article image">
      </div>

      <!--  Why am I not getting auto-complete here  -->
      <h3>{{ article.newsSite }}</h3>

      <div>
        <a :href="article.url" target="_blank" class="navbar-link">Read full article</a>
      </div>

      <p>Published: {{ formatDate(article.publishedAt) }}</p>
      <p>Updated: {{ formatDate(article.updatedAt) }}</p>

      <p class="summary">{{ article.summary }}</p>
    </div>
  </div>

</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;;
}

.image-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.image-container img {
  max-width: 50%;
  /*border-radius: 4px;*/
  /*border: 2px solid var(--light-green);*/
}

.article-container {
  display: flex;
  flex-direction: column;
  margin: 10px;
  text-align: center;
  gap: 10px;
}

.article-container h1 {
  color: white;
  border-radius: 4px;
  border: 2px solid var(--light-green);
}


.article-container .summary {
  color: white;
  text-align: left;
  font-size: 16px;
}

</style>