// @flow

/**
 * Create the store with dynamic reducers
 */

import * as Redux from 'redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(
    initialState = {},
    reducers = {},
    middlewares = [],
): Redux.Store {
    const middlewaresToApply = [sagaMiddleware, ...middlewares];
    const enhancers = [Redux.applyMiddleware(...middlewaresToApply)];

    const composeEnhancers =
        '__DEV__' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
            : Redux.compose;

    const store: Redux.Store = Redux.createStore(
        Redux.combineReducers({ ...reducers }),
        initialState,
        composeEnhancers(...enhancers),
    );

    store.runSaga = sagaMiddleware.run;
    store.injectedReducers = reducers;
    store.injectedSagas = {};

    if (module.hot) {
        module.hot.accept(() => {
            store.replaceReducer(Redux.combineReducers({ ...store.injectedReducers }));
        });
    }

    return store;
}
