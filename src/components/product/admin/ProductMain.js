import React, {useEffect, useState} from 'react';
import {Auth} from 'aws-amplify';
import Dashboard from 'react-native-dashboard';

import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';
import {Container, Content, Left, Right, Icon} from 'native-base';
import Header from '../../Header';
import {connect} from 'react-redux';
import {signOut} from '../../../redux/actions/auth';

const ProductMain = props => {
  const {authUser} = props;
  const {title, navigation} = props;
  const {dispatch, signOut} = props;
  const card = el => {
    if(el.value == 'signout')
    {
      dispatch(signOut())
    }
    else
    {
     navigation.navigate(el.value);
    } 
  };

  const items = [
    { name: 'Category', value: 'AdminCategory', background: '#74D4DE', icon: 'list' },
    { name: 'Products', value: 'AdminProducts', background: '#76EE00', icon: 'lemon-o' },
    { name: 'Out of Stock Products', value: 'NoStock', background: '#FEC001', icon: 'arrows-alt' },    
  ];
  return (
      <Container>
         <View style={styles.container}>
                <Dashboard items={items} background={true} card={card} column={2} />
              </View>
      </Container>
  );
};

const style = StyleSheet.create({
  list: {
    height: 40,
    padding: 10,
    fontSize: 18,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
});

export default connect(state => ({
  authUser: state.auth.authUser
  }), dispatch => ({
  dispatch,
  signOut
}))(ProductMain);
