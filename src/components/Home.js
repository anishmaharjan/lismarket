import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Icon, Image} from 'react-native-elements';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Container, Content, Header, Left, Right} from 'native-base';

import Swiper from 'react-native-swiper';
import styled, {css} from '@emotion/native';

import {connect} from 'react-redux';
import {getUser, getItems} from '../redux/actions';
import Footer from './Footer';

const Home = props => {
  const {title, navigation} = props;
  const {user, items, dispatch, getUser} = props;

  useEffect(() => {
    dispatch(getUser());
    dispatch(getItems());
    // dispatch(listCategory());
  }, []);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  return (
      <Container>
        <View style={css`
      flex-direction: row;
      justify-content: space-between;
      height: 50px;
      padding: 10px 20px;
      `}>
          <TouchableOpacity>
            <Text style={css`
          font-size: 24px;
          `}>LI Market</Text>
          </TouchableOpacity>
          <View>
            <FontAwesome5 name={'shopping-cart'} style={css`
            font-size: 24px;
            padding-bottom: 5px;
            `} onPress={() => navigation.navigate('Cart')}
            />
          </View>
        </View>

        <View style={css`
        height: 200px;
        `}>
          <Swiper style={css`
        padding: 10px;
        `} autoplay={false}>
            <View style={''}>
              <Image style={css`
            height: 170px;
            `} source={{uri: 'https://assets-limarket.s3-ap-southeast-2.amazonaws.com/banners/banner1.png'}}/>
            </View>
            <View style={''}>
              <Image style={css`
            height: 170px;
            `} source={{uri: 'https://assets-limarket.s3-ap-southeast-2.amazonaws.com/banners/banner1.png'}}/>
            </View>
          </Swiper>
        </View>

        <View style={css`
        flex-direction: row;
        padding: 10px;
        `}>
          <View style={css`
          padding: 10px;`}>
            <View style={css`
          flex-direction: row;
          background-color: #c4c4c4;
          width: 100px;
          height: 100px;
          padding: 10px;
          border-radius: 10px;
          `}>
              <Text>A</Text>
            </View>
          </View>
          <View style={css`
          padding: 10px;`}>
            <View style={css`
          flex-direction: row;
          background-color: #c4c4c4;
          width: 100px;
          height: 100px;
          padding: 10px;
          border-radius: 10px;
          `}>
              <Text>A</Text>
            </View>
          </View>
          <View style={css`
          padding: 10px;`}>
            <View style={css`
          flex-direction: row;
          background-color: #c4c4c4;
          width: 100px;
          height: 100px;
          padding: 10px;
          border-radius: 10px;
          `}>
              <Text>A</Text>
            </View>
          </View>
        </View>

        {/*<FlatList
            data={items}
            renderItem={({item}) => (
                <ListItem item={item} deleteItem={deleteItem}/>
            )}
        />*/}


        {/*      <Text>Icons made by Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></Text>*/}
        {/*<Text>Icons made by Freepik from www.flaticon.com</Text>*/}

        <Footer navigation={navigation}/>
      </Container>
  );
};

export default connect(state => ({
  user: state.userReducer.user,
  items: state.item.items,
}), dispatch => ({
  dispatch,
  getUser,
  getItems,
}))(Home);
