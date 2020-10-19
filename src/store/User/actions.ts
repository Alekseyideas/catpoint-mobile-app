import {action} from 'typesafe-actions';
import {ActionTypes, TSendUserData, TUser} from './types';

export const signInR = (payload: TSendUserData) =>
  action(ActionTypes.SING_IN_R, payload);
export const signInS = (payload: TUser) =>
  action(ActionTypes.SING_IN_S, payload);
export const signInE = (message: string) =>
  action(ActionTypes.SING_IN_E, message);

export const getUserR = (
  callbackSuccess?: () => void,
  callbackError?: () => void,
) => action(ActionTypes.GET_USER_R, {callbackSuccess, callbackError});
export const getUserS = (payload: TUser) =>
  action(ActionTypes.GET_USER_S, payload);
export const getUserE = (message: string) =>
  action(ActionTypes.GET_USER_E, message);

export const setUser = (payload: TUser) =>
  action(ActionTypes.SET_USER, payload);
