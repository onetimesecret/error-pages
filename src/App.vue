<!-- App.vue -->
<script setup lang="ts">
import { ref, watch } from 'vue';
import DarkModeToggle from '@/components/DarkModeToggle.vue';
import Footer from '@/components/Footer.vue';

/**
 * Darkmode
 */
const isDarkMode = ref(false);

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value;
  updateDarkMode();
}

function updateDarkMode() {
  const el = document.documentElement.classList;
  if (isDarkMode.value) {
    el.add('dark');
  }
  else {
    el.remove('dark');
  }
}

// Initialize dark mode based on user preference
isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
updateDarkMode();

// Watch for changes in system preference
watch(
  () => window.matchMedia('(prefers-color-scheme: dark)').matches,
  (isDark) => {
    isDarkMode.value = isDark;
    updateDarkMode();
  },
);
</script>

<template>
  <div class="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
    <!-- Dark mode toggle in the upper right corner -->
    <div class="absolute top-4 right-4">
      <DarkModeToggle
        :is-dark-mode="isDarkMode"
        @toggle-dark-mode="toggleDarkMode"
      />
    </div>

    <router-view />

    <Footer />
  </div>
</template>

<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
