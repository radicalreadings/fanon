<template>
  <v-footer class="app-footer d-flex justify-center py-4">
    <span class="footer-text">
      Radical Readings ·
      <a href="https://github.com/radicalreadings/fanon" target="_blank" rel="noopener noreferrer">
        Source on GitHub
      </a>
    </span>
  </v-footer>
</template>

<style scoped>
.app-footer {
  border-top: 1px solid rgba(var(--v-theme-primary), 0.25);
}
.footer-text {
  font-family: var(--font-body);
  font-size: 0.85rem;
  color: rgba(var(--v-theme-on-background), 0.65);
}
.footer-text a {
  color: inherit;
}
</style>
