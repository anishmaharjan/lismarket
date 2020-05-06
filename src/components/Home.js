import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import uuid from 'react-native-uuid';
import AddItem from './AddItem';
import ListItem from './ListItem';

import {Container, Content, Header, Left, Right, Icon} from 'native-base';
import Swiper from 'react-native-swiper';

import {connect} from 'react-redux';
import {getUser, getItems} from '../redux/actions';

const Home = props => {
  const {title} = props;
  const {user, items, dispatch, getUser} = props;

  useEffect(() => {
    dispatch(getUser());
    dispatch(getItems());
  }, []);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  return (
    <Container style={''}>
      <Header style={{backgroundColor: '#EFF'}}>
        <Left style={{flexDirection: 'row'}}>
          <Icon
            name="md-menu"
            style={{marginRight: 15}}
            onPress={() => props.navigation.navigate('DrawerOpen')}
          />
          <Text style={''}>{title}</Text>
        </Left>
        <Right>
          <Icon
            name="md-cart"
            onPress={() => props.navigation.navigate('Cart')}
          />
        </Right>
      </Header>

      {/*<AddItem addItem={addItem} />*/}
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </Container>
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

export default connect(state => ({
  user: state.userReducer.user,
  items: state.item.items
}), dispatch => ({
  dispatch,
  getUser,
  getItems
}))(Home);
