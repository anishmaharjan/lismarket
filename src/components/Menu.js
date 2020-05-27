import React from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Container} from 'native-base';
import Header from './Header';
import {connect} from 'react-redux';
import {signOut} from '../redux/actions/auth';

const Menu = props => {
  const {title, navigation} = props;
  const {dispatch, signOut} = props;

  const navPointer = screen => () => {
    navigation.navigate(screen);
  };

  return (
    <Container>
      <Header />
      <View>
        <TouchableOpacity onPress={navPointer('Customers')}>
          <Text style={style.list}>[A]Users</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navPointer('AdminProducts')}>
          <Text style={style.list}>[A]Products</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={style.list} onPress={navPointer('Profile')}>
            Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={style.list} onPress={navPointer('Dashboard')}>
            Dashboard
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={style.list} onPress={navPointer('Category')}>
            Category
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={style.list}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={style.list}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(signOut())}>
          <Text style={style.list}>Sign out</Text>
        </TouchableOpacity>
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

export default connect(
  null,
  dispatch => ({
    dispatch,
    signOut,
  }),
)(Menu);
