<script setup lang="ts">
defineProps<{
  title: string
  author?: string
}>()
</script>

<template>
  <v-container class="hero">
    <h1 class="hero-title">{{ title }}</h1>
    <p v-if="author" class="hero-author">{{ author }}</p>
  </v-container>
</template>

<style scoped>
.hero {
  padding-top: 3rem;
  padding-bottom: 1rem;
}
.hero-title {
  margin: 0;
  font-family: var(--font-display);
  font-weight: 900;
  text-transform: uppercase;
  color: rgb(var(--v-theme-primary));
  font-size: clamp(2.25rem, 7vw, 4.25rem);
  line-height: 1.02;
  letter-spacing: -0.01em;
}
.hero-author {
  margin: 0.5rem 0 0;
  font-family: var(--font-body);
  font-size: 1.15rem;
  color: rgba(var(--v-theme-on-background), 0.65);
}
</style>
