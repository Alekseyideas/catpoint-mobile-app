import {action} from 'typesafe-actions';
import {ActionTypes} from './types';

export const setToken = (payload: string) =>
  action(ActionTypes.SET_TOKEN, payload);
