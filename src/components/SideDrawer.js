import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import uuid from 'react-native-uuid';
import AddItem from './AddItem';
import ListItem from './ListItem';

import { Container, Content, Header, Left, Right, Icon } from 'native-base';
import Swiper from 'react-native-swiper';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import {navigate} from '@react-navigation/routers/src/CommonActions';

const signOut = async () => {
  try {
    await Auth.signOut();
    navigate('Protected', { user: 'John' });
  } catch (error) {
    console.log('error signing out: ', error);
  }
};

const SideDrawer = props => {
  const { title } = props;

  return (
    <Container>
      <Header>
        <Text>Drawer</Text>
      </Header>
      <View>
        <TouchableOpacity><Text style={style.list}>Home</Text></TouchableOpacity>
        <TouchableOpacity><Text style={style.list}>Profile</Text></TouchableOpacity>
        <TouchableOpacity><Text style={style.list}>About</Text></TouchableOpacity>
        <TouchableOpacity><Text style={style.list}>Help</Text></TouchableOpacity>
        <TouchableOpacity
            onPress={()=> signOut()}
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
    borderColor: '#eee'
  }
});

export default SideDrawer;
