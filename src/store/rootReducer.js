import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import dashboardReducer from '../modules/redux/reducer';

const appReducer = combineReducers({
  form: formReducer,
  dashboard: dashboardReducer,
});

const rootReducer = (state, action) => {
  // Flush redux store at logout
  if (action.type === 'LOGOUT_SUCCESS') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
