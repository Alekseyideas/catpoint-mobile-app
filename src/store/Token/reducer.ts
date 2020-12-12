import * as Actions from './actions';
import {ActionTypes, TTokenState} from './types';

export const initialState: TTokenState = {
  data: '',
};

const tokenReducer = (
  state = initialState,
  action: ReturnType<typeof Actions.setToken>,
): TTokenState => {
  switch (action.type) {
    case ActionTypes.SET_TOKEN:
      return {...state, data: action.payload};
    default:
      return state;
  }
};

export {tokenReducer as TokenReducer};
