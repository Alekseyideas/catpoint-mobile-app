import {action} from 'typesafe-actions';
import {ActionTypes, TUser} from './types';

export const getUserR = () => action(ActionTypes.GET_USER_R);
export const getUserS = (payload: TUser) =>
  action(ActionTypes.GET_USER_S, payload);
export const getUserE = (message: string) =>
  action(ActionTypes.GET_USER_E, message);
