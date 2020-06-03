import { combineReducers } from 'redux-immutable';
import { proceduresReducer } from 'iguazu-rpc';

export const reducer = combineReducers({
  procedures: proceduresReducer,
});

export default reducer;
