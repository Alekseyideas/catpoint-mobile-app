import * as Actions from './actions';
import {ActionTypes, TCompaniesState, TUserCompany} from './types';

export const initialState: TCompaniesState = {
  data: [],
  loading: true,
  errors: undefined,
};

type UserActionTypes =
  | typeof Actions.getCompaniesR
  | typeof Actions.getCompaniesS
  | typeof Actions.getCompaniesE
  | typeof Actions.updateUserCompanies
  | typeof Actions.setUserCompanies;

interface TCompPoint extends TUserCompany {
  isComplite?: boolean;
}
const addPointHandler = (
  com: TCompaniesState['data'],
  comPoint: TCompPoint,
): TUserCompany[] => {
  console.log(com, 'com');
  const compData = [...com];
  const index = compData.findIndex((obj) => obj.id === comPoint.id);
  /* eslint no-param-reassign: ["error", { "props": false }] */
  delete comPoint.isComplite;
  console.log(comPoint, 'comPoint data');
  if (index || index === 0) {
    compData[index] = {...comPoint};
  } else {
    compData.push(comPoint);
  }

  console.log(compData, 'compData');
  return compData;
};

const reducer = (
  state = initialState,
  action: ReturnType<UserActionTypes>,
): TCompaniesState => {
  switch (action.type) {
    // case ActionTypes.SET_COMPANIES_R:
    // case ActionTypes.GET_COMPANIES_R:
    //   return {...state, loading: true, errors: undefined};
    case ActionTypes.SET_COMPANIES_S:
      return {...state, data: action.payload.companies};
    case ActionTypes.GET_COMPANIES_S:
      return {
        ...state,
        loading: false,
        data: action.payload.companies,
        errors: undefined,
      };
    case ActionTypes.UPDATE_COMPANIES:
      return {
        ...state,
        loading: false,
        data: addPointHandler(state.data, action.payload.comp),
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
