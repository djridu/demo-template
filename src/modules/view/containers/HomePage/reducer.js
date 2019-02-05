/*
 * HomeReducer
 */

import { createReducer } from 'create-immer-reducer';
import { CHANGE_USERNAME } from './constants';

// The initial state of the App
export const initialState = {
    username: '',
};

const homeReducer = createReducer(
    {
        [CHANGE_USERNAME]: (draft, payload) => (draft.username = payload.name.replace(/@/gi, '')),
    },
    initialState,
);

export default homeReducer;
