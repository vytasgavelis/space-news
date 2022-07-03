<script setup lang="ts">
import type {Article} from "@/types/Article"
import type {PropType} from "vue";
import {compile, computed, onMounted} from "vue";
import {useRouter} from "vue-router";
import {formatDate} from '@/helpers/DateHelpers'


const props = defineProps({
  data: Object as PropType<Article>,
})

const router = useRouter()

</script>

<template>
  <div class="article green-border">
    <img class="article-image" :src="data.imageUrl" alt="Article image">
    <div class="article-text">
      <a href=""><h3 @click="router.push({name: 'article', params: {id: data.id}})">{{ data.title }}</h3></a>
      <p>Published: {{ formatDate(data.publishedAt) }}</p>
      <p>Updated: {{ formatDate(data.updatedAt) }}</p>
    </div>
  </div>
</template>

<!--TODO: make responsive -->
<style scoped>
.article {
  min-height: 400px;
  max-height: 400px;
}

.article-image {
  width: 100%;
  height: 250px;
/*/ / TODO: fix image quality .*/
}

.article-text {
  padding: 5px;
}

.article-text h3 {
  color: white;
  min-height: 80px;
}

</style>