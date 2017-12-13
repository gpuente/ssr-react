import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  store: (store = {}) => store,
});

export default rootReducer;
