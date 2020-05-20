import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {css} from '@emotion/native';

const ProductList = props => {
  const {route, navigation, products, categories, dispatch} = props;
  const {category} = route.params;

  useEffect(() => {
  }, []);

  return (
      <View>
        <View style={css`
        flex-direction: row;
        height: 40px;
        padding: 10px 20px;
        `}>
          {console.log(products, category, categories)}
          {
            categories && categories.map((cat, key) => <View key={key}>
                  <Text>{cat.name}</Text>
                </View>,
            )
          }
        </View>
        {
          products && products.items && products.items.filter(fil => category.id === fil.category.id).map((item, key) =>
              <View key={key} style={css`
              padding: 10px 20px;
              `}>
                <Text>{item.name}</Text>
              </View>,
          )
        }

      </View>
  );
};
export default connect(state => ({
  categories: state.category.categories,
  products: state.product.products,
}), dispatch => ({
  dispatch,
}))(ProductList);
