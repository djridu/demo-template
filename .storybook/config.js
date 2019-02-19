import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withKnobs } from '@storybook/addon-knobs';
// import centered from '@storybook/addon-centered';

import newViewports from './viewports';

// addDecorator(centered);
addDecorator(withKnobs);
addDecorator(
    withOptions({
        name: 'Demo Name',
        url: '#',
        goFullScreen: false,
        showStoriesPanel: true,
        showAddonPanel: true,
        showSearchBox: false,
        addonPanelInRight: false,
        sortStoriesByKind: false,
        hierarchySeparator: null,
        hierarchyRootSeparator: null,
        sidebarAnimations: true,
        selectedAddonPanel: undefined,
        enableShortcuts: true,
    }),
);

configureViewport({
    viewports: {
        ...INITIAL_VIEWPORTS,
        ...newViewports,
    },
});

const req = require.context('../src', true, /.stories.jsx$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
