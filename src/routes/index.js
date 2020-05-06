import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from '../components/Home';
import SideDrawer from '../components/SideDrawer';
import Cart from '../components/Cart';
// import Header from '../components/Header';

const Stack = createStackNavigator();

const routes = (
  <NavigationContainer>
    {/*<Header />*/}
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DrawerOpen" component={SideDrawer} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default routes;
