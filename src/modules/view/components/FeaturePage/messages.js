/*
 * FeaturePage Messages
 */
import { defineMessages } from 'react-intl';

export const scope = 'containers.FeaturePage';

export default defineMessages({
    header: {
        id: `${scope}.header`,
        defaultMessage: 'Features',
    },
    loremIpsumHeader: {
        id: `${scope}.scaffolding.header`,
        defaultMessage: 'Lorem ipsum dolor.',
    },
    loremIpsumMessage: {
        id: `${scope}.scaffolding.message`,
        defaultMessage: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor arcu, 
            eleifend sit amet ullamcorper vel, interdum sed sapien. Curabitur iaculis, 
            arcu vitae convallis sollicitudin, felis odio volutpat ipsum, sit.`,
    },
});
