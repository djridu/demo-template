import React from 'react';
import styled, { keyframes } from 'styled-components';

const draw = keyframes`
  50% {
        stroke-dashoffset: 0;
        -webkit-transform: scale(.5);
        transform: scale(.5)
    }
`;

const Svg = styled.svg`
    transition: opacity 0.1s linear;
    /*${props.rotate &&
        `
      -webkit-transform: rotate(${props.rotate}deg);
      -ms-transform: rotate(${props.rotate}deg);
      transform: rotate(${props.rotate}deg);
    `}*/
`;

const Circle = props => styled(circle).attrs({
    cx: '75',
    cy: '75',
    r: '60',
    fill: 'transparent',
    'stroke-width': '6',
    'stroke-linecap': 'round',
    stroke: props.stroke,
    'stroke-dasharray': '385',
    'stroke-dashoffset': '385',
})`
    animation: ${draw} 2s infinite ease-in-out;
    transform-origin: 75px 75px;
    transform: rotate(-90deg);
    opacity: 0.2;
`;

const SvgCircle = props => (
    <Svg>
        <Circle
            cx="75"
            cy="75"
            r="60"
            fill="transparent"
            stroke-width="6"
            stroke-linecap="round"
            {...props}
        />
    </Svg>
);

export default SvgCircle;
