/**
 * app.js
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, ReactReduxContext } from 'react-redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';

import history from 'utils/history';
import 'sanitize.css/sanitize.css';
import '!file-loader?name=[name].[ext]!../public/images/favicon.ico';

import App from 'containers/App';
import LanguageProvider from 'containers/LanguageProvider';

// Reducers
import globalReducer from 'containers/App/reducer';
import languageProviderReducer from 'containers/LanguageProvider/reducer';

// configureStore
import { configureStore } from 'configure-store';

// Import i18n messages
import { translationMessages } from 'utils/i18n';

// Create redux store with history
const reducers = {
    global: globalReducer,
    language: languageProviderReducer,
    router: connectRouter(history),
};
const initialState = {};
const middlewares = [routerMiddleware(history)];
const store = configureStore(initialState, reducers, middlewares);

const MOUNT_NODE = document.getElementById('app');

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

if (module.hot) {
    module.hot.accept(['utils/i18n', 'containers/App'], () => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE);
        render(translationMessages);
    });
}

if (!window.Intl) {
    new Promise(resolve => {
        resolve(import('intl'));
    })
        .then(() =>
            Promise.all([
                import('intl/locale-data/jsonp/en.js'), // eslint-disable-line prettier/prettier
                import('intl/locale-data/jsonp/de.js'), // eslint-disable-line prettier/prettier
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
    require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
