/**
 *
 * Login
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const Container = styled.div`
    background-image: linear-gradient(241deg, #3c276b, #120f3d 98%);
`;

const LoginWrapper = styled.div`
    margin: auto;
    width: 420px;
    height: 474px;
    border-radius: 9px;
    box-shadow: 0 12px 48px 0 rgba(0, 0, 0, 0.25);
    background-color: #ffffff;
`;

const LoginHeader = styled.header`
    padding-top: 21px;
    padding-bottom: 21px;
    margin-bottom: 30px;
    box-shadow: 0 1px 0 0 #f3f2f7;
`;

const LoginHeading = styled.p`
    margin: 0;
    font-size: 30px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.6;
    letter-spacing: 0.5px;
    text-align: center;
    color: #3c276b;
`;

const LoginBody = styled.div`
    padding-right: 32px;
    padding-left: 32px;
`;

const LoginFieldset = styled.fieldset`
    position: relative;
    padding: 0;
    margin: 0;
    border: 0;

    & + & {
        margin-top: 24px;
    }

    &:nth-last-of-type(2) {
        margin-top: 32px;
    }

    &:last-of-type {
        text-align: center;
    }
`;

const LoginInput = styled.input`
    padding: 0 18px;
    width: 360px;
    height: 48px;
    border-radius: 6px;
    border: none;
    background-color: #f3f2f7;
    font-size: 12px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 2;
    letter-spacing: 0.5px;
    text-align: left;
    color: #b2b1bd;
`;

const LoginOptionsNote = styled.p`
    padding-top: 8px;
    display: block;
    width: 100%;
    font-size: 12px;
    text-align: center;
    text-transform: uppercase;
`;

const LoginButton = styled(Link)`
    display: block;
    width: 168px;
    height: 48px;
    border-radius: 6px;
    background-color: #ff9900;
    font-size: 14px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    text-decoration: none;
    line-height: 45px;
    letter-spacing: 0.5px;
    text-align: center;
    color: #ffffff;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
    transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

    &:hover {
        box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
        transform: translate(0, -5px);
    }

    &:active {
        background: #ff7b00;
        color: #fff;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
    }
`;

class Login extends React.Component {
    render() {
        return (
            <Container>
                <Grid columns="1fr" rows="120px 1fr 120px" areas={['header', 'content', 'footer']}>
                    <Cell area="header" center middle>
                        <h1>Header</h1>
                    </Cell>
                    <Cell area="content" center middle>
                        <LoginWrapper>
                            <LoginHeader>
                                <LoginHeading>Sign In</LoginHeading>
                            </LoginHeader>

                            <LoginBody>
                                <LoginFieldset>
                                    <LoginInput placeholder="E-mail" type="text" required />
                                </LoginFieldset>

                                <LoginFieldset>
                                    <LoginInput placeholder="Password" type="password" required />
                                </LoginFieldset>

                                <LoginFieldset>
                                    <LoginButton to="/home">Login</LoginButton>
                                </LoginFieldset>

                                <LoginFieldset>
                                    <LoginOptionsNote>Don't have account?</LoginOptionsNote>
                                </LoginFieldset>
                            </LoginBody>
                        </LoginWrapper>
                    </Cell>
                    <Cell area="footer" center middle>
                        <p>Footer</p>
                    </Cell>
                </Grid>
            </Container>
        );
    }
}

Login.propTypes = {};

export default Login;
