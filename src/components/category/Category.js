import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Text, Button, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import styled, {css} from '@emotion/native';
import {Image} from 'react-native-elements';

import {listCategory} from '../../redux/actions/category';

const Category = props => {
  const {category} = props;
  const {dispatch, listCategory} = props;

  useEffect(() => {
    dispatch(listCategory());

  }, []);

  return (
      <View>
        {console.log('*category', category)}
        <View>
          <Button
              title='Add Category'
              onPress={() => props.navigation.navigate('AddCategory')}
          />
          <Text>List of Categories</Text>
          <View style={css`
          flex-direction: row;
          padding: 10px 20px;
          flex-wrap: wrap;
          justify-content: space-evenly;
          `}>
            {
              category && category.map((item,key) => <View key={'category-list'+key} style={css`
              // padding: 10px 20px;
              `}>
                <View style={css`
              padding: 10px;
              height: 100px;
              width: 100px;
              background-color: red;
              align-items: center;
              justify-content: center;
              `}>
                  <Image/>
                  <Text>{item.name}</Text>
                </View>
              </View>)
            }
          </View>
        </View>
      </View>
  );
};

export default connect(state => ({
  category: state.category.categories,
}), dispatch => ({dispatch, listCategory}))(Category);
