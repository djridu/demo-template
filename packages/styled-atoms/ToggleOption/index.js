/**
 *
 * ToggleOption
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';

const ToggleOption = ({ value, message, intl }) => (
    <option value={value}>{message ? intl.formatMessage(message) : value}</option>
);

ToggleOption.propTypes = {
    intl: intlShape.isRequired,
    message: PropTypes.object,
    value: PropTypes.string.isRequired,
};

export default injectIntl(ToggleOption);
