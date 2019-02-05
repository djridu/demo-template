import * as React from 'react';
import { Provider, ReactReduxContext } from 'react-redux';
import { cleanup, render } from 'react-testing-library';

import { changeLocale } from 'containers/LanguageProvider/actions';
import LanguageProvider from 'containers/LanguageProvider';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import { configureStore } from 'configure-store';
import { translationMessages } from 'utils/i18n';
import LocaleToggle, { mapDispatchToProps } from '../index';

describe('<LocaleToggle />', () => {
    let store;

    beforeAll(() => {
        const initialState = {
            language: {
                locale: 'EN',
            },
        };
        store = configureStore(initialState, { language: languageProviderReducer }, []);
    });

    afterEach(cleanup);

    it('should match the snapshot', () => {
        const { container } = render(
            <Provider store={store} context={ReactReduxContext}>
                <LanguageProvider messages={translationMessages}>
                    <LocaleToggle />
                </LanguageProvider>
            </Provider>,
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    it('should present the default `en` english language option', () => {
        const { container } = render(
            <Provider store={store} context={ReactReduxContext}>
                <LanguageProvider messages={translationMessages}>
                    <LocaleToggle />
                </LanguageProvider>
            </Provider>,
        );
        expect(container.querySelector('option[value="en"]')).not.toBeNull();
    });

    describe('mapDispatchToProps', () => {
        describe('onLocaleToggle', () => {
            it('should be injected', () => {
                const dispatch = jest.fn();
                const result = mapDispatchToProps(dispatch);
                expect(result.onLocaleToggle).toBeDefined();
            });

            it('should dispatch changeLocale when called', () => {
                const dispatch = jest.fn();
                const result = mapDispatchToProps(dispatch);
                const locale = 'de';
                const evt = { target: { value: locale } };
                result.onLocaleToggle(evt);
                expect(dispatch).toHaveBeenCalledWith(changeLocale(locale));
            });
        });
    });
});
