import React, {useState, useEffect} from 'react';
import {Container, Content, Text} from 'native-base';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import {Picker} from 'native-base';
import {connect} from 'react-redux';
import {css} from '@emotion/native';
import Header from '../Header';
import EachItem from './EachItem';
import {borderBottom, flexRow, padding} from '../theme.style';

const ProductList = props => {
  const {route, navigation, products, categories, dispatch} = props;
  const {category} = route.params;

  useEffect(() => {
  }, []);

  return (
      <Container>
        <View>
          <Header/>
          <View style={css`
        flex-direction: row;
        height: 40px;
        padding: 10px 20px;
        `}>
            {console.log(products, category, categories)}
            {
              categories && categories.map((cat, key) => <View key={key}>
                    <TouchableOpacity style={css`
                  `}>
                      <Text style={css`
                  padding: 5px 10px;
                  `}>{cat.name}</Text>
                    </TouchableOpacity>
                  </View>,
              )
            }
          </View>
          <ScrollView>

            {
              products && products.items && [
                ...products.items,
                ...products.items,
                ...products.items,
                ...products.items,
                ...products.items,
                ...products.items,
                ...products.items,
                ...products.items,
                ...products.items,
                ...products.items,
                ...products.items,
                ...products.items,
                ...products.items,
                ...products.items].filter(fil => category.id === fil.category.id).map((product, key) =>
                  <EachItem product={product}/>
              )
            }
          </ScrollView>
        </View>
      </Container>
  );
};
export default connect(state => ({
  categories: state.category.categories,
  products: state.product.products,
}), dispatch => ({
  dispatch,
}))(ProductList);
