import React from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { cleanup, render } from 'react-testing-library';

import { configureStore } from 'configure-store';
import globalReducer from 'containers/App/reducer';
import ReposList from '../index';

describe('<ReposList />', () => {
    afterEach(cleanup);

    it('should render the loading indicator when its loading', () => {
        const { container } = render(<ReposList loading />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('should render an error if loading failed', () => {
        const { queryByText } = render(
            <IntlProvider locale="en">
                <ReposList loading={false} error={{ message: 'Loading failed!' }} />
            </IntlProvider>,
        );
        expect(queryByText(/Something went wrong/)).not.toBeNull();
    });

    it('should render the repositories if loading was successful', () => {
        const store = configureStore(
            { global: { currentUser: 'gaearon' } },
            { global: globalReducer },
            [],
        );
        const repos = [
            {
                owner: {
                    login: 'gaearon',
                },
                html_url: 'https://github.com/gaearon/overreacted.io',
                name: 'overreacted.io',
                open_issues_count: 20,
                full_name: 'overreacted.io/overreacted.io',
            },
        ];
        const { container } = render(
            <Provider store={store}>
                <IntlProvider locale="en">
                    <ReposList repos={repos} error={false} />
                </IntlProvider>
            </Provider>,
        );

        expect(container.firstChild).toMatchSnapshot();
    });

    it('should not render anything if nothing interesting is provided', () => {
        const { container } = render(<ReposList repos={false} error={false} loading={false} />);

        expect(container.firstChild).toBeNull();
    });
});
