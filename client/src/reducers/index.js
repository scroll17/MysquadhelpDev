import { combineReducers } from 'redux';
import userReducers from './userReducers';

import { reducer as formReducer } from 'redux-form';

const appReducer = combineReducers({
  userReducers,
  form: formReducer
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
