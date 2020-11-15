export interface TUserCompany {
  id: number;
  image: string | null;
  name: string;
}

export interface TCompaniesState {
  readonly loading: boolean;
  readonly data: TUserCompany[];
  readonly errors?: string | undefined;
}

export enum ActionTypes {
  GET_COMPANIES_R = '@@companies/GET_COMPANIES_R',
  GET_COMPANIES_S = '@@companies/GET_COMPANIES_S',
  GET_COMPANIES_E = '@@companies/GET_COMPANIES_E',

  SET_COMPANIES_R = '@@companies/SET_COMPANIES_R',
  SET_COMPANIES_S = '@@companies/SET_COMPANIES_S',
  SET_COMPANIES_E = '@@companies/SET_COMPANIES_E',

  COMPANIES_CLEAN_UP = '@@companies/COMPANIES_CLEAN_UP',
}
