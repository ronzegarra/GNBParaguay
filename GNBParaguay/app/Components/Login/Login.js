import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, TextInput, Alert, View } from 'react-native';
//import { bindActionCreators } from 'redux';

/*import { connect } from 'react-redux';
import actions from '../../redux/actions';
import CargandoView from '../Common/CargandoView
*/
//import { createAnimatableComponent, View} from 'react-native-animatable';
//const Spinner = require('react-native-spinkit');


//import Icon from 'react-native-vector-icons/Ionicons';

const font = 'Helvetica';
import theme from '../../theme/theme';
import Images from '../../Images';

const { Theme, color, margins } = theme;

import Home from '../Home';

const Login = ({navigate} ) => (

	<Image source={Images.loginBackground} style={styles.backgroundImage} resizeMode={'stretch'}>
	
					<View style={styles.container}>
						<View style={{ bottom: 5 }}>
							<View
								style={{
									marginLeft: 70,
									marginRight: 70,
									marginBottom: 20,
									paddingBottom: 8,
									borderBottomColor: '#E6E6E3',
									borderBottomWidth: 1
								}}
							>
								<Text style={{ fontSize: 20, textAlign: 'center', color: '#949392' }}>Bienvenido</Text>
							</View>
	
							<View style={styles.rowInput}>
								<View style={{ width: 25, marginLeft: 3 }}>
									<Image
										source={Images.loginUser}
										resizeMode={'stretch'}
										style={styles.image}
									/>
								</View>
								<TextInput
									underlineColorAndroid={'transparent'}
									style={styles.textInput}
									placeholder={'Usuario'}
									placeholderTextColor={theme.colorInputText}
								//onChangeText={(usuario) => onChangeUser(usuario)}
								/>
							</View>
							<View style={styles.rowInput}>
								<View style={{ width: 25, marginLeft: 3 }}>
									<Image
										source={Images.loginPassword}
										resizeMode={'stretch'}
										style={styles.image}
									/>
								</View>
								<TextInput
									underlineColorAndroid={'transparent'}
									style={styles.textInput}
									placeholder={'Contraseña'}
									placeholderTextColor={theme.colorInputText}
								//onChangeText={(password) => onChangePassword(password)}
								/>
							</View>
							<View style={styles.row}>
								<TouchableOpacity style={styles.button} onPress={navigate} >
									<Text style={styles.textButton}>SIGUIENTE</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
					<View style={{ marginTop: 3, marginBottom: 10 }}>
						<Text style={styles.textInfo}>Ingresar como Banca Empresa</Text>
						<Text style={styles.textRegister}>¿Olvidó su contraseña?</Text>
					</View>
					{/*<View
						style={{
							borderTopColor: '#E6E6E3',
							borderTopWidth: 1,
							alignItems: 'center',
							width: Theme.width,
							paddingTop: 5,
							paddingBottom: 10
						}}
					>
	
					</View>*/}
	
					<View style={{borderWidth:1,borderColor:'#9C9C9C',justifyContent:'space-between',alignItems:'center',alignSelf:'stretch',paddingTop:10,flexDirection:'row',backgroundColor:'#EDEDED', width: '100%'}}>
						<View style={{width:'33%'}}>
							<TouchableOpacity onPress={this.generateToken} style={{ width: theme.width / 3, alignItems: 'center', alignSelf: 'stretch' }}  >
								<View style={styles.buttonImage}>
									<Image source={Images.tokenIcon} style={{ flex: 1, width: null }} resizeMode={'stretch'}/>
								</View>
								<View style={{paddingTop:12}}>
									<Text style={{fontSize: 10}}>Token</Text>
								</View>	
								</TouchableOpacity>
						</View>
						<View style={{width:'33%'}}>
							<TouchableOpacity onPress={this.goBranchOffices} style={{ width: theme.width / 3, alignItems: 'center', alignSelf: 'stretch' }}  >
								<View style={styles.buttonLocationImage}>
									<Image source={Images.location} resizeMode={'contain'} style={{ flex: 1, width: null }} resizeMode={'stretch'}/>
								</View>
								<Text style={{fontSize: 10}} >Ubíquenos</Text>
							</TouchableOpacity>
						</View>
						<View style={{width:'33%'}}>
							<TouchableOpacity onPress={this.callPhone} style={{ width: theme.width / 3, alignItems: 'center', alignSelf: 'stretch' }}  >
								<View style={styles.buttonPhoneImage}>
									<Image source={Images.phone} resizeMode={'contain'} style={{ flex: 1, width: null }} resizeMode={'stretch'}/>
								</View>
								<Text style={{fontSize: 10}}>Contáctenos</Text>
							</TouchableOpacity>
						</View>
					</View>
	
				</Image>

);

/*
Login.propTypes = {
	userData: PropTypes.shape({}).isRequired,
	onChangeUser: PropTypes.func.isRequired,
	onChangePassword: PropTypes.func.isRequired
	
	onPress: PropTypes.func.isRequired
};
*/

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		width: Theme.width,
		height: Theme.height,
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
		flexDirection: 'column',
		zIndex: 110
	},
	container: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	image: {
		marginTop: 10,
		marginLeft: 8,
		height: 15,
		width: 13,
		bottom: 2
	},
	imageCard: {
		marginTop: 10,
		marginLeft: 5,
		height: 15,
		width: 20,
		bottom: 2
	},
	imagePlanetary: {
		marginTop: 10,
		marginLeft: 5,
		height: 15,
		width: 15,
		bottom: 2
	},
	textInput: {
		color: Theme.colorInputText,
		fontSize: 12,
		width: Theme.width / 1.4,
		marginLeft: 5,
		fontFamily: font,
		paddingTop: 5,
		height: 35
	},

	textInputSmall: {
		color: Theme.colorInputText,
		fontSize: 12,
		width: Theme.width / 4.0,
		marginLeft: 5,
		fontFamily: font,
		paddingTop: 5,
		height: 35
	},

	button: {
		backgroundColor: Theme.colorPrincipal,
		alignSelf: 'center',
		alignItems: 'center',
		padding: 5,
		paddingLeft: 25,
		paddingRight: 25,
		borderWidth: 1,
		borderColor: Theme.colorPrincipal,
		borderRadius: 4,
		width: 120,
		height: 24,
		marginTop: 8
	},
	textButton: {
		fontSize: 10,
		color: '#FFFFFF',
		fontFamily: font,
		paddingBottom: 8
	},
	textInfo: {
		fontSize: 10,
		fontFamily: font,
		fontWeight: '100',
		color: Theme.colorPrincipal,
		textAlign: 'center'
	},
	textRegister: {
		fontSize: 10,
		fontFamily: font,
		fontWeight: '100',
		color: '#949392',
		textAlign: 'center'
	},
	row: {
		marginLeft: Theme.margin,
		marginRight: Theme.margin,
		alignSelf: 'stretch'
	},
	rowInput: {
		borderColor: Theme.colorInputBackground,
		backgroundColor: Theme.colorInputBackground,
		borderWidth: 1,
		marginBottom: 8,
		alignSelf: 'stretch',
		marginLeft: Theme.margin,
		marginRight: Theme.margin,
		flexDirection: 'row',
		borderRadius: 2,
		alignItems: 'stretch',
		height: 30,
		justifyContent: 'center'
	},
	rowInputSMall: {
		borderColor: Theme.colorInputBackground,
		backgroundColor: Theme.colorInputBackground,
		borderWidth: 1,
		marginBottom: 8,
		alignSelf: 'stretch',
		flexDirection: 'row',
		borderRadius: 2,
		alignItems: 'stretch',
		height: 30
	},
	rowCombos: {
		marginBottom: 8,
		alignSelf: 'stretch',
		flexDirection: 'row',
		alignItems: 'stretch',
		height: 30,
		marginLeft: Theme.margin,
		marginRight: Theme.margin
	},
	buttonImage: {
		top: 3,
		width: 30,
		height: 12,
		backgroundColor: 'transparent',
		flexDirection: 'column',
		alignSelf: 'center',
		//paddingTop: 5
	},
	buttonLocationImage: {
		width: 15,
		height: 25,
		backgroundColor: 'transparent',
		flexDirection: 'column',
		alignSelf: 'center'
	},
	buttonPhoneImage: {
		width: 22,
		height: 25,
		backgroundColor: 'transparent',
		flexDirection: 'column',
		alignSelf: 'center'
	},
});

export default Login;
