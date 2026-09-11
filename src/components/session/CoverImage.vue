<script setup lang="ts">
import { withBase } from '@/utils/assetPath'

defineProps<{
  src?: string
  alt?: string
}>()
</script>

<template>
  <div class="cover-frame">
    <v-img v-if="src" :src="withBase(src)" :alt="alt" aspect-ratio="0.72" cover />
    <div v-else class="cover-frame-empty" />
  </div>
</template>

<style scoped>
.cover-frame {
  border: 2px solid rgb(var(--v-theme-primary));
  overflow: hidden;
}
.cover-frame-empty {
  aspect-ratio: 0.72;
  background-color: rgba(var(--v-theme-primary), 0.08);
}
</style>
