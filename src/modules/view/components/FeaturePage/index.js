/*
 * FeaturePage
 *
 */
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'styled-atoms/H1';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';

export default class FeaturePage extends React.Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Feature Page</title>
                    <meta name="description" content="Feature page" />
                </Helmet>
                <H1>
                    <FormattedMessage {...messages.header} />
                </H1>
                <List>
                    <ListItem>
                        <ListItemTitle>
                            <FormattedMessage {...messages.loremIpsumHeader} />
                        </ListItemTitle>
                        <p>
                            <FormattedMessage {...messages.loremIpsumMessage} />
                        </p>
                    </ListItem>

                    <ListItem>
                        <ListItemTitle>
                            <FormattedMessage {...messages.loremIpsumHeader} />
                        </ListItemTitle>
                        <p>
                            <FormattedMessage {...messages.loremIpsumMessage} />
                        </p>
                    </ListItem>

                    <ListItem>
                        <ListItemTitle>
                            <FormattedMessage {...messages.loremIpsumHeader} />
                        </ListItemTitle>
                        <p>
                            <FormattedMessage {...messages.loremIpsumMessage} />
                        </p>
                    </ListItem>

                    <ListItem>
                        <ListItemTitle>
                            <FormattedMessage {...messages.loremIpsumHeader} />
                        </ListItemTitle>
                        <p>
                            <FormattedMessage {...messages.loremIpsumMessage} />
                        </p>
                    </ListItem>

                    <ListItem>
                        <ListItemTitle>
                            <FormattedMessage {...messages.loremIpsumHeader} />
                        </ListItemTitle>
                        <p>
                            <FormattedMessage {...messages.loremIpsumMessage} />
                        </p>
                    </ListItem>
                </List>
            </div>
        );
    }
}
