import * as React from 'react';
import { cleanup, render } from 'react-testing-library';

import Img from '../index';

const src = 'test.png';
const alt = 'test';
const renderComponent = (props = {}) => render(<Img src={src} alt={alt} {...props} />);

describe('<Img />', () => {
    afterEach(cleanup);

    it('should render an <img> tag', () => {
        const { container } = renderComponent();
        const element = container.querySelector('img');
        expect(element).not.toBeNull();
    });

    it('should have an app attribute', () => {
        const { container } = renderComponent();
        const element = container.querySelector('img');
        expect(element.hasAttribute('src')).toBe(true);
    });

    it('should have an alt attribute', () => {
        const { container } = renderComponent();
        const element = container.querySelector('img');
        expect(element.hasAttribute('alt')).toBe(true);
    });

    it('should not have a class attribute', () => {
        const { container } = renderComponent();
        const element = container.querySelector('img');
        expect(element.hasAttribute('class')).toBe(false);
    });

    it('should adopt a className attribute', () => {
        const className = 'test';
        const { container } = renderComponent({ className });
        const element = container.querySelector('img');
        expect(element.className).toEqual(className);
    });

    it('should not adopt a srcset attribute', () => {
        const srcset = 'test-HD.png 2x';
        const { container } = renderComponent({ srcset });
        const element = container.querySelector('img');
        expect(element.hasAttribute('srcset')).toBe(false);
    });
});
