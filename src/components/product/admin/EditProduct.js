import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {css} from '@emotion/native';
import {Button, Input} from 'react-native-elements';
import {connect} from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';
import {editProduct, listAllProducts} from '../../../redux/actions/product';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import gas from '../../variables.styles';

const EditProduct = props => {
  const {navigation, authUser, categories} = props;
  const {dispatch, updatingProduct, updatingProductSuccess} = props;
  const {product} = props.route.params;
  const [form, setForm] = useState({
    id: product.id,
  });

  useEffect(() => {
    if (updatingProductSuccess === true) {
      navigation.goBack();
      dispatch(listAllProducts());
    }
  });

  const submitForm = () => {
    dispatch(editProduct(form));
  };

  const handleDropdown = ({value}) => {
    setForm(prev => ({...prev, productCategoryId: value}));
  };
  const handleChange = (name, val) => {
    setForm(prev => ({...prev, [name]: val}));
  };

  const label = 'padding-top: 10px; padding-left: 20px;';

  return (
    <ScrollView>
      <View
        style={css`
          flex-direction: row;
          justify-content: space-between;
          background: #4f4f4f;
        `}>
        <Text
          style={css`
            font-size: 18px;
            padding: 10px 20px;
            color: white;
          `}>
          Edit a product
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
        defaultValue={product.category.id}
        containerStyle={{height: 60}}
        activeLabelStyle={{color: 'red'}}
        onChangeItem={handleDropdown}
      />
      <Text
        style={css`
          ${label}
        `}>
        Name
      </Text>
      <Input
        placeholder="Product name"
        defaultValue={product.name}
        onChangeText={val => handleChange('name', val)}
        containerStyle={css`
          padding: 10px 20px;
        `}
      />
      <Text
        style={css`
          ${label}
        `}>
        Description
      </Text>
      <Input
        placeholder="Description"
        defaultValue={product.description}
        onChangeText={val => handleChange('description', val)}
        containerStyle={css`
          padding: 10px 20px;
        `}
      />
      <Text
        style={css`
          ${label}
        `}>
        Price ($)
      </Text>
      <Input
        keyboardType="numeric"
        placeholder="Price"
        defaultValue={String(product.price)}
        onChangeText={val => handleChange('price', val)}
        containerStyle={css`
          padding: 10px 20px;
        `}
      />
      <Text
        style={css`
          ${label}
        `}>
        Current stock
      </Text>
      <Input
        keyboardType="numeric"
        placeholder="Current stock"
        defaultValue={String(product.stockQuantity)}
        onChangeText={val => handleChange('stockQuantity', val)}
        containerStyle={css`
          padding: 10px 20px;
        `}
      />
      <Text
        style={css`
          ${label}
        `}>
        Image URL
      </Text>
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
        loading={updatingProduct}
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
    updatingProduct: state.product.updatingProduct,
    updatingProductSuccess: state.product.updatingProductSuccess,
  }),
  dispatch => ({
    dispatch,
    editProduct,
  }),
)(EditProduct);
