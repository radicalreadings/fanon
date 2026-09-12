<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const CYCLE_INTERVAL_MS = 3000

const props = defineProps<{
  sources: string[]
  alt?: string
}>()

const index = ref(0)
let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  if (props.sources.length > 1) {
    timer = setInterval(() => {
      index.value = (index.value + 1) % props.sources.length
    }, CYCLE_INTERVAL_MS)
  }
})
onUnmounted(() => {
  clearInterval(timer)
})

// Resolves against Vite's configured base (e.g. "/fanon/" on GitHub Pages)
// so cover paths still work if this ever moves to a custom domain.
const currentSrc = computed(() =>
  props.sources.length
    ? `${import.meta.env.BASE_URL}${props.sources[index.value].replace(/^\/+/, '')}`
    : undefined,
)
</script>

<template>
  <div class="cover-frame">
    <Transition name="cover-fade">
      <img v-if="currentSrc" :key="currentSrc" :src="currentSrc" :alt="alt ?? ''" class="cover-image" loading="lazy" />
    </Transition>
  </div>
</template>

<style scoped>
/* Fixed aspect ratio on the frame itself (not on the image) so the box
   never resizes as images with different native dimensions cycle through. */
.cover-frame {
  position: relative;
  aspect-ratio: 0.68;
  border: var(--border-accent);
  overflow: hidden;
}
.cover-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.cover-fade-enter-active,
.cover-fade-leave-active {
  transition: opacity 0.6s ease;
}
.cover-fade-enter-from,
.cover-fade-leave-to {
  opacity: 0;
}
</style>
