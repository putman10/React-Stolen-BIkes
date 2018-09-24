import { combineReducers } from 'redux';
import latLongReducer from './latLongReducer';

const rootReducer = combineReducers({
  search: latLongReducer
});

export default rootReducer;
