import React, {useState, useEffect} from 'react';
// import {Text, View} from 'react-native-reanimated';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styled, {css} from '@emotion/native';
import {Input, Button} from 'react-native-elements';
import {connect} from 'react-redux';

import {addCategory} from '../../../redux/actions/category';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const AddCategory = props => {
  const {navigation, addingCategory, successAddingCategory, categories} = props;
  const {dispatch, addCategory} = props;

  const [form, setForm] = useState({});

  const handleChange = (name, val) => {
    setForm(prev => ({...prev, [name]: val}));
  };

  useEffect(() => {
    successAddingCategory === true ? navigation.goBack() : '';
  }, [navigation, successAddingCategory]);

  return (
    <View
      style={css`
        flex: 1;
        top: 40px;
      `}>
      <View style={css`flex-direction: row; justify-content: space-between;`}>
        <Text
          style={css`
            font-size: 18px;
            padding: 10px 20px;            
          `}>
          Add a category
        </Text>
        <FontAwesome5
          name={'times'}
          style={css`
            font-size: 24px;
            padding: 10px;
          `}
          onPress={() => navigation.goBack()}
        />
      </View>
      <Input
        placeholder="Category Name"
        onChangeText={val => handleChange('name', val)}
        containerStyle={css`
          padding: 10px 20px;
        `}
      />
      <Input
        placeholder="Fav-icon"
        onChangeText={val => handleChange('image', val)}
        containerStyle={css`
          padding: 10px 20px;
        `}
      />
      <Button
        title="Add a category"
        loading={addingCategory}
        style={css`
          padding: 10px 20px;
        `}
        onPress={() => dispatch(addCategory(form))}
      />
      <Button
        onPress={() => navigation.goBack()}
        title="Cancel"
        type="outline"
        style={css`
          padding: 10px 20px;
        `}
      />
    </View>
  );
};

export default connect(
  state => ({
    addingCategory: state.category.addingCategory,
    successAddingCategory: state.category.successAddingCategory,
    categories: state.category.categories,
  }),
  dispatch => ({
    dispatch,
    addCategory,
  }),
)(AddCategory);
