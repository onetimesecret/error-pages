<!-- src/components/Footer.vue -->
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <footer class="bg-white dark:bg-gray-800 py-4 mt-auto">
    <div class="mx-auto px-4 container">
      <div class="flex items-center justify-between">
        <div class="text-gray-600 text-sm dark:text-gray-400">
          © {{ new Date().getFullYear() }} Onetime Secret.
        </div>
        <div>
          <a
            href="https://status.onetimesecret.com"
            class="text-sm text-brand-500 transition-colors duration-300 hover:text-brand-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ t('statusPage') }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
