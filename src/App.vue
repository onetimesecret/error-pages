<script setup lang="ts">
import { computed, ref, watch } from 'vue';

const title = ref('Site Maintenance')
const message = ref('We are currently performing scheduled maintenance. Please check back soon.')
const estimatedTime = ref('2 hours')
const startTime = ref(new Date().getTime())
const endTime = ref(new Date().getTime() + 2 * 60 * 60 * 1000) // 2 hours from now

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
]
const currentLang = ref('en')

const progress = computed(() => {
  const now = new Date().getTime()
  return Math.min(100, Math.max(0, ((now - startTime.value) / (endTime.value - startTime.value)) * 100))
})

const switchLanguage = (lang: string) => {
  currentLang.value = lang
  // Here you would typically update your translations
  // For this example, we'll just change the title
  if (lang === 'es') {
    title.value = 'Mantenimiento del Sitio'
  } else if (lang === 'fr') {
    title.value = 'Maintenance du Site'
  } else {
    title.value = 'Site Maintenance'
  }
}

const isDarkMode = ref(false)

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  updateDarkMode()
}

const updateDarkMode = () => {
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

// Initialize dark mode based on user preference
isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
updateDarkMode()

// Watch for changes in system preference
watch(
  () => window.matchMedia('(prefers-color-scheme: dark)').matches,
  (isDark) => {
    isDarkMode.value = isDark
    updateDarkMode()
  }
)

</script>

<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div class="text-center">
        <img id="logo"
             src="./assets/img/onetime-logo-v3-xl.svg"
             class="mx-auto h-12 w-12 text-brand-500 animate-pulse">

        <h2 class="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
          {{ title }}
        </h2>
      </div>
      <div
           class="mt-8 bg-white dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10 transition-all duration-500 ease-in-out hover:shadow-xl">
        <div class="space-y-6 text-gray-700 dark:text-gray-300">
          <p class="text-lg">{{ message }}</p>
          <p class="text-sm">Estimated time: <span class="font-medium">{{ estimatedTime }}</span></p>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-brand-500 h-2.5 rounded-full transition-all duration-500 ease-out"
                 :style="{ width: `${progress}%` }"></div>
          </div>
        </div>
        <div class="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6">
          <p class="text-base font-medium text-brand-500">
            Thank you for your patience.
          </p>
          <a href="https://status.onetimesecret.com"
             class="text-sm text-brand-500 hover:text-brand-600 transition-colors duration-300 mt-2 inline-block">
            Check our status page for updates
          </a>
        </div>
      </div>
      <div class="flex justify-center space-x-2">
        <button v-for="lang in languages"
                :key="lang.code"
                @click="switchLanguage(lang.code)"
                class="px-3 py-1 text-sm rounded-full transition-colors duration-300"
                :class="currentLang === lang.code ? 'bg-brand-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'">
          {{ lang.name }}
        </button>
        <button @click="toggleDarkMode"
                class="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-200"
                aria-label="Toggle dark mode">
          <svg v-if="isDarkMode"
               xmlns="http://www.w3.org/2000/svg"
               class="h-6 w-6"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor">
            <path stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <svg v-else
               xmlns="http://www.w3.org/2000/svg"
               class="h-6 w-6"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor">
            <path stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
