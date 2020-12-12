import {combineReducers} from 'redux';
import {CompaniesReducer} from './Companies/reducer';
import {CompanyReducer} from './Company/reducer';
import {TokenReducer} from './Token/reducer';
import {UserReducer} from './User/reducer';

const rootReducer = combineReducers({
  User: UserReducer,
  Company: CompanyReducer,
  Companies: CompaniesReducer,
  Token: TokenReducer,
});

export default rootReducer;
