import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {css} from '@emotion/native';
import {Button, Input} from 'react-native-elements';
import {connect} from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';
import {addProduct, listAllProducts} from '../../../redux/actions/product';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import gas from '../../variables.styles';

const AddProduct = props => {
  const {navigation, authUser, categories} = props;
  const {dispatch, addProduct, addingProductSuccess} = props;

  const [form, setForm] = useState({
    createdBy: authUser.sub,
    productCategoryId: '96f3378e-abfa-43c7-9668-d307dc1254a2',
  });

  useEffect(() => {
    if (addingProductSuccess === true) {
      navigation.goBack();
      dispatch(listAllProducts());
    }
  }, [addingProductSuccess, dispatch, navigation]);

  const submitForm = () => {
    dispatch(addProduct(form));
  };

  const handleDropdown = ({value}) => {
    setForm(prev => ({...prev, productCategoryId: value}));
  };
  const handleChange = (name, val) => {
    setForm(prev => ({...prev, [name]: val}));
  };

  return (
    <ScrollView>
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
          Add a product
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

      <Text
        style={css`
          padding: 10px 20px;
        `}>
        Choose a category
      </Text>
      <DropDownPicker
        items={
          categories &&
          categories.map((val, key) => ({label: val.name, value: val.id}))
        }
        placeholder="Select a category"
        containerStyle={{height: 60}}
        activeLabelStyle={{color: 'red'}}
        onChangeItem={handleDropdown}
      />

      <Input
        placeholder="Product name"
        onChangeText={val => handleChange('name', val)}
        containerStyle={css`
          padding: 10px 20px;
        `}
      />
      <Input
        placeholder="Description"
        onChangeText={val => handleChange('description', val)}
        containerStyle={css`
          padding: 10px 20px;
        `}
      />
      <Input
        placeholder="Price"
        keyboardType="numeric"
        onChangeText={val => handleChange('price', val)}
        containerStyle={css`
          padding: 10px 20px;
        `}
      />
      <Input
        placeholder="Current stock"
        keyboardType="numeric"
        onChangeText={val => handleChange('stockQuantity', val)}
        containerStyle={css`
          padding: 10px 20px;
        `}
      />
      <Input
        placeholder="Image Url"
        onChangeText={val => handleChange('image', val)}
        containerStyle={css`
          padding: 10px 20px;
        `}
      />

      <Button
        onPress={submitForm}
        title="Submit"
        style={css`
          padding: 10px 20px;
        `}
        buttonStyle={css`
          background-color: ${gas.primary};
        `}
      />

      <Button
        onPress={() => navigation.goBack()}
        title="Cancel"
        type="outline"
        style={css`
          padding: 10px 20px;
        `}
        buttonStyle={css`
          border-color: ${gas.primary};
        `}
        titleStyle={css`
          color: ${gas.primary};
        `}
      />
    </ScrollView>
  );
};

export default connect(
  state => ({
    categories: state.category.categories,
    authUser: state.auth.authUser,
    addingProductSuccess: state.product.addingProductSuccess,
  }),
  dispatch => ({
    dispatch,
    addProduct,
  }),
)(AddProduct);
