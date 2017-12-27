import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';


//import Icon from 'react-native-vector-icons/Ionicons';

import Login from './Screens/Login';
import Menu from './Screens/Menu';
//import Dialog from './Screens/Dialog';

import Home from './Screens/Home';

import Images from './Images';
import theme from './theme/theme';

const { color, Theme, margins } = theme;

Login.navigationOptions = () => ({
  header: null,
});

Menu.navigationOptions = {
  /*headerTintColor: color.white,
  headerStyle: {
    backgroundColor: color.primary,
  },
  */
  headerStyle: {
  position: 'absolute',
  backgroundColor: 'transparent',
  zIndex: 100,
  top: 0,
  left: 0,
  right: 0,
  //height: 50
  }
};

Home.navigationOptions = ({ navigation }) => ({
	//headerLeft: null,
	//title: 'OK',
	/*headerLeft: (
		<View>
			<TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
				<Icon
					style={{ marginLeft: 20, marginBottom: 15, marginTop: 10 }}
					name="ios-menu"
					color={Theme.colorPrincipal}
					size={36}
				/>
			</TouchableOpacity>
		</View>
	),*/
	headerRight: (
    <View>
      {/*<View>
        <Text style={styles.text}>Tus Visitas</Text>
      </View>*/}
			<TouchableOpacity onPress={() => navigation.navigate('Login')}>
			{/*<Icon
					style={{ marginRight: 20, marginBottom: 15, marginTop: 10 }}
					name="ios-mail"
					color="#FFFFFF"
					size={36}
      />*/}
      <Image
        style={styles.iconImage}
        source={Images.logoutButton}
        resizeMode={'stretch'}
      />
			</TouchableOpacity>
		</View>
	)
});

const styles = StyleSheet.create({
	iconImage: {
		//flex: 1,
		width: 25,
    height: 25,
    marginRight:10,
    marginBottom:5
    //color: 'green'
	},
	container: {
		height: 120,
		width: '100%',
		borderBottomColor: color.grey3,
		justifyContent: 'center',
		alignItems: 'center'
	},

	content: {
		height: 120,
		width: '100%'
	},

	text: {
		marginLeft: margins.md,
		color: Theme.colorPrincipal,
		fontSize: 25,
		marginTop: 25
	}
});

export default StackNavigator({
  Login: { screen: Login },
  Menu: { screen: Menu },
});
