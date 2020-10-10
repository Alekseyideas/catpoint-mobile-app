import {combineReducers} from 'redux';
import {UserReducer} from './User/reducer';

const rootReducer = combineReducers({
  User: UserReducer,
});

export default rootReducer;
