/**
 * Asynchronously loads the component for NotFoundPage
 */

import * as React from 'react';
import loadable from 'lazy-loadable';
import LoadingIndicator from 'styled-atoms/LoadingIndicator';

export default loadable(() => import('.'), {
    fallback: <LoadingIndicator />,
});
