import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SignIn from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';
import ConfirmSignUp from '../components/auth/ConfirmSignUp';

import Home from '../components/Home';
import Menu from '../components/Menu';
import Cart from '../components/cart/Cart';
import CheckoutScreen from '../components/cart/CheckoutScreen';
import PaymentSuccessScreen from '../components/cart/PaymentSuccess';
import Profile from '../components/user/Profile';

import Users from '../components/user/admin/AdminUsers';
import PurchaseHistory from '../components/user/PurchaseHistory';
import PurchaseDetails from '../components/user/PurchaseDetails';

import AdminProduct from '../components/product/admin/AdminProduct';
import ProductMain from '../components/product/admin/ProductMain';
import AddProduct from '../components/product/admin/AddProduct';
import EditProduct from '../components/product/admin/EditProduct';
import ProductList from '../components/product/ProductList';

import Category from '../components/category/Category';
import AddCategory from '../components/category/admin/AddCategory';
import AdminCategory from '../components/category/admin/AdminCategory';
import EditCategory from '../components/category/admin/EditCategory';
import ProductDetails from '../components/product/ProductDetails';

import Dashboard from '../components/admin/Dashboard';
import Order from '../components/admin/orders/Order';
import OrderDetail from '../components/admin/orders/OrderDetail';
import Inventory from '../components/admin/inventory/Inventory';
import StockChange from '../components/admin/inventory/StockChange';
import NoStock from '../components/admin/inventory/NoStock';
import {connect} from 'react-redux';

const RootStack = createStackNavigator();
const Stack = createStackNavigator();

const rootStack = ({isLoggedIn, isAdmin}) => {
  const MainStackScreen = () => (
    <Stack.Navigator
      initialRouteName={
        isLoggedIn ? (isAdmin ? 'Dashboard' : 'Home') : 'SignInScreen'
      }>
      {isLoggedIn ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="ProductList" component={ProductList} />
          <Stack.Screen name="ProductDetailScreen" component={ProductDetails} />
          <Stack.Screen
            name="CartScreen"
            component={Cart}
            options={{title: 'Cart'}}
          />
          <Stack.Screen
            name="CheckoutScreen"
            component={CheckoutScreen}
            options={{title: 'CheckoutScreen'}}
          />
          <Stack.Screen
            name="PaymentSuccessScreen"
            component={PaymentSuccessScreen}
          />
          <Stack.Screen
            name="CategoryScreen"
            component={Category}
            options={{title: 'Category'}}
          />
          <Stack.Screen
            name="PurchaseHistoryScreen"
            component={PurchaseHistory}
            options={{title: 'Purchase History'}}
          />
          <Stack.Screen
            name="PurchaseDetailsScreen"
            component={PurchaseDetails}
            options={{title: 'Order Details'}}
          />

          {isAdmin && (
            <>
              {/*Admin*/}
              <Stack.Screen name="Dashboard" component={Dashboard} />
              <Stack.Screen name="Customers" component={Users} />
              <Stack.Screen name="AdminProducts" component={AdminProduct} options={{title: 'Products'}} />
              <Stack.Screen name="AdminCategory" component={AdminCategory} options={{title: 'Category'}}/>
              <Stack.Screen name="Orders" component={Order} />
              <Stack.Screen name="Inventory" component={Inventory} />
              <Stack.Screen name="OrderDetail" component={OrderDetail} options={{title: 'Order Details'}} />
              <Stack.Screen name="ProductMain" component={ProductMain} options={{title: 'Product'}}/>
              <Stack.Screen name="NoStock" component={NoStock} options={{title: 'Out of Stock Products'}}/>
            </>
          )}
        </>
      ) : (
        <>
          <Stack.Screen
            name="SignInScreen"
            component={SignIn}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUpScreen"
            component={SignUp}
            options={{title: 'Sign Up'}}
          />
          <Stack.Screen
            name="ConfirmSignUpScreen"
            component={ConfirmSignUp}
            options={{title: 'Verify'}}
          />
        </>
      )}    
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
        <RootStack.Screen name="AddCategory" component={AddCategory} />
        <RootStack.Screen name="AddProduct" component={AddProduct} />
        <RootStack.Screen name="EditProduct" component={EditProduct} />
        <RootStack.Screen name="EditCategory" component={EditCategory} />
        <RootStack.Screen name="StockChange" component={StockChange} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default connect(state => ({
  isLoggedIn: state.auth.isLoggedIn,
  authUser: state.auth.authUser,
  isAdmin: state.auth.isAdmin,
}))(rootStack);
