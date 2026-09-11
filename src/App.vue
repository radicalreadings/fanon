<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import WretchedOfTheEarth from '@/pages/WretchedOfTheEarth.vue'
</script>

<template>
  <v-app>
    <AppHeader />
    <v-main>
      <WretchedOfTheEarth />
    </v-main>
    <AppFooter />
  </v-app>
</template>
