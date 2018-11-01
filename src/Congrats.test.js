import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';
import { findByTestAttr, checkProps } from '../test/testUtils';
import Congrats from './Congrats';

Enzyme.configure({ adapter: new EnzymeAdapter() });
const defaultProps = { success: false };
//This setup is slightly dangerous.
// When this is updated, make sure there's no where...
// ...else in your code that needs updating
// Otherwise you can get passing tests where
// Your code is failing

const setup = (props = {}) => {
  const setupProps = {...defaultProps, ...props};
  return shallow(<Congrats {...setupProps} /> ) //spread operator, turns object into key value pair
}
//Setup takes props since tests take props
//Not centralizing since each component will need it's own setup
// defaultProps will be used unless props are given (...defaultProps, ...props)
test('renders without error', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});

test('renders no text when success prop is false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});

test('renders non-empty text when success prop is true', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});

test('does not throw warning w/ expected props', () =>{
  const expectedProps = { success: 'false' };
  checkProps(Congrats, expectedProps);
});
