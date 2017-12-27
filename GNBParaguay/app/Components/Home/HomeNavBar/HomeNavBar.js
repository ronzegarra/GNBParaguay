import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';

import Images from '../../../Images';

const HomeNavBar = () => (
  <View style={styles.container}>
    <View style={{width:'25%'}}>
			<Text style={styles.textAccount}>Cuenta 1985472</Text>
			<View />
		</View>
		<View style={styles.content}>
			<Text style={styles.textMenu}>Menú Principal</Text>
			<View />
    </View>
    <View style={{width:'25%'}}>
      {/*<Image style={{marginTop: 10, width: 20}} resizeMode={'stretch'} source={Images.optionsMenu} />*/}
      <Text style={styles.textAccount}>...</Text>
      <View />
    </View>
	</View>
);

const styles = StyleSheet.create({
	backgroundImage: {
		alignSelf: 'stretch',
		width: null,
		height: 110
	},
	container: {
		height: 45,
    width: '100%',
    flexDirection: 'row',
    backgroundColor:'#74AF3D',
		justifyContent: 'center'
    //alignItems: 'center',
    
	},
	content: {
		height: 45,
    width: '50%',
    backgroundColor:'#74AF3D'
	},
  textMenu: {
		color: '#FFFFFF',
		fontSize: 14,
    marginTop: 15,
    //fontWeight: '600',
    textAlign: 'center'
  },
  textAccount: {
		color: '#FFFFFF',
		fontSize: 10,
    marginTop: 18,
    //fontWeight: '600',
    textAlign: 'center'
  },
 
});

export default HomeNavBar;
