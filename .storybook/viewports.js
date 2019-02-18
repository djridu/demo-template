const reduce = require('lodash/reduce');
import { breakpoints } from './breakpoints';

function viewports() {
    return reduce(
        breakpoints,
        (breakpoint, value, key) => {
            breakpoint[key] = {
                name: key,
                styles: {
                    width: `${value.width}px`,
                    height: `${value.height}px`,
                },
                type: `${value.type}`,
            };
            return breakpoint;
        },
        {},
    );
}

export default viewports();
