import {TCompanyState} from './Company/types';
import {TUserState} from './User/types';

export interface ApplicationState {
  User: TUserState;
  Company: TCompanyState;
}
