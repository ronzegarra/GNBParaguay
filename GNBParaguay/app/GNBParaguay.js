import React from 'react';
import { AppRegistry } from 'react-native';
//import { Provider } from 'react-redux';
import AppWithNavigation from './navigation';
//import store from './State/store';

{/*
const Visitas = () => (
  <Provider store={store}>
    <AppWithNavigation />
  </Provider>
);
*/}

const GNBParaguay = () => (
  
  <AppWithNavigation />

);

AppRegistry.registerComponent('GNBParaguay', () => GNBParaguay);

