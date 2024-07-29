<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps<{
  languages: { code: string; name: string; flag: string }[];
  currentLocale: string;
}>();

const emit = defineEmits<{
  (e: 'switchLanguage', lang: string): void;
}>();

const { t, locale } = useI18n();

const isOpen = ref(false);

const currentLanguage = computed(() =>
  props.languages.find(lang => lang.code === props.currentLocale) || props.languages[0],
);

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

function switchLanguage(lang: string) {
  locale.value = lang;
  emit('switchLanguage', lang);
  document.documentElement.lang = lang;
  isOpen.value = false;
}
</script>

<template>
  <div class="w-full max-w-md mx-auto">
    <h2 class="text-lg font-bold text-brand-500 mb-4">
      {{ t('languages') }}
    </h2>
    <div class="relative">
      <button
        class="w-full flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600"
        @click="toggleDropdown"
      >
        <span class="flex items-center">
          <span class="mr-2">{{ currentLanguage.flag }}</span>
          {{ currentLanguage.name }}
        </span>
        <svg class="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>

      <div v-if="isOpen" class="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg dark:bg-gray-800">
        <ul class="py-1 overflow-auto text-base rounded-md max-h-60 focus:outline-none sm:text-sm">
          <li
            v-for="lang in languages"
            :key="lang.code"
            class="flex items-center px-4 py-2 text-gray-900 cursor-pointer select-none hover:bg-brand-500 hover:text-white dark:text-gray-200 dark:hover:bg-brand-600"
            :class="{ 'bg-brand-500 text-white': locale === lang.code }"
            @click="switchLanguage(lang.code)"
          >
            <span class="mr-2">{{ lang.flag }}</span>
            {{ lang.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
