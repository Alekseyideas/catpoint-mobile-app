import {action} from 'typesafe-actions';
import {ActionTypes, TUserCompany} from './types';

export const getCompaniesR = (payload: {
  ids: number[];
  callBack?: (success: boolean) => void;
}) => action(ActionTypes.GET_COMPANIES_R, payload);
export const getCompaniesS = (payload: {companies: TUserCompany[]}) =>
  action(ActionTypes.GET_COMPANIES_S, payload);
export const getCompaniesE = (message: string) =>
  action(ActionTypes.GET_COMPANIES_E, message);

export const setUserCompany = (payload: {company: TUserCompany}) =>
  action(ActionTypes.SET_COMPANIES_S, payload);
