import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";


i18n.use(Backend)
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
        backend: {
            loadPath: 'media/translations/{{ns}}/{{lng}}.json'
        },
        fallbackLng:'es',
        debug: true,
        ns: ['menu', 'navbar','classic', 'survival','scoreForm','switchLanguage'],
        interpolation: {
            escapeValue: false,
            formatSeparator: ","
        },
        react: {
            wait: true
        },
});

export default i18n;