import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import router from '@/router';
import { storage } from '@/stores/prefs';
import { i18n } from '@/i18n';
import App from '@/App.vue';

const app = createApp(App);

// Dark mode persistence
const savedDarkMode = storage.get('darkMode');
if (savedDarkMode !== null) {
  document.documentElement.classList.toggle('dark', savedDarkMode === 'true');
}
else {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.classList.toggle('dark', prefersDark);
  storage.set('darkMode', prefersDark.toString());
}

// Language persistence
const savedLanguage = storage.get('language');
if (savedLanguage) {
  // @ts-expect-error "Expects a list of valid locales"
  i18n.global.locale.value = savedLanguage;
}

app.use(i18n);
app.use(createPinia());
app.use(router);

app.mount('#app');
