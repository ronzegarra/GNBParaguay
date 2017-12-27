import { combineReducers } from 'redux';

import initialState from './initialState';

const auth = (state = initialState.auth, action = {}) => {
  switch (action.type) {
    case 'SET_AUTH': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

const visits = (state = initialState.visits, action = {}) => {
  switch (action.type) {
    case 'SET_VISITS': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

const dialog = (state = initialState.dialog, action = {}) => {
  switch (action.type) {
    case 'ADD_PROPERTY': {
      return Object.assign(state, action.payload);
    }
    default: {
      return state;
    }
  }
};

const reducer = combineReducers({
  auth,
  visits,
  dialog,
});

export default reducer;
