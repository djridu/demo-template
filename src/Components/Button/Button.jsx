import React, { Component } from 'react';
import imageFile from './logo.png';

class Button extends Component {
    render() {
        return (
            <div>
                <img src={imageFile} alt="" />
            </div>
        );
    }
}

export default Button;
