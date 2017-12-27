import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Home from '../../Components/Home';

class HomeScreen extends Component {
  navigate = () => {
    this.props.navigation.navigate('Dialog');
  };
  render() {
    return <Home navigate={this.navigate} />;
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default HomeScreen;
