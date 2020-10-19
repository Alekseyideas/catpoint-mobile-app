export interface TSendUserData {
  appId: string;
  email: string;
  image: string;
  lastName: string;
  firstName: string;
}

export interface TUser extends TSendUserData {
  id: number | null;
  createAt: number;
  token: string;
  refreshToken: string;
  updateAt: number;
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

  SING_IN_R = '@@user/SING_IN_R',
  SING_IN_S = '@@user/SING_IN_S',
  SING_IN_E = '@@user/SING_IN_E',

  SET_USER = '@@user/SET_USER',

  USER_CLEAN_UP = '@@user/USER_CLEAN_UP',
}
