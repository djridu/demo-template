import * as React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H2 from 'styled-atoms/H2';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';

export default class HomePage extends React.PureComponent {
    componentDidMount() {
        if (this.props.username && this.props.username.trim().length > 0) {
            this.props.onSubmitForm();
        }
    }

    render() {
        const { loading, error, repos } = this.props;
        const reposListProps = {
            loading,
            error,
            repos,
        };

        return (
            <article>
                <Helmet>
                    <title>Home Page</title>
                    <meta name="description" content="Home page" />
                </Helmet>
                <div>
                    <CenteredSection>
                        <H2>
                            <FormattedMessage {...messages.startProjectHeader} />
                        </H2>
                    </CenteredSection>
                    <Section>
                        <H2>
                            <FormattedMessage {...messages.trymeHeader} />
                        </H2>
                        <Form onSubmit={this.props.onSubmitForm}>
                            <label htmlFor="username">
                                <FormattedMessage {...messages.trymeMessage} />
                                <AtPrefix>
                                    <FormattedMessage {...messages.trymeAtPrefix} />
                                </AtPrefix>
                                <Input
                                    id="username"
                                    type="text"
                                    placeholder="Github username"
                                    value={this.props.username}
                                    onChange={this.props.onChangeUsername}
                                />
                            </label>
                        </Form>
                        <ReposList {...reposListProps} />
                    </Section>
                </div>
            </article>
        );
    }
}

HomePage.propTypes = {
    error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    loading: PropTypes.bool,
    onChangeUsername: PropTypes.func,
    onSubmitForm: PropTypes.func,
    repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
    username: PropTypes.string,
};
