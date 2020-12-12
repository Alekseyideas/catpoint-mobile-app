export interface TUserCompany {
  id: number;
  createAt: string;
  updateAt: string;
  userId: number;
  companyId: number;
  visits: number;
  points: number;
  finishedCount: number;
  __company__: {
    name: string;
    totalPoints: number;
  };
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

  UPDATE_COMPANIES = '@@companies/UPDATE_COMPANIES',

  COMPANIES_CLEAN_UP = '@@companies/COMPANIES_CLEAN_UP',
}
