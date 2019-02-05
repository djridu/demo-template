/**
 * App
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import GlobalStyle from 'components/GlobalStyle';
import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'components/FeaturePage/Loadable';
import NotFoundPage from 'components/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Login from 'components/Login/Loadable';

const Wrapper = styled.div`
    max-width: calc(768px + 16px * 2);
    margin: 0 auto;
    display: flex;
    min-height: 100%;
    padding: 0 16px;
    flex-direction: column;
`;

const appRoute = () => (
    <div>
        <Helmet titleTemplate="%s" defaultTitle="Application">
            <meta name="description" content="Application" />
        </Helmet>

        <Wrapper>
            <Header />

            <Switch>
                <Route path="/home" component={HomePage} />
                <Route path="/features" component={FeaturePage} />
                <Route component={NotFoundPage} />
            </Switch>

            <Footer />
        </Wrapper>
    </div>
);

const App = ({ history, context }) => (
    <>
        <ConnectedRouter history={history} context={context}>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/home" component={appRoute} />
                <Route path="/features" component={appRoute} />
                <Route component={NotFoundPage} />
            </Switch>
        </ConnectedRouter>
        <GlobalStyle />
    </>
);

App.propTypes = {
    context: PropTypes.object,
    history: PropTypes.object,
};

export default App;
