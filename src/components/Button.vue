<script setup lang="ts">
import {computed, defineProps} from "vue";

  const props = defineProps({
    href: {
      type: String,
      default: '',
    },
  })

  const type = computed(() => {
    if (props.href) {
      return 'a'
    } else {
      return 'button'
    }
  })
</script>

<template>
  <component :is="type" :href="href" class="button"><slot /></component>
<!--<button class="button"><slot>Button</slot></button>-->
</template>

<style scoped lang="scss">
$color: red;
.button {
  background: #42d392;
  color: #213457;
  border: 1px;
  border-radius: 4px;
  padding: 10px 30px 10px 30px;
  font-size: 16px;
  text-decoration: none;
  max-width: 200px;
}

.button:hover {
  cursor: pointer;
}

</style>