import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import Swiper from 'react-native-swiper';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Icon, Image} from 'react-native-elements';

import {Container, Content, Left, Right} from 'native-base';
import styled, {css} from '@emotion/native';
import Header from './Header';
import Footer from './Footer';

import {getUser, getItems} from '../redux/types';
import {listCategory} from '../redux/actions/category';
import {listAllProducts} from '../redux/actions/product';

const Home = props => {
  const {title, navigation} = props;
  const {user, items, categories, products, dispatch, getUser, listAllProducts} = props;

  useEffect(() => {
    dispatch(getUser());
    dispatch(getItems());
    dispatch(listCategory());
    dispatch(listAllProducts());
  }, []);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  return (
      <Container>
        <Header navigation={navigation}/>
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
          {
            categories && categories.map((cat, key) => <View key={'cat' + key} style={css`
            padding: 10px;`}>
              <TouchableOpacity
                  onPress={() => navigation.navigate('ProductList', {
                    category: cat
                  })}
                  style={css`
              flex-direction: row;
              background-color: #c4c4c4;
              width: 100px;
              height: 100px;
              padding: 10px;
              border-radius: 10px;
              `}>
                <Text>{cat.name}</Text>
                  </TouchableOpacity>
                </View>,
            )
          }


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
  categories: state.category.categories,
  products: state.product.products
}), dispatch => ({
  dispatch,
  getUser,
  getItems,
  listCategory,
  listAllProducts
}))(Home);
