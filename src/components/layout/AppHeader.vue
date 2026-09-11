<template>
  <v-app-bar :elevation="0" class="app-header">
    <v-app-bar-title class="app-title">Radical Readings</v-app-bar-title>
  </v-app-bar>
</template>

<style scoped>
.app-header {
  border-bottom: 1px solid rgba(var(--v-theme-primary), 0.25);
}
.app-title {
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: 0.04em;
  color: rgb(var(--v-theme-primary));
}
</style>
