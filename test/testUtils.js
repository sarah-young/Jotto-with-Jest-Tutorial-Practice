import rootReducer from '../src/reducers';
import { middlewares } from '../src/configureStore';
import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';

export const storeFactory = (initialState) => {
  const createStoreWithMiddleWare = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleWare(rootReducer, initialState);
}

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}

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
