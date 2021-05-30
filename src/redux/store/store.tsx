// Imports: Dependencies
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/sagas'

// Imports: Redux Root Reducer
import rootReducer from '../reducers';

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();

// Redux: Store
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);

// Exports
export { store }