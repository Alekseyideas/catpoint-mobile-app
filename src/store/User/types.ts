export interface TUser {
  id: number;
  fbId: string;
  inId: string;
  image: string;
  lastName: string;
  firstName: string;
}

export interface TUserState {
  readonly loading: boolean;
  readonly data: TUser | null;
  readonly errors?: string | undefined;
}

export enum ActionTypes {
  GET_USER_R = '@@user/GET_USER_R',
  GET_USER_S = '@@user/GET_USER_S',
  GET_USER_E = '@@user/GET_USER_E',

  USER_CLEAN_UP = '@@user/USER_CLEAN_UP',
}
