import {action} from 'typesafe-actions';
import {ActionTypes, TSendCompanyData, TCompany} from './types';

export const signUpCompanyR = (payload: TSendCompanyData) =>
  action(ActionTypes.SIGN_UP_R, payload);
export const signUpCompanyS = (payload: TCompany) =>
  action(ActionTypes.SIGN_UP_S, payload);
export const signUpCompanyE = (message: string) =>
  action(ActionTypes.SIGN_UP_E, message);
