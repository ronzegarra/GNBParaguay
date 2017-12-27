import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import rootReducer from './reducer';
import initialState from './initialState';

const middleware = applyMiddleware(thunk, createLogger);

export default createStore(rootReducer, initialState, middleware);
