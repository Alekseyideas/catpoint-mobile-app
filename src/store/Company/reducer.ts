import * as Actions from './actions';
import {ActionTypes, TCompanyState} from './types';

export const initialState: TCompanyState = {
  data: null,
  loading: true,
  errors: undefined,
};

type UserActionTypes =
  | typeof Actions.signUpCompanyR
  | typeof Actions.signUpCompanyS
  | typeof Actions.signUpCompanyE;

const companyReducer = (
  state = initialState,
  action: ReturnType<UserActionTypes>,
): TCompanyState => {
  switch (action.type) {
    case ActionTypes.SIGN_UP_R:
      return {...state, loading: true, errors: undefined};
    case ActionTypes.SIGN_UP_S:
      return {
        ...state,
        data: action.payload,
        loading: false,
        errors: undefined,
      };
    case ActionTypes.SIGN_UP_E:
      return {...state, loading: false, errors: action.payload};
    default:
      return state;
  }
};

export {companyReducer as CompanyReducer};
