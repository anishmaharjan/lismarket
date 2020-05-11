import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

const ProductList = props => {
  const {route, navigation, dispatch} = props;
  const {category} = route.params;

  useEffect(() => {
  }, []);

  return (
      <View>

      </View>
  );
};
export default connect(state => ({
  categories: state.category.categories,
}), dispatch => ({
  dispatch,
}))(ProductList);
