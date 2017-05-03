import { expect } from 'chai';

import {
  SIGHT_TEST_ACTION,
} from 'features/sight/redux/constants';

import {
  sightTestAction,
  reducer,
} from 'features/sight/redux/sightTestAction';

describe('sight/redux/sightTestAction', () => {
  it('action: sightTestAction', () => {
    const expectedAction = {
      type: SIGHT_TEST_ACTION,
    };
    expect(sightTestAction()).to.deep.equal(expectedAction);
  });

  it('reducer should handle SIGHT_TEST_ACTION', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: SIGHT_TEST_ACTION }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
