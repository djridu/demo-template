/*
 * App Actions
 */

import { LOAD_REPOS, LOAD_REPOS_SUCCESS, LOAD_REPOS_ERROR } from './constants';

export function loadRepos() {
    return {
        type: LOAD_REPOS,
    };
}

export function reposLoaded(repos, username) {
    return {
        type: LOAD_REPOS_SUCCESS,
        payload: {
            repos,
            username,
        },
    };
}

export function repoLoadingError(error) {
    return {
        type: LOAD_REPOS_ERROR,
        payload: {
            error,
        },
    };
}
