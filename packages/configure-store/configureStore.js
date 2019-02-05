/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}, reducers = {}, middlewares = []) {
    const middlewaresToApply = [sagaMiddleware, ...middlewares];
    const enhancers = [applyMiddleware(...middlewaresToApply)];

    const composeEnhancers =
        '__DEV__' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
            : compose;

    const store = createStore(
        combineReducers({ ...reducers }),
        initialState,
        composeEnhancers(...enhancers),
    );

    store.runSaga = sagaMiddleware.run;
    store.injectedReducers = reducers;
    store.injectedSagas = {};

    if (module.hot) {
        module.hot.accept(() => {
            store.replaceReducer(combineReducers({ ...store.injectedReducers }));
        });
    }

    return store;
}
