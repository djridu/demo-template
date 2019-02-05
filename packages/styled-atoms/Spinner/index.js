import React from 'react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 400px;
    background: white;
    padding: 10px 0 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const rotator = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(270deg);
    }
`;

const dash = keyframes`
    0% {
        stroke-dashoffset: 187;
    }
    50% {
        stroke-dashoffset: ${187 / 4};
        transform: rotate(135deg);
    }
    100% {
        stroke-dashoffset: 187;
        transform: rotate(450deg);
    }
`;

const colors = keyframes`
    0% {
        stroke: #026337;
    }
    25% {
        stroke: #c5dbcf;
    }
    50% {
        stroke: #003a63;
    }
    75% {
        stroke: #c75c35;
    }
    100% {
        stroke: #c7985c;
    }
`;

const myCircle = ({ className }) => (
    <circle
        className={className}
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        cx="33"
        cy="33"
        r="30"
    />
);

const StyledCircle = styled(myCircle)`
    stroke-dasharray: 187;
    stroke-dashoffset: 0;
    transform-origin: center;
    animation: ${dash} 1.4s ease-in-out infinite, ${colors} ${1.4 * 4}s ease-in-out infinite;
`;

const StyledSpinner = styled.svg`
    animation: ${rotator} 1.4s linear infinite;
    margin: -25px 0 0 -25px;
    width: 50px;
    height: 50px;
`;

class Loader extends React.Component {
    render() {
        return (
            <Wrapper>
                <StyledSpinner width="65px" height="65px" viewBox="0 0 66 66">
                    <StyledCircle />
                </StyledSpinner>
            </Wrapper>
        );
    }
}

export default Loader;

// import React from 'react';
//
// import Wrapper from './Wrapper';
// import Svg from './Svg';
// import Circle from './Circle';
//
// const Spinner = () => (
//     <Wrapper>
//         <Circle rotate={30} delay={-1.1} />
//         <Svg
//             stroke={'#8ad3ff'}
//         />
//         <div id="loader-box">
//             <div id="loader-complete-circle" />
//             <div id="loader-wrapper">
//                 <svg className="loader">
//                     <circle
//                         cx="75"
//                         cy="75"
//                         r="60"
//                         fill="transparent"
//                         stroke="#8ad3ff"
//                         stroke-width="6"
//                         stroke-linecap="round"
//                         stroke-dasharray="385"
//                         stroke-dashoffset="385"
//                     />
//                 </svg>
//                 <svg className="loader loader-2">
//                     <circle
//                         cx="75"
//                         cy="75"
//                         r="60"
//                         fill="transparent"
//                         stroke="#ce9178"
//                         stroke-width="6"
//                         stroke-linecap="round"
//                         stroke-dasharray="385"
//                         stroke-dashoffset="385"
//                     />
//                 </svg>
//                 <svg className="loader loader-3">
//                     <circle
//                         cx="75"
//                         cy="75"
//                         r="60"
//                         fill="transparent"
//                         stroke="#b869a0"
//                         stroke-width="6"
//                         stroke-linecap="round"
//                         stroke-dasharray="385"
//                         stroke-dashoffset="385"
//                     />
//                 </svg>
//                 <svg className="loader loader-4">
//                     <circle
//                         cx="75"
//                         cy="75"
//                         r="60"
//                         fill="transparent"
//                         stroke="#5d8a4e"
//                         stroke-width="6"
//                         stroke-linecap="round"
//                         stroke-dasharray="385"
//                         stroke-dashoffset="385"
//                     />
//                 </svg>
//                 <svg className="loader loader-5">
//                     <circle
//                         cx="75"
//                         cy="75"
//                         r="60"
//                         fill="transparent"
//                         stroke="black"
//                         stroke-width="6"
//                         stroke-linecap="round"
//                     />
//                 </svg>
//                 <svg className="loader loader-6">
//                     <circle
//                         cx="75"
//                         cy="75"
//                         r="60"
//                         fill="transparent"
//                         stroke="#4387cf"
//                         stroke-width="6"
//                         stroke-linecap="round"
//                         stroke-dasharray="385"
//                         stroke-dashoffset="385"
//                     />
//                 </svg>
//                 <svg className="loader loader-7">
//                     <circle
//                         cx="75"
//                         cy="75"
//                         r="60"
//                         fill="transparent"
//                         stroke="b86cb4"
//                         stroke-width="6"
//                         stroke-linecap="round"
//                         stroke-dasharray="385"
//                         stroke-dashoffset="385"
//                     />
//                 </svg>
//                 <svg className="loader loader-8">
//                     <circle
//                         cx="75"
//                         cy="75"
//                         r="60"
//                         fill="transparent"
//                         stroke="#d4d797"
//                         stroke-width="6"
//                         stroke-linecap="round"
//                         stroke-dasharray="385"
//                         stroke-dashoffset="385"
//                     />
//                 </svg>
//             </div>
//         </div>
//     </Wrapper>
// );
//
// export default Spinner;
