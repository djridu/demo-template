import React from 'react';
import { cleanup, render } from 'react-testing-library';
import { Provider, ReactReduxContext } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { ConnectedRouter, connectRouter } from 'connected-react-router';

import { configureStore } from 'configure-store';
import history from 'utils/history';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import Header from '../index';

describe('<Header />', () => {
    const reducers = {
        language: languageProviderReducer,
        router: connectRouter(history),
    };
    const store = configureStore({}, reducers, []);

    afterEach(cleanup);

    it('should render a div', () => {
        const { container } = render(
            <Provider store={store} context={ReactReduxContext}>
                <IntlProvider locale="en">
                    <ConnectedRouter history={history}>
                        <Header />
                    </ConnectedRouter>
                </IntlProvider>
            </Provider>,
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
