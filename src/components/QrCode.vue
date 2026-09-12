<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import * as QRCode from 'qrcode'

const props = defineProps<{
  /** URL (or any text) to encode - not user input, so v-html below is safe. */
  value: string
  label?: string
}>()

const svg = ref('')

watchEffect(async () => {
  const value = props.value
  const rendered = await QRCode.toString(value, {
    type: 'svg',
    margin: 0,
    color: {
      dark: '#1c1917', // keep in sync with 'on-background' in src/plugins/vuetify.ts
      light: '#00000000',
    },
  })
  // Guard against an older, slower-resolving call overwriting a newer one
  // if `value` ever changes rapidly (it's a static prop today, but this
  // keeps the component correct if it's ever reused with a dynamic one).
  if (props.value === value) svg.value = rendered
})
</script>

<template>
  <div class="qr-block">
    <!-- eslint-disable-next-line vue/no-v-html -- svg is generated locally by the qrcode lib from our own `value` prop, never from user input -->
    <div class="qr-code" v-html="svg" />
    <p v-if="label" class="qr-label">{{ label }}</p>
  </div>
</template>

<style scoped>
.qr-block {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  border: var(--border-accent);
  padding: 1rem;
}
.qr-code {
  width: 120px;
  height: 120px;
}
.qr-code :deep(svg) {
  display: block;
  width: 100%;
  height: 100%;
}
.qr-label {
  margin: 0;
  font-size: 0.85rem;
  text-align: center;
  color: rgb(var(--v-theme-on-background));
}
</style>
