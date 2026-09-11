<script setup lang="ts">
defineProps<{
  caption: string
  videoUrl?: string
  thumbnail?: string
}>()
</script>

<template>
  <div class="video-teaser">
    <p class="video-caption">{{ caption }}</p>
    <a
      v-if="videoUrl"
      :href="videoUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="video-thumb"
      :style="thumbnail ? { backgroundImage: `url(${thumbnail})` } : undefined"
    >
      <v-icon icon="mdi-play-circle" size="48" class="video-play-icon" />
    </a>
    <div
      v-else
      class="video-thumb video-thumb--empty"
      :style="thumbnail ? { backgroundImage: `url(${thumbnail})` } : undefined"
    >
      <v-icon icon="mdi-play-circle" size="48" class="video-play-icon" />
    </div>
  </div>
</template>

<style scoped>
.video-teaser {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.video-caption {
  margin: 0;
  font-family: var(--font-body);
  font-size: 1.1rem;
  max-width: 22rem;
  color: rgb(var(--v-theme-on-background));
}
.video-thumb {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 140px;
  flex-shrink: 0;
  border: 2px solid rgb(var(--v-theme-primary));
  background-size: cover;
  background-position: center;
  text-decoration: none;
}
.video-thumb--empty {
  background-color: rgba(var(--v-theme-primary), 0.08);
}
.video-play-icon {
  color: rgb(var(--v-theme-primary));
}
</style>
