<script setup lang="ts">
import type {Article} from "@/types/Article"
import type {PropType} from "vue";
import {compile, computed, onMounted} from "vue";

const props = defineProps({
  data: Object as PropType<Article>,
})


function formatDate(input: string): string {
  return new Date(Date.parse(input)).toLocaleString('en-US')
}

const publishedAt = computed(() => {
  return formatDate(props.data.publishedAt) //TODO: data can be undefined here
})

const updatedAt = computed(() => {
  return formatDate(props.data.updatedAt)
})

</script>

<template>
  <div class="article">
    <img class="article-image" :src="data.imageUrl" alt="Article image">
    <div class="article-text">
      <h3>{{ data.title }}</h3>
      <p>Published: {{ publishedAt }}</p>
      <p>Updated: {{ updatedAt }}</p>
    </div>
  </div>
</template>

<!--TODO: make responsive -->
<style scoped>
.article {
  border-radius: 4px;
  border: 2px solid var(--light-green);
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