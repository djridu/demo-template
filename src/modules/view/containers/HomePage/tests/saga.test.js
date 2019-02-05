/**
 * Tests for HomePage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { LOAD_REPOS } from 'containers/App/constants';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';

import githubData, { getRepos } from '../saga';

const username = 'gaearon';

describe('getRepos Saga', () => {
    let getReposGenerator;

    beforeEach(() => {
        getReposGenerator = getRepos();

        const selectDescriptor = getReposGenerator.next().value;
        expect(selectDescriptor).toMatchSnapshot();

        const callDescriptor = getReposGenerator.next(username).value;
        expect(callDescriptor).toMatchSnapshot();
    });

    it('should dispatch the reposLoaded action if it requests the data successfully', () => {
        const response = [
            {
                name: 'First repo',
            },
            {
                name: 'Second repo',
            },
        ];
        const putDescriptor = getReposGenerator.next(response).value;
        expect(putDescriptor).toEqual(put(reposLoaded(response, username)));
    });

    it('should call the repoLoadingError action if the response errors', () => {
        const response = new Error('Some error');
        const putDescriptor = getReposGenerator.throw(response).value;
        expect(putDescriptor).toEqual(put(repoLoadingError(response)));
    });
});

describe('githubDataSaga Saga', () => {
    const githubDataSaga = githubData();

    it('should start task to watch for LOAD_REPOS action', () => {
        const takeLatestDescriptor = githubDataSaga.next().value;
        expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_REPOS, getRepos));
    });
});
