<!-- ProgressBar.vue -->
<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  estimatedTime: string
}>()

const startTime = ref(new Date().getTime())
const endTime = ref(new Date().getTime() + 2 * 60 * 60 * 1000) // 2 hours from now

const progress = computed(() => {
  const now = new Date().getTime()
  return Math.min(
    100,
    Math.max(
      0,
      ((now - startTime.value) / (endTime.value - startTime.value)) * 100,
    ),
  )
})
</script>

<template>
  <div class="space-y-2">
    <p class="text-sm text-gray-700 dark:text-gray-300">
      {{ $t('estimatedTime') }}:
      <span class="font-medium">{{ estimatedTime }}</span>
    </p>
    <div class="w-full rounded-full bg-gray-200 dark:bg-gray-700 h-2.5">
      <div
        class="h-2.5 rounded-full transition-all duration-500 bg-brand-500 ease-out"
        :style="{ width: `${progress}%` }"
        :aria-valuenow="progress"
        aria-valuemin="0"
        aria-valuemax="100"
        role="progressbar"
      />
    </div>
  </div>
</template>
