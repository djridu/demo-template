import React, { useState } from 'react';

export const Checkbox = props => {
    const { value, onCheckboxChange, children } = props;
    const [state, setState] = useState(value);

    const handleChange = event => {
        const { checked } = event.target;
        setState(checked);
        onCheckboxChange(checked);
    };

    return (
        <label>
            {children}:
            <input type="checkbox" checked={state} onChange={handleChange} />
        </label>
    );
};
