import { TEST } from './action';

export const initialState = {
  testCount: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        testCount: action.payload,
      };
      case 'GET_POST':
      return {
        ...state,
        posts: action.payload,
      };
      case 'GET_ONE_POST':
      return {
        ...state,
        post: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
