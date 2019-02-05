/**
 * Test injectors
 */

import identity from 'lodash/identity';

import { configureStore } from 'configure-store';
import { createReducer } from 'create-immer-reducer';

import getInjectors, { injectReducerFactory } from '../utils/reducerInjectors';

// Fixtures

const initialState = { reduced: 'soon' };

const reducer = createReducer(
    {
        TEST: (draft, action) => (draft.reduced = action.payload),
    },
    initialState,
);

describe('reducer injectors', () => {
    let store;
    let injectReducer;

    describe('getInjectors', () => {
        beforeEach(() => {
            store = configureStore({}, { reducer }, []);
        });

        it('should return injectors', () => {
            expect(getInjectors(store)).toEqual(
                expect.objectContaining({
                    injectReducer: expect.any(Function),
                }),
            );
        });

        it('should throw if passed invalid store shape', () => {
            Reflect.deleteProperty(store, 'dispatch');

            expect(() => getInjectors(store)).toThrow();
        });
    });

    describe('injectReducer helper', () => {
        beforeEach(() => {
            store = configureStore({}, { reducer: () => ({}) }, []);
            injectReducer = injectReducerFactory(store, true);
        });

        it('should check a store if the second argument is falsy', () => {
            const inject = injectReducerFactory({});

            expect(() => inject('test', reducer)).toThrow();
        });

        it('it should not check a store if the second argument is true', () => {
            Reflect.deleteProperty(store, 'dispatch');

            expect(() => injectReducer('test', reducer)).not.toThrow();
        });

        it("should validate a reducer and reducer's key", () => {
            expect(() => injectReducer('', reducer)).toThrow();
            expect(() => injectReducer(1, reducer)).toThrow();
            expect(() => injectReducer(1, 1)).toThrow();
        });

        it('given a store, it should provide a function to inject a reducer', () => {
            injectReducer('test', reducer);

            const actual = store.getState().test;
            const expected = initialState;

            expect(actual).toEqual(expected);
        });

        it('should not assign reducer if already existing', () => {
            store.replaceReducer = jest.fn();
            injectReducer('test', reducer);
            injectReducer('test', reducer);

            expect(store.replaceReducer).toHaveBeenCalledTimes(1);
        });

        it('should assign reducer if different implementation for hot reloading', () => {
            store.replaceReducer = jest.fn();
            injectReducer('test', reducer);
            injectReducer('test', identity);

            expect(store.replaceReducer).toHaveBeenCalledTimes(2);
        });
    });
});
