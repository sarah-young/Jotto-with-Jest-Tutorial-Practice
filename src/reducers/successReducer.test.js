import { actionTypes } from '../actions';
import successReducer from './successReducer';

test('returns default initial state of `false` when no action is passed', () => {
  const newState = successReducer(undefined, {}); //When your reducer does switch on action type, make sure you put in an obj for the action.
  expect(newState).toBe(false);
});

test('returns state of true when receiving an action of type `CORRECT_GUESS`', () =>{
  const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS});
  expect(newState).toBe(true);
});
