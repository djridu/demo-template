/**
 * Test injectors
 */

import * as React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import { configureStore } from 'configure-store';
import injectReducer from '../utils/injectReducer';
import * as reducerInjectors from '../utils/reducerInjectors';

// Fixtures
const Component = () => null;

const reducer = s => s;

describe('injectReducer decorator', () => {
    let store;
    let injectors;
    let ComponentWithReducer;

    beforeAll(() => {
        reducerInjectors.default = jest.fn().mockImplementation(() => injectors);
    });

    beforeEach(() => {
        store = configureStore({}, { reducer: () => ({}) }, []);
        injectors = {
            injectReducer: jest.fn(),
        };
        ComponentWithReducer = injectReducer({ key: 'test', reducer })(Component);
        reducerInjectors.default.mockClear();
    });

    it('should inject a given reducer', () => {
        renderer.create(
            <Provider store={store}>
                <ComponentWithReducer />
            </Provider>,
        );

        expect(injectors.injectReducer).toHaveBeenCalledTimes(1);
        expect(injectors.injectReducer).toHaveBeenCalledWith('test', reducer);
    });

    it('should set a correct display name', () => {
        expect(ComponentWithReducer.displayName).toBe('withReducer(Component)');
        expect(injectReducer({ key: 'test', reducer })(() => null).displayName).toBe(
            'withReducer(Component)',
        );
    });

    it('should propagate props', () => {
        const props = { testProp: 'test' };
        const renderedComponent = renderer.create(
            <Provider store={store}>
                <ComponentWithReducer {...props} />
            </Provider>,
        );
        const {
            props: { children },
        } = renderedComponent.getInstance();

        expect(children.props).toEqual(props);
    });
});
