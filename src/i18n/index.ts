import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    logoAlt: 'Onetime Secret Logo',
    title: 'Site Maintenance',
    message: 'We have been experienceing a Denial of Service attack since the early morning on Sep 9, 2024 (PDT). More information is posted on our blog.',
    estimatedTime: 'Estimated time',
    thankYou: 'Thank you for your patience.',
    statusPage: 'Check our status page for updates',
    switchLanguage: 'Switch language to {lang}',
    toggleDarkMode: 'Toggle dark mode',
    contact: 'If you need to, you can always contact us at',
    email: 'support@onetimesecret.com',
    button: 'Back to home',
    complete: 'Complete',
    languages: 'Languages',
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
    complete: 'Completo',
    languages: 'Idiomas',
  },

  fr: {
    logoAlt: 'Logo Onetime Secret',
    title: 'Maintenance du Site',
    message: 'Nous effectuons actuellement une maintenance programmée. Nous devrions être de retour sous peu.',
    estimatedTime: 'Temps estimé',
    thankYou: 'Merci pour votre patience.',
    statusPage: 'Consultez notre page de statut pour les mises à jour',
    switchLanguage: 'Changer la langue en {lang}',
    toggleDarkMode: 'Activer le mode sombre',
    contact: 'Si vous en avez besoin, vous pouvez toujours nous contacter à',
    email: 'support@onetimesecret.com',
    button: 'Retour à l\'accueil',
    complete: 'Complet',
    languages: 'Langues',
  },

  de: {
    logoAlt: 'Onetime Secret Logo',
    title: 'Website Wartung',
    message: 'Wir führen gerade eine geplante Wartung durch. Bitte versuchen Sie es später erneut.',
    estimatedTime: 'Geschätzte Zeit',
    thankYou: 'Vielen Dank für Ihre Geduld.',
    statusPage: 'Überprüfen Sie unsere Statusseite auf Updates',
    switchLanguage: 'Sprache zu {lang} wechseln',
    toggleDarkMode: 'Dunklen Modus umschalten',
    contact: 'Wenn Sie Hilfe benötigen, können Sie uns jederzeit unter folgender Adresse erreichen:',
    email: 'support@onetimesecret.com',
    button: 'Zur Startseite zurück',
    complete: 'Fertiggestellt',
    languages: 'Sprachen',
  },

  nl: {
    logoAlt: 'Onetime Secret Logo',
    title: 'Website Onderhoud',
    message: 'We zijn momenteel bezig met een gepland onderhoud. We zullen snel terug zijn.',
    estimatedTime: 'Geschatte tijd',
    thankYou: 'Bedankt voor uw geduld.',
    statusPage: 'Controleer onze statuspagina op updates',
    switchLanguage: 'Switch taal naar {lang}',
    toggleDarkMode: 'Schakel donkere modus in',
    contact: 'Als u hulp nodig heeft, kunt u ons altijd bereiken op',
    email: 'support@onetimesecret.com',
    button: 'Terug naar de homepage',
    complete: 'Voltooid',
    languages: 'Talen',
  },
  bg: {
    logoAlt: 'Лого на Onetime Secret',
    title: 'Профилактика на сайта',
    message: 'В момента извършваме планирана профилактика. Моля, опитайте отново по-късно.',
    estimatedTime: 'Очаквано време',
    thankYou: 'Благодарим ви за търпението.',
    statusPage: 'Проверете нашата страница за статус за актуализации',
    switchLanguage: 'Смяна на езика на {lang}',
    toggleDarkMode: 'Превключване на тъмен режим',
    contact: 'Ако имате нужда от помощ, можете да се свържете с нас на:',
    email: 'support@onetimesecret.com',
    button: 'Обратно към началната страница',
    complete: 'Завършено',
    languages: 'Езици',
  },

  fr_CA:
  {
    logoAlt: 'Logo Onetime Secret',
    title: 'Entretien du site web',
    message: 'Nous effectuons actuellement une maintenance planifiée. Veuillez revenir dans quelques instants.',
    estimatedTime: 'Durée estimée',
    thankYou: 'Merci pour votre patience.',
    statusPage: 'Consultez notre page de statut pour les mises à jour',
    switchLanguage: 'Basculer la langue vers {lang}',
    toggleDarkMode: 'Basculer le mode sombre',
    contact: 'Si nécessaire, vous pouvez toujours nous contacter à',
    email: 'support@onetimesecret.com',
    button: 'Retour à l\'accueil',
    complete: 'Terminé',
    languages: 'Langues',
  },

  fr_CH:
  {
    logoAlt: 'Logo Onetime Secret',
    title: 'Entretien du site web',
    message: 'Nous effectuons actuellement une maintenance planifiée. Veuillez revenir plus tard.',
    estimatedTime: 'Durée estimée',
    thankYou: 'Merci pour votre compréhension.',
    statusPage: 'Consultez notre page de statut pour les informations',
    switchLanguage: 'Changer la langue vers {lang}',
    toggleDarkMode: 'Activer le mode sombre',
    contact: 'Vous pouvez nous contacter à l\'adresse',
    email: 'support@onetimesecret.com',
    button: 'Retour à la page d\'accueil',
    complete: 'Terminé',
    languages: 'Langues',
  },
  hi:
  {
    logoAlt: 'Onetime Secret Logo',
    title: 'साइट मेंटेनेंस',
    message: 'हम नियमित रखरखाव कर रहे हैं. कृपया थोड़ी देर बाद फिर से जांचें.',
    estimatedTime: 'अनुमानित समय',
    thankYou: 'आपके धैर्य के लिए धन्यवाद.',
    statusPage: 'अपडेट के लिए हमारे स्टेटस पेज पर जाएं',
    switchLanguage: 'स्विच भाषा {lang} में',
    toggleDarkMode: 'डार्क मोड टॉगल करें',
    contact: 'आप हमेशा नीचे दिए गए ईमेल पर संपर्क कर सकते हैं',
    email: 'support@onetimesecret.com',
    button: 'होमपेज पर जाएं',
    complete: 'पूर्ण',
    languages: 'भाषाएँ',
  },
  zh:
  {
    logoAlt: 'Onetime Secret Logo',
    title: '网站维护',
    message: '我们正在进行定期维护。请稍后再次访问。',
    estimatedTime: '预计时间',
    thankYou: '感谢您的耐心',
    statusPage: '查看我们的状态页面以获取更新',
    switchLanguage: '切换语言到 {lang}',
    toggleDarkMode: '切换暗模式',
    contact: '如果需要，您总是可以联系我们：',
    email: 'support@onetimesecret.com',
    button: '返回主页',
    complete: '完成',
    languages: '语言',

  },
  ja:
  {
    logoAlt: 'Onetime Secret Logo',
    title: 'サイトメンテナンス',
    message: '定期メンテナンスを行っています。もう少しお待ちください。',
    estimatedTime: '推定所要時間',
    thankYou: 'ご協力に感謝いたします',
    statusPage: '最新情報はステータスページをご覧ください',
    switchLanguage: '{lang}語に対応したページへ切り替える',
    toggleDarkMode: 'ダークモードの切り替え',
    contact: 'お問い合わせが必要な場合は、下記のメールアドレスまでご連絡ください',
    email: 'support@onetimesecret.com',
    button: 'ホームページに戻る',
    complete: '完了',
    languages: '言語',
  },
  pt: {
    logoAlt: 'Logótipo Onetime Secret',
    title: 'Manutenção do Site',
    message: 'Estamos a realizar uma manutenção programada. Por favor, volte mais tarde.',
    estimatedTime: 'Tempo estimado',
    thankYou: 'Obrigado pela sua paciência.',
    statusPage: 'Consulte a nossa página de estado para atualizações',
    switchLanguage: 'Mudar idioma para {lang}',
    toggleDarkMode: 'Alternar modo escuro',
    contact: 'Se precisar de ajuda, pode sempre contactar-nos através de',
    email: 'support@onetimesecret.com',
    button: 'Voltar à página inicial',
    complete: 'Concluído',
    languages: 'Idiomas',
  },
  pt_BR: {
    logoAlt: 'Logo Onetime Secret',
    title: 'Manutenção do Site',
    message: 'Estamos realizando uma manutenção programada. Por favor, volte mais tarde.',
    estimatedTime: 'Tempo estimado',
    thankYou: 'Obrigado pela sua paciência.',
    statusPage: 'Consulte nossa página de status para atualizações',
    switchLanguage: 'Mudar idioma para {lang}',
    toggleDarkMode: 'Alternar modo escuro',
    contact: 'Se precisar de ajuda, você pode entrar em contato conosco pelo',
    email: 'support@onetimesecret.com',
    button: 'Voltar à página inicial',
    complete: 'Concluído',
    languages: 'Idiomas',
  },

  ru: {
    logoAlt: 'Логотип Onetime Secret',
    title: 'Техническое обслуживание сайта',
    message: 'Мы проводим плановое техническое обслуживание. Пожалуйста, вернитесь позже.',
    estimatedTime: 'Предполагаемое время',
    thankYou: 'Спасибо за ваше терпение.',
    statusPage: 'Проверьте нашу страницу статусов для обновлений',
    switchLanguage: 'Переключить язык на {lang}',
    toggleDarkMode: 'Переключить темный режим',
    contact: 'Если вам нужна помощь, вы можете связаться с нами по адресу',
    email: 'support@onetimesecret.com',
    button: 'Вернуться на главную страницу',
    complete: 'Завершено',
    languages: 'Языки',
  },

  ar: {
    logoAlt: 'شعار Onetime Secret',
    title: 'صيانة الموقع',
    message: 'نحن نقوم حاليًا بأعمال الصيانة المجدولة. يرجى العودة لاحقًا.',
    estimatedTime: 'الوقت المتوقع',
    thankYou: 'شكرًا لصبركم.',
    statusPage: 'تحقق من صفحة الحالة للحصول على التحديثات',
    switchLanguage: 'تغيير اللغة إلى {lang}',
    toggleDarkMode: 'تبديل الوضع الداكن',
    contact: 'إذا كنت بحاجة إلى مساعدة، يمكنك التواصل معنا على',
    email: 'support@onetimesecret.com',
    button: 'العودة إلى الصفحة الرئيسية',
    complete: 'مكتمل',
    languages: 'اللغات',
  },

  ko: {
    logoAlt: 'Onetime Secret 로고',
    title: '사이트 유지 보수',
    message: '정기적인 유지 보수를 진행 중입니다. 잠시 후에 다시 방문해 주십시오.',
    estimatedTime: '예상 시간',
    thankYou: '귀하의 양해를 부탁드립니다.',
    statusPage: ' 업데이트를 확인하려면 상태 페이지를 방문하십시오',
    switchLanguage: '언어를 {lang}으로 전환',
    toggleDarkMode: '다크 모드 전환',
    contact: '도움이 필요하시면 언제든지 다음 주소로 연락해 주십시오',
    email: 'support@onetimesecret.com',
    button: '홈페이지로 돌아가기',
    complete: '완료됨',
    languages: '언어',
  },

  it: {
    logoAlt: 'Logo Onetime Secret',
    title: 'Manutenzione del sito',
    message: 'Stiamo eseguendo la manutenzione pianificata. Per favore, ritorna più tardi.',
    estimatedTime: 'Tempo stimato',
    thankYou: 'Grazie per la tua pazienza.',
    statusPage: 'Verifica la nostra pagina di stato per gli aggiornamenti',
    switchLanguage: 'Cambia lingua in {lang}',
    toggleDarkMode: 'Attiva il modo notturno',
    contact: 'Se hai bisogno di aiuto, puoi contattarci all\'indirizzo',
    email: 'support@onetimesecret.com',
    button: 'Torna alla homepage',
    complete: 'Completato',
    languages: 'Lingue',
  },

  tr: {
    logoAlt: 'Onetime Secret Logosu',
    title: 'Site Bakımı',
    message: 'Planlı bakım işlemi đang. Lütfen daha sonra tekrar deneyin.',
    estimatedTime: 'Tahmini zaman',
    thankYou: 'Sabrınız için teşekkür ederiz.',
    statusPage: 'Güncellemeler için durum sayfamızı ziyaret edin',
    switchLanguage: 'Dili {lang} olarak değiştir',
    toggleDarkMode: 'Karanlık modu aç',
    contact: 'Yardım需要 entonces bize ulaşmak için aşağıdaki adrese başvurun',
    email: 'support@onetimesecret.com',
    button: 'Ana sayfaya dön',
    complete: 'Tamamlandı',
    languages: 'Diller',
  },
  pl: {
    logoAlt: 'Logo Onetime Secret',
    title: 'Konserwacja strony',
    message: 'Przeprowadzamy planowaną konserwację. Proszę spróbuj ponownie później.',
    estimatedTime: 'Przewidywany czas',
    thankYou: 'Dziękujemy za cierpliwość.',
    statusPage: 'Sprawdź naszą stronę statusu w celu uzyskania aktualizacji',
    switchLanguage: 'Przełącz język na {lang}',
    toggleDarkMode: 'Przełącz tryb ciemny',
    contact: 'Jeśli potrzebujesz pomocy, skontaktuj się z nami pod adresem',
    email: 'support@onetimesecret.com',
    button: 'Wróć na stronę główną',
    complete: 'Zakończone',
    languages: 'Języki',
  },
  sv: {
    logoAlt: 'Onetime Secret-logotyp',
    title: 'Webbplatsunderhåll',
    message: 'Vi utför planerat underhåll. Var vänlig och försök igen senare.',
    estimatedTime: 'Beräknad tid',
    thankYou: 'Tack för din tålamod.',
    statusPage: 'Kontrollera vår statussida för uppdateringar',
    switchLanguage: 'Byt språk till {lang}',
    toggleDarkMode: 'Aktivera mörkt läge',
    contact: 'Om du behöver hjälp kan du kontakta oss på',
    email: 'support@onetimesecret.com',
    button: 'Återgå till startsidan',
    complete: 'Avslutat',
    languages: 'Språk',
  },
  el: {
    logoAlt: 'Λογότυπο Onetime Secret',
    title: 'Συντήρηση Ιστοσελίδας',
    message: 'Εκτελούμε προγραμματισμένη συντήρηση. Παρακαλώ δοκιμάστε ξανά αργότερα.',
    estimatedTime: 'Εκτιμώμενος χρόνος',
    thankYou: 'Ευχαριστώ για τη διαισθητικότητά σας.',
    statusPage: 'Ελέγξτε τη σελίδα μας για κατανόηση των ενημερώσεων',
    switchLanguage: 'Αλλάξτε γλώσσα σε {lang}',
    toggleDarkMode: 'Ενεργοποίηση dark mode',
    contact: 'Αν χρειάζεστε βοήθεια, μπορείτε να επικοινωνήσετε μαζί μας στο',
    email: 'support@onetimesecret.com',
    button: 'Επιστροφή στην αρχική σελίδα',
    complete: 'Ολοκληρωμένο',
    languages: 'Γλώσσες',
  },
  vi: {
    logoAlt: 'Logo Onetime Secret',
    title: 'Bảo trì trang web',
    message: 'Chúng tôi đang thực hiện bảo trì theo lịch trình. Vui lòng thử lại sau.',
    estimatedTime: 'Thời gian dự kiến',
    thankYou: 'Cảm ơn vì đã kiên nhẫn.',
    statusPage: 'Kiểm tra trang trạng thái của chúng tôi để cập nhật',
    switchLanguage: 'Chuyển ngôn ngữ sang {lang}',
    toggleDarkMode: 'Chuyển đổi chế độ tối',
    contact: 'Nếu bạn cần hỗ trợ, hãy liên hệ với chúng tôi tại',
    email: 'support@onetimesecret.com',
    button: 'Quay lại trang chủ',
    complete: 'Hoàn thành',
    languages: 'Ngôn ngữ',
  },
  th: {
    logoAlt: 'โลโก้ Onetime Secret',
    title: 'การบำรุงรักษาเว็บไซต์',
    message: 'เรากำลังดำเนินการบำรุงรักษาตามแผน โปรดลองอีกครั้งภายหลัง',
    estimatedTime: 'เวลาโดยประมาณ',
    thankYou: 'ขอขอบคุณสำหรับความอดทนของคุณ',
    statusPage: 'ตรวจสอบหน้าสถานะของเราเพื่ออัปเดต',
    switchLanguage: 'เปลี่ยนภาษาเป็น {lang}',
    toggleDarkMode: 'เปิดใช้งานโหมดมืด',
    contact: 'หากคุณต้องการความช่วยเหลือ คุณสามารถติดต่อกลับไปที่',
    email: 'support@onetimesecret.com',
    button: 'กลับไปยังหน้าแรก',
    complete: 'เสร็จสมบูรณ์',
    languages: 'ภาษา',
  },

  id: {
    logoAlt: 'Logo Onetime Secret',
    title: 'Pemeliharaan Situs',
    message: 'Kami sedang melakukan pemeliharaan terjadwal. Silakan coba lagi nanti.',
    estimatedTime: 'Perkiraan waktu',
    thankYou: 'Terima kasih atas kesabaran Anda.',
    statusPage: 'Periksa halaman status kami untuk pembaruan',
    switchLanguage: 'Ganti bahasa ke {lang}',
    toggleDarkMode: 'Beralih ke mode gelap',
    contact: 'Jika Anda memerlukan bantuan, Anda dapat menghubungi kami di',
    email: 'support@onetimesecret.com',
    button: 'Kembali ke halaman utama',
    complete: 'Selesai',
    languages: 'Bahasa',
  },

  uk: {
    logoAlt: 'Логотип Onetime Secret',
    title: 'Технічне обслуговування сайту',
    message: 'Ми проводимо планове технічне обслуговування. Будь ласка, спробуйте знову пізніше.',
    estimatedTime: 'Орієнтовний час',
    thankYou: 'Дякуємо за ваше терпіння.',
    statusPage: 'Перевірте нашу сторінку стану для отримання оновлень',
    switchLanguage: 'Змінити мову на {lang}',
    toggleDarkMode: 'Перемкнути темний режим',
    contact: 'Якщо вам потрібна допомога, ви можете зв\'язатися з нами за адресою',
    email: 'support@onetimesecret.com',
    button: 'Повернутися на головну сторінку',
    complete: 'Завершено',
    languages: 'Мови',
  },

  ro: {
    logoAlt: 'Logo Onetime Secret',
    title: 'Întreținerea site-ului',
    message: 'Suntem în curs de a efectua întreținerea planificată. Vă rugăm să încercați din nou mai târziu.',
    estimatedTime: 'Timpul estimat',
    thankYou: 'Vă mulțumim pentru răbdarea dumneavoastră.',
    statusPage: 'Verificați pagina noastră de stare pentru actualizări',
    switchLanguage: 'Schimbați limba în {lang}',
    toggleDarkMode: 'Activează modul întunecat',
    contact: 'Dacă aveți nevoie de ajutor, puteți să ne contactați la',
    email: 'support@onetimesecret.com',
    button: 'Înapoi la pagina principală',
    complete: 'Finalizat',
    languages: 'Limbi',
  },

  ms: {
    logoAlt: 'Logo Onetime Secret',
    title: 'Penyelenggaraan Laman',
    message: 'Kami sedang melakukan penyelenggaraan terjadwal. Sila cuba lagi kemudian.',
    estimatedTime: 'Masa yang dijangka',
    thankYou: 'Terima kasih atas kesabaran anda.',
    statusPage: 'Periksa halaman status kami untuk kemas kini',
    switchLanguage: 'Tukar bahasa ke {lang}',
    toggleDarkMode: 'Aktifkan mod gelap',
    contact: 'Jika anda memerlukan bantuan, anda boleh menghubungi kami di',
    email: 'support@onetimesecret.com',
    button: 'Kembali ke laman utama',
    complete: 'Selesai',
    languages: 'Bahasa',
  },

};

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});
