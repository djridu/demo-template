import React, { Component } from 'react';

class Button extends Component {
    render() {
        return <div>{this.props.children}</div>;
    }
}

export default Button;
