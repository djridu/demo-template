/*
 *
 * LanguageProvider actions
 *
 */

import { CHANGE_LOCALE } from './constants';

export function changeLocale(languageLocale) {
    return {
        type: CHANGE_LOCALE,
        payload: {
            locale: languageLocale,
        },
    };
}
