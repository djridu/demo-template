/*
 *
 * LanguageProvider reducer
 *
 */

import { createReducer } from 'create-immer-reducer';

import { DEFAULT_LOCALE } from 'utils/i18n';
import { CHANGE_LOCALE } from './constants';

export const initialState = {
    locale: DEFAULT_LOCALE,
};

const languageProviderReducer = createReducer(
    {
        [CHANGE_LOCALE]: (draft, payload) => (draft.locale = payload.locale),
    },
    initialState,
);

export default languageProviderReducer;
