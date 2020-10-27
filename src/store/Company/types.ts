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
  SIGN_UP_R = '@@company/SIGN_UP_R',
  SIGN_UP_S = '@@company/SIGN_UP_S',
  SIGN_UP_E = '@@company/SIGN_UP_E',

  SIGN_IN_R = '@@company/SIGN_IN_R',
  SIGN_IN_S = '@@company/SIGN_IN_S',
  SIGN_IN_E = '@@company/SIGN_IN_E',

  COMPANY_R = '@@company/COMPANY_R',
  COMPANY_S = '@@company/COMPANY_S',
  COMPANY_E = '@@company/COMPANY_E',

  CLEAN_UP = '@@company/CLEAN_UP',
}
