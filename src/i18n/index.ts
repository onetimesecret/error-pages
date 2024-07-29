import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    logoAlt: 'Onetime Secret Logo',
    title: 'Site Maintenance',
    message: 'We are currently performing scheduled maintenance. Please check back soon.',
    estimatedTime: 'Estimated time',
    thankYou: 'Thank you for your patience.',
    statusPage: 'Check our status page for updates',
    switchLanguage: 'Switch language to {lang}',
    toggleDarkMode: 'Toggle dark mode',
    contact: 'If you need to, you can always contact us at',
    email: 'support@onetimesecret.com',
    button: 'Back to home',
  },

  es: {
    logoAlt: 'Logo de Onetime Secret',
    title: 'Mantenimiento del Sitio',
    message: 'Actualmente estamos realizando un mantenimiento programado. Volveremos en breve.',
    estimatedTime: 'Tiempo estimado',
    thankYou: 'Gracias por su paciencia.',
    statusPage: 'Consulte nuestra página de estado para actualizaciones',
    switchLanguage: 'Cambiar idioma a {lang}',
    toggleDarkMode: 'Alternar modo oscuro',
    contact: 'Si lo necesita, siempre puede contactarnos en',
    email: 'support@onetimesecret.com',
    button: 'Volver al inicio',
  },

  fr: {
    logoAlt: 'Logo Onetime Secret',
    title: 'Maintenance du Site',
    message:
      'Nous effectuons actuellement une maintenance programmée. Nous devrions être de retour sous peu.',
    estimatedTime: 'Temps estimé',
    thankYou: 'Merci pour votre patience.',
    statusPage: 'Consultez notre page de statut pour les mises à jour',
    switchLanguage: 'Changer la langue en {lang}',
    toggleDarkMode: 'Activer le mode sombre',
    contact: 'Si vous en avez besoin, vous pouvez toujours nous contacter à',
    email: 'support@onetimesecret.com',
    button: 'Retour à l\'accueil',
  },
};

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});
