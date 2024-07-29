<script setup lang="ts">
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import ActiveLogo from '@/components/ActiveLogo.vue';
import ProgressBar from '@/components/ProgressBar.vue';
import LanguageSwitcher from '@/components/LanguageSwitcher.vue';

const { t, locale } = useI18n();

const estimatedTime = ref('3 hours');

/**
 * Languages
 */
const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸', region: 'North America' },
  { code: 'es', name: 'Español', flag: '🇪🇸', region: 'Europe' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', region: 'Europe' },
  { code: 'fr_CA', name: 'Français canadien', flag: '🇨🇦', region: 'North America' },
  { code: 'fr_CH', name: 'Français suisse', flag: '🇨🇭', region: 'Europe' },
  { code: 'hi', name: 'Hindi', flag: '🇮🇳', region: 'Asia' },
  { code: 'zh', name: 'Mandarin', flag: '🇨🇳', region: 'Asia' },
  { code: 'ja', name: 'Japanese', flag: '🇯🇵', region: 'Asia' },
  { code: 'bg', name: 'Bulgarian', flag: '🇧🇬', region: 'Europe' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪', region: 'Europe' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱', region: 'Europe' },
];

// Update document lang attribute when locale changes
function switchLanguage(lang: string) {
  locale.value = lang;
  document.documentElement.lang = lang;
}

// Watch for changes in locale
watch(locale, (newLocale) => {
  switchLanguage(newLocale);
});
</script>

<template>
  <!-- Main content -->
  <main class="flex-grow">
    <div class="flex min-h-screen px-4 justify-center items-start sm:px-6 lg:px-8 pt-40">
      <div class="w-full max-w-md space-y-8">
        <div class="text-center">
          <ActiveLogo
            class="mx-auto h-12 w-12"
            :pulse-rate="3"
          />

          <h1 class="text-3xl font-extrabold text-gray-900 mt-6 dark:text-white">
            {{ t('title') }}
          </h1>
        </div>
        <!-- TailwindUI-inspired Card component -->
        <div class="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          <div class="px-4 py-5 sm:p-6">
            <div class="text-gray-700 dark:text-gray-300 space-y-6">
              <p class="text-lg">
                {{ t('message') }}
              </p>
              <ProgressBar
                start-time="2024-07-29T19:00:00Z"
                :duration="estimatedTime"
              />
            </div>
            <div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p class="text-gray-600 font-medium text-base">
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
</template>
