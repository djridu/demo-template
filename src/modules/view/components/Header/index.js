import React from 'react';
import { FormattedMessage } from 'react-intl';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

class Header extends React.Component {
    render() {
        return (
            <div>
                <NavBar>
                    <HeaderLink to="/home">
                        <FormattedMessage {...messages.home} />
                    </HeaderLink>
                    <HeaderLink to="/features">
                        <FormattedMessage {...messages.features} />
                    </HeaderLink>
                    <HeaderLink to="/">
                        <FormattedMessage {...messages.logout} />
                    </HeaderLink>
                </NavBar>
            </div>
        );
    }
}

export default Header;
