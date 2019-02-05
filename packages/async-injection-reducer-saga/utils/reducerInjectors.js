import { combineReducers } from 'redux';
import invariant from 'invariant';
import { isEmpty, isFunction, isString } from 'lodash';

import checkStore from './checkStore';

export function injectReducerFactory(store, isValid) {
    return function injectReducer(key, reducer) {
        if (!isValid) checkStore(store);

        invariant(
            isString(key) && !isEmpty(key) && isFunction(reducer),
            '(src/utils...) injectReducer: Expected `reducer` to be a reducer function',
        );

        if (Reflect.has(store.injectedReducers, key) && store.injectedReducers[key] === reducer)
            return;

        store.injectedReducers[key] = reducer;
        store.replaceReducer(combineReducers({ ...store.injectedReducers }));
    };
}

export default function getInjectors(store) {
    checkStore(store);

    return {
        injectReducer: injectReducerFactory(store, true),
    };
}
