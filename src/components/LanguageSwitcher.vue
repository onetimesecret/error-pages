<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { storage } from '@/stores/prefs';
import { i18n } from '@/i18n';

const props = defineProps<{
  currentLocale: string;
}>();

const emit = defineEmits<{
  (e: 'switchLanguage', lang: string): void;
}>();

interface Language {
  code: string;
  name: string;
}

const languages: Language[] = [
  { code: 'ar', name: 'Arabic' },
  { code: 'bg', name: 'Bulgarian' },
  { code: 'de', name: 'Deutsch' },
  { code: 'el', name: 'Greek' },
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'fr_CA', name: 'Français canadien' },
  { code: 'fr_CH', name: 'Français suisse' },
  { code: 'hi', name: 'Hindi' },
  { code: 'id', name: 'Indonesian' },
  { code: 'it', name: 'Italian' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'ms', name: 'Malay' },
  { code: 'nl', name: 'Nederlands' },
  { code: 'pl', name: 'Polish' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'pt_BR', name: 'Portuguese (Brazil)' },
  { code: 'ro', name: 'Romanian' },
  { code: 'ru', name: 'Russian' },
  { code: 'sv', name: 'Swedish' },
  { code: 'th', name: 'Thai' },
  { code: 'tr', name: 'Turkish' },
  { code: 'uk', name: 'Ukrainian' },
  { code: 'vi', name: 'Vietnamese' },
  { code: 'zh', name: 'Mandarin' },
];

const { t, locale } = useI18n();

const isOpen = ref(false);
const dropdownButton = ref<HTMLButtonElement | null>(null);
const dropdownList = ref<HTMLUListElement | null>(null);
const focusedIndex = ref(-1);

const currentLanguage = computed(() =>
  languages.find(lang => lang.code === props.currentLocale) || languages[0],
);

const sortedLanguages = computed(() =>
  [...languages].sort((a, b) => a.name.localeCompare(b.name)),
);

function toggleDropdown() {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    openDropdown();
  }
  else {
    closeDropdown();
  }
}

function openDropdown() {
  isOpen.value = true;
  nextTick(() => {
    dropdownList.value?.focus();
    focusedIndex.value = sortedLanguages.value.findIndex(lang => lang.code === props.currentLocale);
    if (focusedIndex.value === -1)
      focusedIndex.value = 0;
  });
}

function closeDropdown(event?: MouseEvent) {
  if (event && dropdownButton.value?.contains(event.target as Node)) {
    return;
  }
  isOpen.value = false;
  dropdownButton.value?.focus();
}

function switchLanguage(lang: string) {
  locale.value = lang;
  // @ts-expect-error "Expects to have a list of available locales"
  i18n.global.locale.value = lang;
  emit('switchLanguage', lang);
  document.documentElement.lang = lang;
  storage.set('language', lang);
  closeDropdown();
}

function focusNext() {
  focusedIndex.value = (focusedIndex.value + 1) % sortedLanguages.value.length;
}

function focusPrev() {
  focusedIndex.value = (focusedIndex.value - 1 + sortedLanguages.value.length) % sortedLanguages.value.length;
}

function selectFocusedOption() {
  if (focusedIndex.value >= 0 && focusedIndex.value < sortedLanguages.value.length) {
    switchLanguage(sortedLanguages.value[focusedIndex.value].code);
  }
}

watch(isOpen, (newValue) => {
  if (newValue) {
    document.addEventListener('click', closeDropdown);
  }
  else {
    document.removeEventListener('click', closeDropdown);
  }
});
</script>

<template>
  <div class="max-w-md mx-auto w-full">
    <h2 class="font-bold text-brand-500 text-lg mb-4">
      {{ t('languages') }}
    </h2>
    <div class="relative">
      <button
        ref="dropdownButton"
        class="w-full flex px-4 text-gray-700 bg-white dark:text-gray-200 items-center justify-between text-sm dark:bg-gray-800 py-2 font-medium border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 dark:border-gray-600"
        aria-haspopup="listbox"
        :aria-expanded="isOpen"
        @click="toggleDropdown"
        @keydown.enter="toggleDropdown"
        @keydown.space.prevent="toggleDropdown"
        @keydown.down.prevent="focusNext"
        @keydown.up.prevent="focusPrev"
      >
        <span class="flex items-center">
          {{ currentLanguage.name }}
        </span>
        <svg class="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>

      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <div v-if="isOpen" class="absolute w-full bg-white rounded-md shadow-lg dark:bg-gray-800 z-10 mt-1">
          <ul
            ref="dropdownList"
            class="text-base rounded-md focus:outline-none py-1 overflow-auto max-h-60 sm:text-sm"
            tabindex="-1"
            role="listbox"
            @keydown.enter.prevent="selectFocusedOption"
            @keydown.space.prevent="selectFocusedOption"
            @keydown.esc="closeDropdown"
            @keydown.down.prevent="focusNext"
            @keydown.up.prevent="focusPrev"
          >
            <li
              v-for="(lang, index) in sortedLanguages"
              :key="lang.code"
              class="flex items-center px-4 py-2 text-gray-900 dark:text-gray-200 cursor-pointer select-none hover:bg-brand-500 hover:text-white dark:hover:bg-brand-600"
              :class="{
                'bg-brand-500 text-white': props.currentLocale === lang.code,
                'bg-brand-100 dark:bg-brand-700': focusedIndex === index,
              }"
              role="option"
              :aria-selected="props.currentLocale === lang.code"
              @click="switchLanguage(lang.code)"
              @mouseenter="focusedIndex = index"
            >
              {{ lang.name }}
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>
