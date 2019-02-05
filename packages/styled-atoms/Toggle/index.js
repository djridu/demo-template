/**
 *
 * LocaleToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import ToggleOption from 'styled-atoms/ToggleOption';
import Select from './Select';

function Toggle(props) {
    let content = <option>--</option>;

    // If we have items, render them
    if (props.values) {
        content = props.values.map(value => (
            <ToggleOption key={value} value={value} message={props.messages[value]} />
        ));
    }

    return (
        <Select value={props.value} onChange={props.onToggle}>
            {content}
        </Select>
    );
}

Toggle.propTypes = {
    messages: PropTypes.object,
    onToggle: PropTypes.func,
    value: PropTypes.string,
    values: PropTypes.array,
};

export default Toggle;
