import React from 'react';
import { cleanup, render } from 'react-testing-library';
import { FormattedMessage, defineMessages } from 'react-intl';
import { Provider, ReactReduxContext } from 'react-redux';

import { configureStore } from 'configure-store';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import { translationMessages } from 'utils/i18n';
import ConnectedLanguageProvider, { LanguageProvider } from '../index';

const messages = defineMessages({
    someMessage: {
        id: 'some.id',
        defaultMessage: 'This is some default message',
        en: 'This is some en message',
    },
});

describe('<LanguageProvider />', () => {
    afterEach(cleanup);

    it('should render its children', () => {
        const children = <h1>Test</h1>;
        const { container } = render(
            <LanguageProvider messages={messages} locale="en">
                {children}
            </LanguageProvider>,
        );
        expect(container.firstChild).not.toBeNull();
    });
});

describe('<ConnectedLanguageProvider />', () => {
    let store;

    beforeAll(() => {
        const initialState = {
            language: {
                locale: 'en',
            },
        };
        store = configureStore(initialState, { language: languageProviderReducer }, []);
    });

    afterEach(cleanup);

    it('should render the default language messages', () => {
        const { queryByText } = render(
            <Provider store={store} context={ReactReduxContext}>
                <ConnectedLanguageProvider messages={translationMessages}>
                    <FormattedMessage {...messages.someMessage} />
                </ConnectedLanguageProvider>
            </Provider>,
        );
        expect(queryByText(messages.someMessage.defaultMessage)).not.toBeNull();
    });
});
