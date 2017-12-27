const init = () => ({
  type: 'INIT',
  payload: {},
});

const setAuth = userData => ({
  type: 'SET_AUTH',
  payload: userData,
});

const signIn = userData => async (dispatch) => {
  dispatch(setAuth(userData));
  return userData;
};

const setVisits = visits => ({
  type: 'SET_VISITS',
  payload: visits,
});

const loadVisits = visits => async (dispatch) => {
  dispatch(setVisits(visits));
  return visits;
};

const setPropertyInDialog = property => ({
  type: 'ADD_PROPERTY',
  payload: property,
});

const addPropertyToDialog = property => async (dispatch) => {
  dispatch(setPropertyInDialog(property));
  return property;
};

export default {
  init,
  signIn,
  loadVisits,
  addPropertyToDialog,
};
