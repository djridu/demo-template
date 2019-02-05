import React from 'react';
import renderer from 'react-test-renderer';
import { IntlProvider } from 'react-intl';
import { Provider, ReactReduxContext } from 'react-redux';

import { configureStore } from 'configure-store';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import Footer from '../index';

describe('<Footer />', () => {
    let store;

    beforeAll(() => {
        const initialState = {
            language: {
                locale: 'de',
            },
        };
        store = configureStore(initialState, { language: languageProviderReducer }, []);
    });

    it('should render and match the snapshot', () => {
        const renderedComponent = renderer
            .create(
                <Provider store={store} context={ReactReduxContext}>
                    <IntlProvider locale="en">
                        <Footer />
                    </IntlProvider>
                </Provider>,
            )
            .toJSON();

        expect(renderedComponent).toMatchSnapshot();
    });
});
