import {
  SIGHT_TEST_ACTION,
} from './constants';

export function sightTestAction() {
  return {
    type: SIGHT_TEST_ACTION,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case SIGHT_TEST_ACTION:
      return {
        ...state,
      };

    default:
      return state;
  }
}
