<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  date?: string
  time?: string
  timezone?: string
  location?: string
  locationUrl?: string
  facilitator?: string
}>()

const formattedDate = computed(() => {
  if (!props.date) return 'TBD'
  return new Date(`${props.date}T00:00:00`).toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
})
</script>

<template>
  <v-card variant="outlined">
    <v-card-item>
      <v-card-title>Meeting Details</v-card-title>
    </v-card-item>
    <v-list density="comfortable">
      <v-list-item prepend-icon="mdi-calendar">
        <v-list-item-title>{{ formattedDate }}</v-list-item-title>
      </v-list-item>
      <v-list-item v-if="time" prepend-icon="mdi-clock-outline">
        <v-list-item-title>
          {{ time }}<span v-if="timezone"> ({{ timezone }})</span>
        </v-list-item-title>
      </v-list-item>
      <v-list-item v-if="location" prepend-icon="mdi-map-marker-outline">
        <v-list-item-title>
          <a v-if="locationUrl" :href="locationUrl" target="_blank" rel="noopener noreferrer">
            {{ location }}
          </a>
          <template v-else>{{ location }}</template>
        </v-list-item-title>
      </v-list-item>
      <v-list-item v-if="facilitator" prepend-icon="mdi-account-outline">
        <v-list-item-title>Facilitated by {{ facilitator }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>
