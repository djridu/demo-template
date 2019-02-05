/*
 *
 * LanguageProvider
 *
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { IntlProvider } from 'react-intl';

import { makeSelectLocale } from './selectors';

export class LanguageProvider extends React.PureComponent {
    render() {
        return (
            <IntlProvider
                locale={this.props.locale}
                key={this.props.locale}
                messages={this.props.messages[this.props.locale]}
            >
                {React.Children.only(this.props.children)}
            </IntlProvider>
        );
    }
}

LanguageProvider.propTypes = {
    children: PropTypes.element.isRequired,
    locale: PropTypes.string,
    messages: PropTypes.object,
};

const mapStateToProps = createSelector(
    makeSelectLocale(),
    locale => ({
        locale,
    }),
);

export default connect(mapStateToProps)(LanguageProvider);
