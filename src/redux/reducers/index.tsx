// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers
import formReducers from './reducers';

// Redux: Root Reducer
const rootReducer = combineReducers({
  authReducer: formReducers,
});

// Exports
export default rootReducer;