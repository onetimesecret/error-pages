<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { storage } from '@/stores/prefs';
import { i18n } from '@/i18n';

const props = defineProps<{
  languages: { code: string; name: string; flag: string; region: string }[];
  currentLocale: string;
}>();

const emit = defineEmits<{
  (e: 'switchLanguage', lang: string): void;
}>();

const { t, locale } = useI18n();

const isOpen = ref(false);
const dropdownButton = ref<HTMLButtonElement | null>(null);
const dropdownList = ref<HTMLUListElement | null>(null);
const focusedIndex = ref(-1);

const currentLanguage = computed(() =>
  props.languages.find(lang => lang.code === props.currentLocale) || props.languages[0],
);

const groupedLanguages = computed(() => {
  const groups: { [key: string]: typeof props.languages } = {};
  props.languages.forEach((lang) => {
    if (!groups[lang.region]) {
      groups[lang.region] = [];
    }
    groups[lang.region].push(lang);
  });
  return groups;
});

function toggleDropdown() {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    openDropdown();
  }
  else {
    closeDropdown();
  }
}

// Update the openDropdown function to set initial focus
// Add this new computed property
const flattenedLanguages = computed(() => Object.values(groupedLanguages.value).flat());
function openDropdown() {
  isOpen.value = true;
  nextTick(() => {
    dropdownList.value?.focus();
    focusedIndex.value = flattenedLanguages.value.findIndex(lang => lang.code === props.currentLocale);
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
  i18n.global.locale.value = lang;
  emit('switchLanguage', lang);
  document.documentElement.lang = lang;
  storage.set('language', lang);
  closeDropdown();
}

// Update these functions
function focusNext() {
  const totalOptions = flattenedLanguages.value.length;
  do {
    focusedIndex.value = (focusedIndex.value + 1) % totalOptions;
  } while (flattenedLanguages.value[focusedIndex.value].region === 'header');
}

function focusPrev() {
  const totalOptions = flattenedLanguages.value.length;
  do {
    focusedIndex.value = (focusedIndex.value - 1 + totalOptions) % totalOptions;
  } while (flattenedLanguages.value[focusedIndex.value].region === 'header');
}

function selectFocusedOption() {
  if (focusedIndex.value >= 0 && focusedIndex.value < flattenedLanguages.value.length) {
    switchLanguage(flattenedLanguages.value[focusedIndex.value].code);
  }
}

// Lazy loading implementation
const loadedLanguages = ref<typeof props.languages>([]);
const itemsPerBatch = 20;
const loadingTimeout: number | null = null;

function loadMoreLanguages() {
  if (loadingTimeout) {
    clearTimeout(loadingTimeout);
  }

  setTimeout(() => {
    const start = loadedLanguages.value.length;
    const end = Math.min(start + itemsPerBatch, props.languages.length);
    loadedLanguages.value = loadedLanguages.value.concat(props.languages.slice(start, end));

    if (end < props.languages.length) {
      loadMoreLanguages();
    }
  }, 100);
}

onMounted(() => {
  loadMoreLanguages();
});

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
    <h2 class="font-bold text-lg text-brand-500 mb-4">
      {{ t('languages') }}
    </h2>
    <div class="relative">
      <button
        ref="dropdownButton"
        class="w-full flex px-4 text-gray-700 bg-white dark:text-gray-200 items-center justify-between py-2 text-sm font-medium border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 dark:bg-gray-800 dark:border-gray-600"
        aria-haspopup="listbox"
        :aria-expanded="isOpen"
        @click="toggleDropdown"
        @keydown.enter="toggleDropdown"
        @keydown.space.prevent="toggleDropdown"
        @keydown.down.prevent="focusNext"
        @keydown.up.prevent="focusPrev"
      >
        <span class="flex items-center">
          <span class="mr-2">{{ currentLanguage.flag }}</span>
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
            <template v-for="(group, groupName) in groupedLanguages" :key="groupName">
              <li class="py-2 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400">
                {{ groupName }}
              </li>
              <li
                v-for="lang in group"
                :key="lang.code"
                class="flex items-center px-4 py-2 text-gray-900 dark:text-gray-200 cursor-pointer select-none hover:bg-brand-500 hover:text-white dark:hover:bg-brand-600"
                :class="{
                  'bg-brand-500 text-white': props.currentLocale === lang.code,
                  'bg-brand-100 dark:bg-brand-700': focusedIndex === flattenedLanguages.indexOf(lang),
                }"
                role="option"
                :aria-selected="props.currentLocale === lang.code"
                @click="switchLanguage(lang.code)"
                @mouseenter="focusedIndex = flattenedLanguages.indexOf(lang)"
              >
                <span class="mr-2">{{ lang.flag }}</span>
                {{ lang.name }}
              </li>
            </template>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>
