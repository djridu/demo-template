/**
 *
 * Tests for Login
 *
 *
 */

import * as React from 'react';
import { cleanup, render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import { configureStore } from 'configure-store';
import { Provider, ReactReduxContext } from 'react-redux';
import { ConnectedRouter, connectRouter } from 'connected-react-router';
import history from 'utils/history';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import Login from '../index';

describe('<Login />', () => {
    let store;

    beforeAll(() => {
        const reducers = {
            language: languageProviderReducer,
            router: connectRouter(history),
        };
        store = configureStore({}, reducers, []);
    });

    afterEach(cleanup);

    it('Expect to not log errors in console', () => {
        const spy = jest.spyOn(global.console, 'error');
        render(
            <Provider store={store} context={ReactReduxContext}>
                <IntlProvider locale="en">
                    <ConnectedRouter history={history}>
                        <Login />
                    </ConnectedRouter>
                </IntlProvider>
            </Provider>,
        );
        expect(spy).not.toHaveBeenCalled();
    });

    it('Should render and match the snapshot', () => {
        const { container } = render(
            <Provider store={store} context={ReactReduxContext}>
                <IntlProvider locale="en">
                    <ConnectedRouter history={history}>
                        <Login />
                    </ConnectedRouter>
                </IntlProvider>
            </Provider>,
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
