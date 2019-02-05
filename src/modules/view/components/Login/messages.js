/*
 * Login Messages
 *
 * This contains all the text for the Login component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Login';

export default defineMessages({
    header: {
        id: `${scope}.header`,
        defaultMessage: 'This is the Login component!',
    },
});
