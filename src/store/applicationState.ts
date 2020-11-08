import {TCompaniesState} from './Companies/types';
import {TCompanyState} from './Company/types';
import {TUserState} from './User/types';

export interface ApplicationState {
  User: TUserState;
  Company: TCompanyState;
  Companies: TCompaniesState;
}
