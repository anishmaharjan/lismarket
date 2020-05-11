import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';

import {Container, Content, Header, Left, Right, Icon} from 'native-base';
import {Auth} from 'aws-amplify';
import {navigate} from '@react-navigation/routers/src/CommonActions';

const signOut = async () => {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log('error signing out: ', error);
  }
};

const Menu = props => {
  const {title, navigation} = props;

  const navPointer = (screen) => () => {
    navigation.navigate(screen);
  };

  return (
      <Container>
        <Header>
          <Text>Drawer</Text>
        </Header>
        <View>
          <TouchableOpacity><Text style={style.list}>[A]Products</Text></TouchableOpacity>

          <TouchableOpacity><Text style={style.list}>Profile</Text></TouchableOpacity>
          <TouchableOpacity><Text style={style.list} onPress={navPointer('Category')}>Category</Text></TouchableOpacity>
          <TouchableOpacity><Text style={style.list}>About</Text></TouchableOpacity>
          <TouchableOpacity><Text style={style.list}>Help</Text></TouchableOpacity>
          <TouchableOpacity
              onPress={() => signOut().then((r) => {
                    console.log('signout ', r);
                    navigate('Home');
                  },
              )}
          ><Text style={style.list}>Sign out</Text></TouchableOpacity>
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

export default Menu;
