import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../../State/actions';
*/
import Home from './Home';

class HomeContainer extends Component {
	/*componentWillMount() {
		this.loadVisits();
	}
	loadVisits = async () => {
		try {
			if (!this.props.visits.length || this.props.visits.length === 0) {
				const visits = await API().visits.getVisits();
				console.log(`loadVisits ${JSON.stringify(visits)}`);
				await this.props.actions.loadVisits(visits);
			}
		} catch (err) {
			console.log(`loadVisits error ${JSON.stringify(err)}`);
		}
  };
  */
	render() {
		return <Home navigate={this.props.navigate} />;
	}
}

HomeContainer.propTypes = {
	/*actions: PropTypes.shape({}).isRequired,
	visits: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string.isRequired,
			uid: PropTypes.number.isRequired
		})
  ).isRequired,
  */
	navigate: PropTypes.func.isRequired
};

/*
const mapStateToProps = (state) => ({
	visits: state.visits
});

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(actions, dispatch)
});
*/

//export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

export default HomeContainer;
