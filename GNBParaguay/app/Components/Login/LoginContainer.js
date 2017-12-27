import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar, BackHandler } from 'react-native';

/*import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../../State/actions';
*/
/*import API from '../../Api';
*/
import Login from './Login';

class LoginContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ci: '',
			country: '',
			user: '',
			password: ''
		};
	}
	
	onSignIn = () => {
		this.props.navigate();
	};

	render() {
		return (
			<Login navigate={this.onSignIn} />
		);
	}
}

LoginContainer.propTypes = {
	navigate: PropTypes.func.isRequired,
};

export default LoginContainer ;
