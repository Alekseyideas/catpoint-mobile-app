export interface TSendCompanyData {
  email: string;
  firstName: string;
  name: string;
  phone: string;
  position: string;
  address: string;
  password: string;
}

export interface TCompany extends TSendCompanyData {
  id: number | null;
  createAt: number;
  token: string;
  refreshToken: string;
  updateAt: number;
  image: string;
}

export interface TCompanyState {
  readonly loading: boolean;
  readonly data: TCompany | null;
  readonly errors?: string | undefined;
}

export enum ActionTypes {
  SIGN_UP_R = '@@company/GET_USER_R',
  SIGN_UP_S = '@@company/GET_USER_S',
  SIGN_UP_E = '@@company/GET_USER_E',

  SET_USER = '@@user/SET_USER',

  USER_CLEAN_UP = '@@user/USER_CLEAN_UP',
}
