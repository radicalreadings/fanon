<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  synopsis?: string
  publisher?: string
  publishedYear?: number
  pageCount?: number
  isbn?: string
}>()

const hasDetails = computed(
  () => !!(props.publisher || props.publishedYear || props.pageCount || props.isbn),
)
</script>

<template>
  <div>
    <p v-if="synopsis" class="text-body-1 mb-4">{{ synopsis }}</p>
    <v-table v-if="hasDetails" density="compact">
      <tbody>
        <tr v-if="publisher">
          <td class="text-medium-emphasis">Publisher</td>
          <td>{{ publisher }}</td>
        </tr>
        <tr v-if="publishedYear">
          <td class="text-medium-emphasis">Published</td>
          <td>{{ publishedYear }}</td>
        </tr>
        <tr v-if="pageCount">
          <td class="text-medium-emphasis">Pages</td>
          <td>{{ pageCount }}</td>
        </tr>
        <tr v-if="isbn">
          <td class="text-medium-emphasis">ISBN</td>
          <td>{{ isbn }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
