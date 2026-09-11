<script setup lang="ts">
import { withBase } from '@/utils/assetPath'

defineProps<{
  title: string
  author: string
  coverImage?: string
}>()
</script>

<template>
  <v-sheet :color="coverImage ? undefined : 'primary'" class="pa-8">
    <v-container>
      <v-row align="center">
        <v-col v-if="coverImage" cols="12" sm="4" md="3">
          <v-img :src="withBase(coverImage)" rounded max-height="320" cover />
        </v-col>
        <v-col>
          <h1 class="text-h3 font-weight-bold" :class="{ 'text-white': !coverImage }">
            {{ title }}
          </h1>
          <p
            class="text-h6 font-weight-regular mb-0"
            :class="coverImage ? 'text-medium-emphasis' : 'text-white'"
          >
            {{ author }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>
