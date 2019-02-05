/*
 *
 * LanguageToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import Toggle from 'styled-atoms/Toggle';
import { appLocales } from 'utils/i18n';
import { changeLocale } from 'containers/LanguageProvider/actions';
import { makeSelectLocale } from 'containers/LanguageProvider/selectors';
import Wrapper from './Wrapper';
import messages from './messages';

export class LocaleToggle extends React.PureComponent {
    // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <Wrapper>
                <Toggle
                    value={this.props.locale}
                    values={appLocales}
                    messages={messages}
                    onToggle={this.props.onLocaleToggle}
                />
            </Wrapper>
        );
    }
}

LocaleToggle.propTypes = {
    locale: PropTypes.string,
    onLocaleToggle: PropTypes.func,
};

const mapStateToProps = createSelector(
    makeSelectLocale(),
    locale => ({
        locale,
    }),
);

export function mapDispatchToProps(dispatch) {
    return {
        onLocaleToggle: evt => dispatch(changeLocale(evt.target.value)),
        dispatch,
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LocaleToggle);
