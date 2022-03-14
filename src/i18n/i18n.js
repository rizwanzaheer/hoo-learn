import { createI18n as _createI18n } from 'vue-i18n';
import messages from './locales/index';

// const messageImports = import.meta.glob('./locales/*.json')
// console.log(messageImports)

export const SUPPORT_LOCALES = ['en', 'ko', 'zh_cn', 'zh_tw', 'ar'];

export function createI18n() {
    return _createI18n({
        legacy: false,
        globalInjection: true,
        locale: 'en',
        fallbackLocale: 'en',
        messages,
    });
}
