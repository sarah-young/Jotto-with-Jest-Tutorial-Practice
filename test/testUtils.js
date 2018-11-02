import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';
import rootReducer from '../src/reducers';

export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
}

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}
//Importable into all test files
//Takes in {shallow} wrapper from Enzyme
//And value for the data-test attribute
// Uses find method on the shallow wrapper
// (Find method takes a CSS style selector)
// ...to find `[data-test=${val}]`

//Generic test type
export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
}
