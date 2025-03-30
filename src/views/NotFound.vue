<!-- src/views/NotFound.vue -->
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import ActiveLogo from '@/components/ActiveLogo.vue';

const { t } = useI18n();
</script>

<template>
  <!-- Main content -->
  <main class="flex-grow">
    <div class="flex min-h-screen px-4 justify-center items-start sm:px-6 lg:px-8 pt-40">
      <div class="w-full max-w-md space-y-8">
        <div class="text-center">
          <router-link to="/">
            <ActiveLogo
              class="mx-auto h-12 w-12"
              :pulse-rate="2"
            />
          </router-link>
          <h1 class="text-3xl font-extrabold text-gray-900 mt-6 dark:text-white">
            {{ t('404') }}
          </h1>
        </div>

        <!-- TailwindUI-inspired Card component -->
        <div class="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          <div class="px-4 py-5 sm:p-6">
            <div class="text-gray-700 dark:text-gray-300 space-y-6">
              <div>
                <h1 class="text-2xl dark:text-gray-300 font-bold mb-2">
                  404 - Page Not Found
                </h1>
                <p class="text-gray-600 dark:text-gray-400">
                  The page you are looking for doesn't exist.
                </p>
              </div>
            </div>
            <div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p class="text-gray-600 dark:text-gray-400 font-medium text-base">
                {{ t('thankYou') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
