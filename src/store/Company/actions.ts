import {action} from 'typesafe-actions';
import {ActionTypes, TSendCompanyData, TCompany} from './types';

export const signUpCompanyR = (payload: TSendCompanyData) =>
  action(ActionTypes.SIGN_UP_R, payload);
export const signUpCompanyS = (payload: TCompany) =>
  action(ActionTypes.SIGN_UP_S, payload);
export const signUpCompanyE = (message: string) =>
  action(ActionTypes.SIGN_UP_E, message);

export const signInCompanyR = (payload: {
  email: TSendCompanyData['email'];
  password: TSendCompanyData['password'];
}) => action(ActionTypes.SIGN_IN_R, payload);

export const signInCompanyS = (payload: TCompany) =>
  action(ActionTypes.SIGN_IN_S, payload);
export const signInCompanyE = (message: string) =>
  action(ActionTypes.SIGN_IN_E, message);

export const getCompanyR = (payload: {
  callbackSuccess?: () => void;
  callbackError?: () => void;
}) => action(ActionTypes.COMPANY_R, payload);
export const getCompanyS = (payload: TCompany) =>
  action(ActionTypes.COMPANY_S, payload);
export const getCompanyE = (message: string) =>
  action(ActionTypes.COMPANY_E, message);
