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

import {editCategory, listCategory} from '../../../redux/actions/category';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const EditCategory = props => {
  const {
    navigation,
    updatingCategory,
    successUpdatingCategory,
    categories,
  } = props;
  const {dispatch, editCategory} = props;

  const {category} = props.route.params;

  const [form, setForm] = useState({
    id: category.id,
  });

  const updateCategory = () => {
    dispatch(editCategory(form));
  };

  const handleChange = (name, val) => {
    setForm(prev => ({...prev, [name]: val}));
  };

  useEffect(() => {
    if (successUpdatingCategory === true) {
      dispatch(listCategory());
      navigation.goBack();
    }
  });
  return (
    <View
      style={css`
        flex: 1;
        top: 40px;
      `}>
      <View
        style={css`
          flex-direction: row;
          justify-content: space-between;
        `}>
        <Text
          style={css`
            font-size: 18px;
            padding: 10px 20px;
          `}>
          Edit a category
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
        defaultValue={category.name}
        onChangeText={val => handleChange('name', val)}
        containerStyle={css`
          padding: 10px 20px;
        `}
      />
      <Input
        placeholder="Fav-icon"
        defaultValue={category.image}
        onChangeText={val => handleChange('image', val)}
        containerStyle={css`
          padding: 10px 20px;
        `}
      />
      <Button
        title="Update category"
        style={css`
          padding: 10px 20px;
        `}
        onPress={updateCategory}
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
    updatingCategory: state.category.updatingCategory,
    successUpdatingCategory: state.category.successUpdatingCategory,
    categories: state.category.categories,
  }),
  dispatch => ({
    dispatch,
    editCategory,
  }),
)(EditCategory);
