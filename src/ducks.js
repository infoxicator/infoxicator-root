import { combineReducers } from 'redux-immutable';
import { resourcesReducer } from 'iguazu-rest';

export const reducer = combineReducers({
  resources: resourcesReducer,
});

export default reducer;
