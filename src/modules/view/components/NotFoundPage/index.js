/**
 * NotFoundPage
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from 'styled-atoms/H1';
import messages from './messages';

export default function NotFound() {
    return (
        <article>
            <H1>
                <FormattedMessage {...messages.header} />
            </H1>
        </article>
    );
}
