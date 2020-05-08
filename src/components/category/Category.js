import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Text, Button, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';

import {getUser, getItems, listCategory} from '../../redux/actions';

const Category = props => {
  const {category} = props;
  const {dispatch, listCategory} = props;


  useEffect(() => {
    dispatch(listCategory());

  },[]);

  return (
      <View>
        {console.log("*category", category)}
        <View>
          <Button
              title='Add Category'
              onPress={() => props.navigation.navigate('AddCategory')}
          />
          <Text>List of Categories</Text>
          {
            category && category.map(item => <View>
              <Text>{item.name}</Text>
            </View>)
          }
        </View>
      </View>
  );
};

export default connect(state => ({
  category: state.product.categories
}), dispatch => ({dispatch, listCategory}))(Category);
