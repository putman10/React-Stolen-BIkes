import { combineReducers } from 'redux';
import latLongReducer from './latLongReducer';

const rootReducer = combineReducers({
  latLong: latLongReducer
});

export default rootReducer;
