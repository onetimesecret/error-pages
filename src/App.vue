<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

/**
 * Progress Bar
 */
const estimatedTime = ref('2 hours')
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

/**
 * Languages
 */
const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
]

// Update document lang attribute when locale changes
function switchLanguage(lang: string) {
  locale.value = lang
  document.documentElement.lang = lang
}

// Watch for changes in locale
watch(locale, (newLocale) => {
  switchLanguage(newLocale)
})

/**
 * Darkmode
 */
const isDarkMode = ref(false)

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value
  updateDarkMode()
}

function updateDarkMode() {
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  }
  else {
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
  },
)
</script>

<template>
  <div class="flex min-h-screen justify-center bg-gray-100 px-4 items-center dark:bg-gray-900 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div class="text-center">
        <img
          id="logo"
          src="./assets/img/onetime-logo-v3-xl.svg"
          class="mx-auto h-12 w-12 animate-pulse text-brand-500"
          :alt="t('logoAlt')"
        >

        <h1 class="text-3xl font-extrabold text-gray-900 mt-6 dark:text-white">
          {{ t('title') }}
        </h1>
      </div>
      <div
        class="bg-white px-4 py-8 mt-8 shadow transition-all duration-500 ease-in-out hover:shadow-xl dark:bg-gray-800 sm:rounded-lg sm:px-10"
      >
        <div class="text-gray-700 space-y-6 dark:text-gray-300">
          <p class="text-lg">
            {{ t('message') }}
          </p>
          <p class="text-sm">
            {{ t('estimatedTime') }}:
            <span class="font-medium">{{ estimatedTime }}</span>
          </p>
          <div class="w-full h-2.5 rounded-full bg-gray-200 dark:bg-gray-700">
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
        <div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p class="text-base font-medium text-brand-500">
            {{ t('thankYou') }}
          </p>
          <a
            href="https://status.onetimesecret.com"
            class="text-sm text-brand-500 mt-2 inline-block transition-colors duration-300 hover:text-brand-600"
          >
            {{ t('statusPage') }}
          </a>
        </div>
      </div>
      <div class="flex justify-center space-x-2">
        <button
          v-for="lang in languages"
          :key="lang.code"
          class="rounded-full px-3 py-1 text-sm transition-colors duration-300"
          :class="locale === lang.code
            ? 'bg-brand-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          "
          :aria-label="t('switchLanguage', { lang: lang.name })"
          @click="switchLanguage(lang.code)"
        >
          {{ lang.name }}
        </button>
        <button
          class="absolute rounded-full bg-gray-200 transition-colors dark:bg-gray-700 right-4 top-4 p-2 text-gray-800 duration-200 dark:text-gray-200"
          :aria-label="t('toggleDarkMode')"
          @click="toggleDarkMode"
        >
          <svg
            v-if="isDarkMode"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
