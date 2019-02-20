import React from 'react';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const propTypes = {
    border: PropTypes.bool,
    button: PropTypes.bool,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    onMouseEnter: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

const AccountCss = css`
    width: 100px;
    height: 80px;
    border-radius: 6px;
    box-shadow: 0 4px 10px 0 rgba(202, 202, 202, 0.15);
`;

const defaultProps = {
    // ...globalProps,
    isBlock: false,
    isLoading: false,
    type: 'button',
};

export const Button = ({
    isLoading,
    isBlock,
    onMouseEnter,
    round,
    border,
    outline,
    size,
    type,
    onClick,
    children,
    disabled,
    color,
    isUppercase,
    device,
    btnWrapper,
    width,
    height,
}) => {
    const XcButton = styled.button`
        border: none;
        user-select: none;
        background-color: ${props => props.theme.button.color[color || 'primary']};
        width: ${props => props.theme.button.width[width || 'MD']};
        height: ${props => props.theme.button.height[height || 'MD']};
        border-radius: 6px;
        box-shadow: 0 4px 10px 0 rgba(202, 202, 202, 0.15);
    `;
    const XcButtonText = styled.span`
        font-weight: 300;
        color: ${props => props.theme.text.color[color || 'default']};
    `;
    return (
        <XcButton
            className="xc-button"
            type={type}
            disabled={disabled}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
        >
            <XcButtonText className="xc-button-text">{children}</XcButtonText>
        </XcButton>
    );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
