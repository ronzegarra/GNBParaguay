import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';

import Login from '../../Components/Login';

//const onChangeToken = token => console.log(`Login recibe token ${token}`);

/*const resetNavigator = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Menu' })],
});
*/

const resetNavigator = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Menu' })],
});

class LoginScreen extends Component {
  navigate = () => {
    this.props.navigation.dispatch(resetNavigator);
  };

  render() {
    return <Login navigate={this.navigate} />;
  }
}

LoginScreen.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }).isRequired,
};

export default LoginScreen;
