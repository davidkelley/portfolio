import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import ErrorReducer from './error';

export default combineReducers({
  error: ErrorReducer,
  routing: routerReducer
});
