<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const content = ref<HTMLElement | null>(null);
const route = useRoute();

onMounted(() => {
  if (content.value) {
    content.value.style.opacity = '1';
    content.value.style.transition = 'opacity 0.4s';
  }
});

watch(() => route.fullPath, () => {
  if (content.value) {
    content.value.style.opacity = '0';

    setTimeout(() => {
      if (content.value) {
        content.value.style.opacity = '1';
      }
    }, 400);
  }
});
</script>

<template>
  <div class="main-wrapper" ref="content">
    <router-view />
  </div>
</template>

<style></style>
