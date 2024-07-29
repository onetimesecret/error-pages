<!-- LanguageSwitcher.vue -->
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

defineProps<{
  languages: { code: string, name: string, flag: string }[]
  currentLocale: string
}>()

const emit = defineEmits<{
  (e: 'switchLanguage', lang: string): void
}>()

const { t, locale } = useI18n()

function switchLanguage(lang: string) {
  locale.value = lang
  emit('switchLanguage', lang)
  document.documentElement.lang = lang
}
</script>

<template>
  <div class="flex space-x-2">
    <button
      v-for="lang in languages"
      :key="lang.code"
      class="rounded-full transition-colors text-sm duration-300 px-3 py-1"
      :class="locale === lang.code
        ? 'bg-brand-500 text-white'
        : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
      "
      :aria-label="t('switchLanguage', { lang: lang.name })"
      @click="switchLanguage(lang.code)"
    >
      {{ lang.name }}
    </button>
  </div>
</template>
