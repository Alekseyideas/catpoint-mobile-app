import * as Actions from './actions';
import {ActionTypes, TCompaniesState} from './types';

export const initialState: TCompaniesState = {
  data: [],
  loading: true,
  errors: undefined,
};

type UserActionTypes =
  | typeof Actions.getCompaniesR
  | typeof Actions.getCompaniesS
  | typeof Actions.getCompaniesE
  | typeof Actions.setUserCompany;

const reducer = (
  state = initialState,
  action: ReturnType<UserActionTypes>,
): TCompaniesState => {
  switch (action.type) {
    // case ActionTypes.SET_COMPANIES_R:
    case ActionTypes.GET_COMPANIES_R:
      return {...state, loading: true, errors: undefined};
    case ActionTypes.SET_COMPANIES_S:
      return {...state, data: [action.payload.company, ...state.data]};
    case ActionTypes.GET_COMPANIES_S:
      return {
        ...state,
        loading: false,
        data: action.payload.companies,
        errors: undefined,
      };

    // case ActionTypes.SET_COMPANIES_E:
    case ActionTypes.GET_COMPANIES_E:
      return {...state, loading: false, errors: action.payload};
    default:
      return state;
  }
};

export {reducer as CompaniesReducer};
