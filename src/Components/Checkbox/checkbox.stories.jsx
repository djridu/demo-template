import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import Checkbox from './index';

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
            <Checkbox value={value} onCheckboxChange={onCheckboxChange}>
                {children}
            </Checkbox>
        );
    })
    .add('with iphone6 Plus', () => {
        const value = true;
        const children = text('label', 'My Checkbox Label');
        const onCheckboxChange = action('toggle');

        return (
            <Checkbox value={value} onCheckboxChange={onCheckboxChange}>
                {children}
            </Checkbox>
        );
    });
