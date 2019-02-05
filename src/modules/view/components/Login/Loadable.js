/**
 *
 * Asynchronously loads the component for Login
 *
 */

import loadable from 'lazy-loadable';

export default loadable(() => import('./index'));
