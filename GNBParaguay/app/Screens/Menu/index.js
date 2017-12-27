import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import { TouchableOpacity } from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../Home';
import Logout from '../Login';
import theme from '../../theme/theme';

const { color } = theme;

const onItemPress = (route) => {
  console.log(`onItemPress ${route}`);
};

const MainDrawer = DrawerNavigator(
  {
    Home: {
      path: '/home',
      screen: Home,
    }
    /*Salir: {
      path: '/salir',
      screen: Logout,
    },
    */
  },
  {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: color.blue,
      onItemPress: route => onItemPress(route),
    },
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  },
);

Home.navigationOptions = ({ navigation }) => ({
  /*title: '  Tus Visitas',
  headerTintColor: color.white,
  headerStyle: {
    backgroundColor: color.green,
  },
  drawerLabel: 'Inicio',
  */
 /* headerLeft: (
    <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
      <Icon
        style={{ marginLeft: 22 }}
        name="ios-menu"
        color={color.white}
        size={36}
      />
    </TouchableOpacity>
  ),
  */
});

export default MainDrawer;
