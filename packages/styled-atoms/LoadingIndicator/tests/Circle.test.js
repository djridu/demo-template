import * as React from 'react';
import { cleanup, render } from 'react-testing-library';

import Circle from '../Circle';

describe('<Circle />', () => {
    afterEach(cleanup);

    it('should render an <div> tag', () => {
        const { container } = render(<Circle />);
        expect(container.firstChild.tagName).toEqual('DIV');
    });

    it('should have a class attribute', () => {
        const { container } = render(<Circle />);
        expect(container.firstChild.hasAttribute('class')).toBe(true);
    });

    it('should not adopt attributes', () => {
        const id = 'test';
        const { container } = render(<Circle id={id} />);
        expect(container.firstChild.hasAttribute('id')).toBe(false);
    });
});
