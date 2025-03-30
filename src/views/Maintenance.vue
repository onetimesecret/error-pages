<script setup lang="ts">
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import ActiveLogo from '@/components/ActiveLogo.vue';
import ProgressBar from '@/components/ProgressBar.vue';
import LanguageSwitcher from '@/components/LanguageSwitcher.vue';

const { t, locale } = useI18n();

const startTime = ref('2024-08-08T02:40:00Z');
const estimatedTime = ref('60 minutes');

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
          <router-link to="/">
            <ActiveLogo
              class="mx-auto h-12 w-12 rounded"
              :pulse-rate="3"
            />
          </router-link>

          <h1 class="text-3xl font-extrabold text-gray-900 mt-6 dark:text-white">
            {{ t('title') }}
          </h1>
        </div>

        <!-- TailwindUI-inspired Card component -->
        <div class="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          <div class="px-4 py-5 sm:p-6">
            <div class="text-gray-700 dark:text-gray-300 space-y-6">
              <p class="text-lg">
                <a href="https://docs.onetimesecret.com/blog/2024-09-09-denial-of-service" title="More information about the DDoS attack in this blog post from Sept 9th, 2024" target="_blank">{{ t('message') }}</a>
              </p>
              <!-- <ProgressBar
                :start-time="startTime"
                :duration="estimatedTime"
              /> -->
              <p>
                See our <a href="https://docs.onetimesecret.com/blog/2024-09-09-denial-of-service" title="More information about the DDoS attack in this blog post from Sept 9th, 2024" target="_blank" class="text-brandcomp-600 hover:text-brandcomp-800 dark:text-brandcomp-400 dark:hover:text-brandcomp-200 underline focus:outline-none focus:ring-2 focus:ring-brandcomp-500 dark:focus:ring-brandcomp-400 rounded">blog post</a> for more details.
              </p>
            </div>
            <div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p class="text-gray-600 font-medium text-base">
                {{ t('thankYou') }}
                <!-- See our <a href="https://docs.onetimesecret.com/blog/2024-09-09-denial-of-service" title="More information about the DDoS attack in this blog post from Sept 9th, 2024" target="_blank">blog post for more details</a>. -->
              </p>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center">
          <LanguageSwitcher
            :current-locale="locale"
            @switch-language="switchLanguage"
          />
        </div>
      </div>
    </div>
  </main>
</template>
