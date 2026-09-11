<script setup lang="ts">
defineProps<{
  links: { label: string; url: string; description?: string }[]
}>()
</script>

<template>
  <v-card v-if="links.length" variant="outlined">
    <v-card-item>
      <v-card-title>Supplemental Links</v-card-title>
    </v-card-item>
    <v-list>
      <v-list-item
        v-for="link in links"
        :key="link.url"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        prepend-icon="mdi-open-in-new"
      >
        <v-list-item-title>{{ link.label }}</v-list-item-title>
        <v-list-item-subtitle v-if="link.description">{{ link.description }}</v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </v-card>
</template>
