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
  | typeof Actions.signUpCompanyE
  | typeof Actions.getCompanyE
  | typeof Actions.getCompanyR
  | typeof Actions.getCompanyS;

const companyReducer = (
  state = initialState,
  action: ReturnType<UserActionTypes>,
): TCompanyState => {
  switch (action.type) {
    case ActionTypes.COMPANY_R:
    case ActionTypes.SIGN_UP_R:
    case ActionTypes.SIGN_IN_R:
      return {...state, loading: true, errors: undefined};

    case ActionTypes.COMPANY_S:
    case ActionTypes.SIGN_IN_S:
    case ActionTypes.SIGN_UP_S:
      return {
        ...state,
        data: action.payload,
        loading: false,
        errors: undefined,
      };

    case ActionTypes.SIGN_IN_E:
    case ActionTypes.COMPANY_E:
    case ActionTypes.SIGN_UP_E:
      return {...state, loading: false, errors: action.payload};
    default:
      return state;
  }
};

export {companyReducer as CompanyReducer};
