<!-- ProgressBar.vue -->
<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import parseDuration from 'parse-duration';

const props = defineProps<{
  startTime: string; // ISO 8601 format
  duration: string; // natural language phrase, e.g. "30 minutes", "2 hours"
}>();

const { t } = useI18n();

const startTimestamp = new Date(props.startTime).getTime();
const durationMs = parseDuration(props.duration);
const endTimestamp = startTimestamp + (durationMs as number);

const progress = ref(0);
let intervalId: number | null = null;

function calculateProgress() {
  const now = new Date().getTime();
  progress.value = Math.min(
    100,
    Math.max(
      0,
      ((now - startTimestamp) / (endTimestamp - startTimestamp)) * 100,
    ),
  );
}

onMounted(() => {
  calculateProgress();
  intervalId = window.setInterval(calculateProgress, 1000);
});

onUnmounted(() => {
  if (intervalId !== null) {
    clearInterval(intervalId);
  }
});

const formattedProgress = computed(() => progress.value.toFixed(1));
</script>

<template>
  <div class="space-y-2">
    <p class="text-sm text-gray-700 dark:text-gray-300">
      {{ t('estimatedTime') }}:
      <span class="font-medium">{{ duration }}</span>
    </p>
    <div class="rounded-full bg-gray-200 dark:bg-gray-700 w-full h-2.5">
      <div
        class="h-2.5 rounded-full transition-all duration-500 bg-brand-500 ease-out"
        :style="{ width: `${progress}%` }"
        :aria-valuenow="progress"
        aria-valuemin="0"
        aria-valuemax="100"
        role="progressbar"
      />
    </div>
    <p class="dark:text-gray-400 text-xs text-gray-500">
      {{ formattedProgress }}% {{ t('complete') }}
    </p>
  </div>
</template>
