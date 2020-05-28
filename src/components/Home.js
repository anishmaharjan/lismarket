import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import Swiper from 'react-native-swiper';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Image} from 'react-native-elements';

import {Container} from 'native-base';
import {css} from '@emotion/native';
import Header from './Header';
import Footer from './Footer';

import {listAllProducts} from '../redux/actions/product';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EachItem from './product/EachItem';

const Home = props => {
  const {title, navigation} = props;
  const {authUser, categories, products, dispatch, listAllProducts} = props;

  useEffect(() => {
    !products && dispatch(listAllProducts());
  }, [products, dispatch, listAllProducts]);

  return (
    <Container>
      <Header />
      <ScrollView>
        <View
          style={css`
            height: 200px;
          `}>
          <Swiper
            style={css`
              padding: 10px;
            `}
            autoplay={false}>
            <View style={''}>
              <Image
                style={css`
                  height: 170px;
                `}
                source={{
                  uri:
                    'https://assets-limarket.s3-ap-southeast-2.amazonaws.com/banners/banner1.png',
                }}
              />
            </View>
            <View style={''}>
              <Image
                style={css`
                  height: 170px;
                `}
                source={{
                  uri:
                    'https://assets-limarket.s3-ap-southeast-2.amazonaws.com/banners/banner2.jpg',
                }}
              />
            </View>
            <View style={''}>
              <Image
                style={css`
                  height: 170px;
                `}
                source={{
                  uri:
                    'https://assets-limarket.s3-ap-southeast-2.amazonaws.com/banners/banner3.jpg',
                }}
              />
            </View>
          </Swiper>
        </View>
        <View
          style={css`
            min-height: 100px;
          `}>
          <ScrollView
            horizontal={true}
            style={css`
              padding: 10px;
            `}>
            {categories &&
              categories.map((cat, key) => (
                <TouchableOpacity
                  key={'cat' + key}
                  onPress={() =>
                    navigation.navigate('ProductList', {
                      category: cat,
                    })
                  }
                  style={css`
                    // background-color: #abc;
                    width: 100px;
                    height: 100px;
                    padding: 10px;
                    border-width: 1px;
                    border-radius: 10px;
                    justify-content: center;
                    align-items: center;
                    margin: 10px;
                  `}>
                  <FontAwesome5
                    name={cat.image || 'circle-notch'}
                    style={css`
                      font-size: 24px;
                      padding-bottom: 5px;
                    `}
                  />
                  <Text>{cat.name}</Text>
                </TouchableOpacity>
              ))}
          </ScrollView>
        </View>

        {products &&
          products.items &&
          products.items.map((prod, key) => {
            return (
              key < 10 && <EachItem key={'product-list' + key} product={prod} />
            );
          })}
      </ScrollView>
      {/*      <Text>Icons made by Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></Text>*/}
      {/*<Text>Icons made by Freepik from www.flaticon.com</Text>*/}
      <Footer navigation={navigation} />
    </Container>
  );
};

export default connect(
  state => ({
    authUser: state.auth.authUser,
    categories: state.category.categories,
    products: state.product.products,
  }),
  dispatch => ({
    dispatch,
    listAllProducts,
  }),
)(Home);
