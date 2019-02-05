/**
 *
 * Img.js
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */

import * as React from 'react';
import PropTypes from 'prop-types';

function Img(props) {
    return <img className={props.className} src={props.src} alt={props.alt} />;
}

// We require the use of app and alt, only enforced by react in dev mode
Img.propTypes = {
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default Img;
