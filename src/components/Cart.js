import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import uuid from 'react-native-uuid';
import AddItem from './AddItem';
import ListItem from './ListItem';

import { Container, Content, Header, Left, Right, Icon } from 'native-base';
import Swiper from 'react-native-swiper';

const Cart = props => {
  const { title } = props;

  return (
    <Text>
      Cart Items
    </Text>
  );
};

const css = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Cart;
