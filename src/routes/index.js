import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import SignIn from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';
import ConfirmSignUp from '../components/auth/ConfirmSignUp';

import Home from '../components/Home';
import Menu from '../components/Menu';
import Cart from '../components/Cart';

import Users from '../components/user/admin/AdminUsers';

import AdminProduct from '../components/product/admin/AdminProduct';
import AddProduct from '../components/product/admin/AddProduct';
import ProductList from '../components/product/ProductList';

import Category from '../components/category/Category';
import AddCategory from '../components/category/AddCategory';
import ProductDetails from '../components/product/ProductDetails';

const RootStack = createStackNavigator();
const Stack = createStackNavigator();

const rootStack = ({isLoggedIn}) => {

  const MainStackScreen = () => (
      <Stack.Navigator>
        {isLoggedIn ? (
            <>
              <Stack.Screen name="Home" component={Home}/>
              <Stack.Screen name="Menu" component={Menu}/>
              <Stack.Screen name="ProductList" component={ProductList}/>
              <Stack.Screen name="ProductDetailScreen" component={ProductDetails}/>
              <Stack.Screen name="Cart" component={Cart}/>
              <Stack.Screen name="Category" component={Category}/>
            </>
        ) : (
            <>
              <Stack.Screen name="SignInScreen" component={SignIn} options={{headerShown: false}}/>
              <Stack.Screen name="SignUpScreen" component={SignUp} options={{title: 'Sign Up'}}/>
              <Stack.Screen name="ConfirmSignUpScreen" component={ConfirmSignUp} options={{title: 'Verify'}}/>
            </>
        )}
        {/*Admin*/}
        <Stack.Screen name="UsersScreen" component={Users}/>
        <Stack.Screen name="AdminProducts" component={AdminProduct}/>
      </Stack.Navigator>
  );

  return (
      <NavigationContainer>
        <RootStack.Navigator mode="modal" headerMode="none">
          <RootStack.Screen
              name="Main"
              component={MainStackScreen}
              options={{headerShown: false}}
          />
          <RootStack.Screen name="AddCategory" component={AddCategory}/>
          <RootStack.Screen name="AddProduct" component={AddProduct}/>
        </RootStack.Navigator>
      </NavigationContainer>
  );
};

export default rootStack;
