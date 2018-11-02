import { correctGuess, actionTypes } from './';

describe('correctGuess', () => {
  test('returns an action w/ type `CORRECT_GUESS`', () => {
    const action = correctGuess();
    expect(action).toEqual({ "type": actionTypes.CORRECT_GUESS });
    // Object X= other object; mutable type. Cannot use toBe
    //toEqual works
  })
});
