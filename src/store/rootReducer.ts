import {combineReducers} from 'redux';
import {CompanyReducer} from './Company/reducer';
import {UserReducer} from './User/reducer';

const rootReducer = combineReducers({
  User: UserReducer,
  Company: CompanyReducer,
});

export default rootReducer;
