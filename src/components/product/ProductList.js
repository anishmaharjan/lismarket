import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {css} from '@emotion/native';

const ProductList = props => {
  const {route, navigation,categories, dispatch} = props;
  const {category} = route.params;

  useEffect(() => {
  }, []);

  return (
      <View>
        <View style={css`
        flex-direction: row
        `}>
          {
            categories && categories.map((cat, key) => {
              <Text key={key}>{cat.name}</Text>
            })
          }

        </View>
        {console.log(category, categories)}
      </View>
  );
};
export default connect(state => ({
  categories: state.category.categories,
}), dispatch => ({
  dispatch,
}))(ProductList);
