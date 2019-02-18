import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import Checkbox from './index';

class CheckboxStateful extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value,
        };

        this.onCheckboxChange = this.onCheckboxChange.bind(this);
    }

    onCheckboxChange(value) {
        this.setState({ value });

        this.props.onCheckboxChange(value);
    }

    render() {
        return (
            <Checkbox value={this.state.value} onCheckboxChange={this.onCheckboxChange}>
                {this.props.children}
            </Checkbox>
        );
    }
}

storiesOf('Checkbox', module)
    .addDecorator(
        withBackgrounds([
            { name: 'twitter', value: '#00aced' },
            { name: 'facebook', value: '#3b5998' },
        ]),
    )
    .add('with medium', () => {
        const value = true;
        const children = text('label', 'My Checkbox Label');
        const onCheckboxChange = action('toggle');

        return (
            <CheckboxStateful value={value} onCheckboxChange={onCheckboxChange}>
                {children}
            </CheckboxStateful>
        );
    })
    .add('with iphone6 Plus', () => {
        const value = true;
        const children = text('label', 'My Checkbox Label');
        const onCheckboxChange = action('toggle');

        return (
            <CheckboxStateful value={value} onCheckboxChange={onCheckboxChange}>
                {children}
            </CheckboxStateful>
        );
    });
