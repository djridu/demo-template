/*
 * AppReducer
 */

import { createReducer } from 'create-immer-reducer';
import { LOAD_REPOS_SUCCESS, LOAD_REPOS, LOAD_REPOS_ERROR } from './constants';

// The initial state of the App
const initialState = {
    loading: false,
    error: false,
    currentUser: false,
    userData: {
        repositories: false,
    },
};

const appReducer = createReducer(
    {
        [LOAD_REPOS]: draft => {
            draft.loading = true;
            draft.error = false;
            draft.userData.repositories = false;
        },
        [LOAD_REPOS_SUCCESS]: (draft, payload) => {
            draft.loading = false;
            draft.currentUser = payload.username;
            draft.userData.repositories = payload.repos;
        },
        [LOAD_REPOS_ERROR]: (draft, payload) => {
            draft.error = payload.error;
            draft.loading = false;
        },
    },
    initialState,
);

export default appReducer;
