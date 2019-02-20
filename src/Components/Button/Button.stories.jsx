import * as React from 'react';

import styled, { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';

import Button from './Button';

const btn = styled.div`
    font-size: 12px;
    display: inline-flex;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08);
    height: 45px;
    width: 100%;
`;

const ButtonWrepper = styled.div`
    width: 100%;
    background-color: #1c162e;
    display: flex;
    justify-content: center;
    margin-top: auto;
`;

const defaultTheme = {
    button: {
        color: {
            primary: '#1c162e',
            secondary: '#14d2b8',
            disabled: '#cfa705',
        },
        width: {
            SM: '100px',
            MD: '200px',
            LG: '300px',
        },
        height: {
            SM: '50px',
            MD: '100px',
            LG: '150px',
        },
    },
    text: {
        color: {
            default: '#FF0000',
            active: '#008000',
            disabled: '#add8e6',
        },
    },
};

storiesOf('Button', module)
    .add('button default', () => (
        <div
            style={{
                width: '100%',
                height: '100vh',
                backgroundColor: 'white',
            }}
        >
            <ThemeProvider theme={defaultTheme}>
                <Button hoverColor="#0d091b">Withdraw</Button>
            </ThemeProvider>
        </div>
    ))
    .add('button color secondary, size LG ', () => (
        <div
            style={{
                width: '100%',
                height: '100vh',
                backgroundColor: 'white',
            }}
        >
            <ThemeProvider theme={defaultTheme}>
                <Button color="active" width="LG" height="LG" hoverColor="#0d091b">
                    Withdraw
                </Button>
            </ThemeProvider>
        </div>
    ))
    .add('button color secondary, size SM ', () => (
        <div
            style={{
                width: '100%',
                height: '100vh',
                backgroundColor: 'white',
            }}
        >
            <ThemeProvider theme={defaultTheme}>
                <Button color="disabled" width="SM" height="SM" hoverColor="#0d091b">
                    Withdraw
                </Button>
            </ThemeProvider>
        </div>
    ));
