import I18n from 'i18n-js';
import * as locales from '../locales/en.json';

const pluralizer = (count: number) => {
    let key;
    if (count === 1) {
        key = 'one';
    } else {
        key = 'many';
    }

    return [key];
};

I18n.defaultLocale = 'en';
I18n.locale = 'en';
I18n.fallbacks = true;
I18n.translations = {
    en: locales.en,
};
I18n.pluralization.en = pluralizer;

export default I18n;
