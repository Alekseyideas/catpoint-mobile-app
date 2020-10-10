import * as Actions from './actions';
import {ActionTypes, TUserState} from './types';

export const initialState: TUserState = {
  data: {
    id: 123213,
  },
  loading: true,
  errors: undefined,
};

type UserActionTypes =
  | typeof Actions.getUserS
  | typeof Actions.getUserE
  | typeof Actions.getUserR;

const userReducer = (
  state = initialState,
  action: ReturnType<UserActionTypes>,
): TUserState => {
  switch (action.type) {
    case ActionTypes.GET_USER_R:
      return {...state, loading: true, errors: undefined};
    case ActionTypes.GET_USER_S:
      return {
        ...state,
        loading: false,
        data: action.payload,
        errors: undefined,
      };
    case ActionTypes.GET_USER_E:
      return {...state, loading: false, errors: action.payload};
    default:
      return state;
  }
};

export {userReducer as UserReducer};
