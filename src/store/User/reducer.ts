import * as Actions from './actions';
import {ActionTypes, TUserState} from './types';

export const initialState: TUserState = {
  data: null,
  loading: true,
  errors: undefined,
};

type UserActionTypes =
  | typeof Actions.signInS
  | typeof Actions.signInE
  | typeof Actions.signInR
  | typeof Actions.getUserS
  | typeof Actions.getUserE
  | typeof Actions.getUserR
  | typeof Actions.setUser;

const userReducer = (
  state = initialState,
  action: ReturnType<UserActionTypes>,
): TUserState => {
  switch (action.type) {
    case ActionTypes.SING_IN_R:
    case ActionTypes.GET_USER_R:
      return {...state, loading: true, errors: undefined};
    case ActionTypes.SET_USER:
      return {...state, data: action.payload};
    case ActionTypes.GET_USER_S:
      return {
        ...state,
        loading: false,
        data: action.payload,
        errors: undefined,
      };
    case ActionTypes.SING_IN_S:
      return {
        ...state,
        loading: false,
        data: action.payload,
        errors: undefined,
      };
    case ActionTypes.SING_IN_E:
    case ActionTypes.GET_USER_E:
      return {...state, loading: false, errors: action.payload};
    default:
      return state;
  }
};

export {userReducer as UserReducer};
