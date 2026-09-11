<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { withBase } from '@/utils/assetPath'

const props = defineProps<{
  src?: string
  /** Multiple cover images to cycle through - takes priority over `src` if both given. */
  sources?: string[]
  alt?: string
  /** ms between covers when `sources` has more than one image. Default 3000. */
  intervalMs?: number
}>()

const images = computed(() => (props.sources?.length ? props.sources : props.src ? [props.src] : []))

const index = ref(0)
let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  if (images.value.length > 1) {
    timer = setInterval(() => {
      index.value = (index.value + 1) % images.value.length
    }, props.intervalMs ?? 3000)
  }
})
onUnmounted(() => {
  clearInterval(timer)
})

const currentSrc = computed(() => (images.value.length ? withBase(images.value[index.value]) : undefined))
</script>

<template>
  <div class="cover-frame">
    <Transition name="cover-fade">
      <img v-if="currentSrc" :key="currentSrc" :src="currentSrc" :alt="alt ?? ''" class="cover-image" loading="lazy" />
    </Transition>
    <div v-if="!currentSrc" class="cover-frame-empty" />
  </div>
</template>

<style scoped>
/* Fixed aspect ratio on the frame itself (not on the image) so the box
   never resizes as images with different native dimensions cycle through. */
.cover-frame {
  position: relative;
  aspect-ratio: 0.68;
  border: 2px solid rgb(var(--v-theme-primary));
  overflow: hidden;
}
.cover-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.cover-frame-empty {
  position: absolute;
  inset: 0;
  background-color: rgba(var(--v-theme-primary), 0.08);
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
