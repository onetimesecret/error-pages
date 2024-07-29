<!-- App.vue -->
<script setup lang="ts">
import { ref, watch } from 'vue';
import DarkModeToggle from '@/components/DarkModeToggle.vue';
import Footer from '@/components/Footer.vue';
import { storage } from '@/stores/prefs';

/**
 * Darkmode
 */
const isDarkMode = ref(document.documentElement.classList.contains('dark'));

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value;
  updateDarkMode();
}

function updateDarkMode() {
  document.documentElement.classList.toggle('dark', isDarkMode.value);
  storage.set('darkMode', isDarkMode.value.toString());
}

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
