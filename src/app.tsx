/**
 * app.js
 */

import { connectRouter, routerMiddleware } from 'connected-react-router';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider, ReactReduxContext } from 'react-redux';
import * as Redux from 'redux';

import '!file-loader?name=[name].[ext]!../public/images/favicon.ico';
import 'sanitize.css/sanitize.css';
import history from './utils/history';

import App from './modules/view/containers/App';
import LanguageProvider from './modules/view/containers/LanguageProvider';

// Reducers
import globalReducer from './modules/view/containers/App/reducer';
import languageProviderReducer from './modules/view/containers/LanguageProvider/reducer';

// configureStore
import { configureStore } from '../packages/configure-store';

// Import i18n messages
import { translationMessages } from './i18n';

// Create redux store with history
const reducers = {
    global: globalReducer,
    language: languageProviderReducer,
    router: connectRouter(history),
};
const initialState = {};
const middlewares: Redux.Middleware[] = [routerMiddleware(history)];
const store: Redux.Store = configureStore(initialState, reducers, middlewares);

const MOUNT_NODE: Element | null = document.getElementById('app');

const render = messages => {
    ReactDOM.render(
        <Provider store={store} context={ReactReduxContext}>
            <LanguageProvider messages={messages}>
                <App history={history} context={ReactReduxContext} />
            </LanguageProvider>
        </Provider>,
        MOUNT_NODE,
    );
};

// @ts-ignore
if (module.hot) {
    // @ts-ignore
    module.hot.accept(['./i18n', './modules/view/containers/App'], () => {
        if (MOUNT_NODE) {
            ReactDOM.unmountComponentAtNode(MOUNT_NODE);
        }
        render(translationMessages);
    });
}
// @ts-ignore
if (!window.Intl) {
    new Promise(resolve => {
        resolve(import('intl'));
    })
        .then(() =>
            Promise.all([
                import('intl/locale-data/jsonp/en.js'),
                import('intl/locale-data/jsonp/de.js'),
            ]),
        )
        .then(() => render(translationMessages))
        .catch(err => {
            throw err;
        });
} else {
    render(translationMessages);
}

if ('__PROD__') {
    require('offline-plugin/runtime').install();
}
