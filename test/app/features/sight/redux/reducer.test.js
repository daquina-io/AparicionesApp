import { expect } from 'chai';
import reducer from 'features/sight/redux/reducer';

describe('feature/sight/redux/reducer', () => {
  it('feature sight reducer should do nothing if no matched action', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: '__unknown_action_type__' }
    );
    expect(state).to.equal(prevState);
  });

  // TODO: add global reducer test if needed.
});
