<!-- App.vue -->
<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import ActiveLogo from '@/components/ActiveLogo.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import DarkModeToggle from '@/components/DarkModeToggle.vue'
import Footer from '@/components/Footer.vue'

const { t, locale } = useI18n()

const estimatedTime = ref('3 hours')

/**
 * Languages
 */
const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
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
  <div class="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
    <!-- Dark mode toggle in the upper right corner -->
    <div class="absolute top-4 right-4">
      <DarkModeToggle
        :is-dark-mode="isDarkMode"
        @toggle-dark-mode="toggleDarkMode"
      />
    </div>

    <!-- Main content -->
    <main class="flex-grow">
      <div class="flex min-h-screen justify-center px-4 items-center sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
          <div class="text-center">
            <ActiveLogo class="mx-auto h-12 w-12" :pulse-rate="3" />

            <h1 class="text-3xl font-extrabold text-gray-900 mt-6 dark:text-white">
              {{ t('title') }}
            </h1>
          </div>
          <!-- TailwindUI-inspired Card component -->
          <div class="bg-white shadow-lg rounded-lg overflow-hidden dark:bg-gray-800">
            <div class="px-4 py-5 sm:p-6">
              <div class="text-gray-700 space-y-6 dark:text-gray-300">
                <p class="text-lg">
                  {{ t('message') }}
                </p>
                <ProgressBar
                  start-time="2024-07-29T19:00:00Z"
                  :duration="estimatedTime"
                />
              </div>
              <div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p class="text-base text-gray-600 font-medium">
                  {{ t('thankYou') }}
                </p>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-center">
            <LanguageSwitcher
              :languages="languages"
              :current-locale="locale"
              @switch-language="switchLanguage"
            />
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<style>
html, body {
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
