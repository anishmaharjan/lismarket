import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from '../components/Home';
import SideDrawer from '../components/SideDrawer';
import Cart from '../components/Cart';

import ProductList from '../components/product/ProductList';

import Category from '../components/category/Category';
import AddCategory from '../components/category/AddCategory';

const RootStack = createStackNavigator();
const Stack = createStackNavigator();

const MainStackScreen = () => (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Menu" component={SideDrawer}/>
      <Stack.Screen name="ProductList" component={ProductList}/>
      <Stack.Screen name="Cart" component={Cart}/>
      <Stack.Screen name="Category" component={Category}/>
    </Stack.Navigator>
);

const rootStack = (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" headerMode="none">
        <RootStack.Screen
            name="Main"
            component={MainStackScreen}
            options={{headerShown: false}}
        />
        <RootStack.Screen name="AddCategory" component={AddCategory}/>
      </RootStack.Navigator>
    </NavigationContainer>
);

export default rootStack;
