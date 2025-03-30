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
                {{ t('message') }}
              </p>
              <!-- <ProgressBar
                :start-time="startTime"
                :duration="estimatedTime"
              /> -->
              <!-- <p>
                See our <a href="https://docs.onetimesecret.com/blog/2024-09-09-denial-of-service" title="More information about the DDoS attack in this blog post from Sept 9th, 2024" target="_blank" class="text-brandcomp-600 hover:text-brandcomp-800 dark:text-brandcomp-400 dark:hover:text-brandcomp-200 underline focus:outline-none focus:ring-2 focus:ring-brandcomp-500 dark:focus:ring-brandcomp-400 rounded">blog post</a> for more details.
              </p> -->

              <!-- Improved error message area with Tailwind CSS 3 classes -->
              <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <div class="flex items-start">
                  <div class="flex-shrink-0">
                    <!-- Error icon -->
                    <svg class="h-5 w-5 text-red-500 dark:text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div class="ml-3 w-full">
                    <h2 class="text-lg font-medium text-red-800 dark:text-red-300">
                      500 - Server Error
                    </h2>
                    <div class="mt-2 text-sm text-red-700 dark:text-red-300">
                      <p>We're sorry, but something went wrong on our end.</p>
                      <div class="mt-3 p-3 bg-red-100 dark:bg-red-800/30 rounded border border-red-200 dark:border-red-700/50 font-mono text-sm text-red-800 dark:text-red-200 break-words">
                        ::CLOUDFLARE_ERROR_500S_BOX::
                      </div>
                      <p class="mt-3 font-medium">
                        Ray ID: <span class="font-mono">::RAY_ID::</span>
                      </p>
                      <p class="mt-2">
                        We've been notified of this issue and are working to resolve it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p class="text-gray-600 dark:text-gray-400 font-medium text-base">
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
