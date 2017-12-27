import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';

/*import Visit from './Visit';
import styles from './styles';
import Images from '../../Images';
*/
import theme from '../../theme/theme';

/*import HomeNavBar from './HomeNavBar';
const { color } = theme;
*/
import HomeNavBar from './HomeNavBar';
const { Theme, color, margins } = theme;
//import Images from '../../../Images';
import Images from '../../Images';

const Home = ({ navigate }) => (
	<View style={{
		flex: 1,
		backgroundColor: '#E2E1E1'
	}}>
		<HomeNavBar />
			<View style={{marginTop:30}}>
				<View style={{ flex: 1, flexDirection: 'row', width: '100%' }}>
					<View style={{ width: '33%', alignItems: 'center' }}>
						<Image style={styles.imageBar} resizeMode={'stretch'} source={Images.productMenu} />
						<Text style={styles.description}>Productos </Text>
						
					</View>
					<View style={{ width: '33%',  alignItems: 'center' }}>
						<Image style={styles.imageBar} resizeMode={'stretch'} source={Images.transferenceMenu} />
						<Text style={styles.description}>Transferencias</Text>
					</View>
					<View style={{ width: '33%', alignItems: 'center' }}>
						<Image style={styles.imageBar} resizeMode={'stretch'} source={Images.paymentMenu} />
						<Text style={styles.description}>Pagos</Text>
					</View>
				</View>
				<View style={{ marginTop: 100, flex: 1, flexDirection: 'row', width: '100%' }}>
				<View style={{ width: '33%', alignItems: 'center' }}>
					<Image style={styles.imageBar} resizeMode={'stretch'} source={Images.cardLockMenu} />
					<Text style={styles.description}>Productos </Text>
					
				</View>
				<View style={{ width: '33%',  alignItems: 'center' }}>
					<Image style={styles.imageBar} resizeMode={'stretch'} source={Images.branchOfficeMenu} />
					<Text style={styles.description}>Transferencias</Text>
				</View>

			</View>
		</View>
	</View>


);

Home.propTypes = {
	//visits: PropTypes.arrayOf(PropTypes.any).isRequired,
	navigate: PropTypes.func.isRequired
};


const styles = StyleSheet.create({
  container: {
		flex: 1,
		backgroundColor: '#E2E1E1'
	},

	emptyContainer: {
		flex: 0.7,
		justifyContent: 'center',
		alignItems: 'center'
	},

	imageContainer: {
		flex: 0.5,
		justifyContent: 'center',
		alignItems: 'center'
	},

	messageLabel: {
		paddingTop: 20,
		fontFamily: 'OpenSans',
		fontSize: 14,
		fontWeight: '300',
		textAlign: 'center',
		color: '#4a4a4a'
	},

	title: {
		//fontSize: fontSize.title,
		textAlign: 'center',
		marginTop: margins.md,
		marginHorizontal: 70,
		color: color.text
	},

	subtitle: {
		fontSize: 18,
		textAlign: 'center',
		marginTop: margins.md,
		marginHorizontal: 70,
		color: color.text
	},

	buttonContainer: {
		flex: 0.3,
		justifyContent: 'center',
		alignItems: 'center'
	},

	buttonContainerChild: {
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		bottom: 0,
		flex: 1,
		flexDirection: 'row'
	},

	button: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: color.green,
		height: 60,
		width: '100%'
	},

	textButton: {
		fontSize: 18,
		textAlign: 'center',
		fontWeight: '600',
		color: '#ffffff'
	},

	image: {
		marginTop: margins.md
	},

	visitsContainer: {
		flex: 1
	},

	imagePLus: {
		height: 65,
		width: 65
	},

	imageBar: {
		height: 60,
		width: 60
	},

	description: {
		fontSize: 10
	}
});



export default Home;
