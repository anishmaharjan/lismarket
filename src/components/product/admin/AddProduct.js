import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {css} from '@emotion/native';
import {Button, Input} from 'react-native-elements';
import {connect} from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';
import {addProduct} from '../../../redux/actions/product';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const AddProduct = props => {
  const {navigation, authUser, categories} = props;
  const {dispatch, addProduct} = props;

  const [form, setForm] = useState({
    createdBy: authUser.sub,
    productCategoryId: '96f3378e-abfa-43c7-9668-d307dc1254a2',
  });
  const submitForm = () => {
    //validate here
    console.log(form);

    dispatch(addProduct(form));

  };

  const handleDropdown = ({value}) => {
    setForm(prev => ({...prev, productCategoryId: value}));
  };
  const handleChange = (name, val) => {
    setForm(prev => ({...prev, [name]: val}));
  };

  return (
      <View>
        <View style={css`
        flex-direction: row;
        justify-content: space-between;
        `}>
          <Text style={css` font-size: 18px; padding: 10px 20px`}>Add a product</Text>
          <FontAwesome5 name={'times'} style={css`
            font-size: 24px;
            padding: 10px;
            `}
                        onPress={() => navigation.goBack()}
          />
        </View>

        <Text style={css`padding: 10px 20px`}>Choose a category</Text>
        <DropDownPicker
            items={categories && categories.map((val, key) =>
                ({label: val.name, value: val.id}),
            )}
            placeholder="Select a category"
            containerStyle={{height: 60}}
            activeLabelStyle={{color: 'red'}}
            onChangeItem={handleDropdown}
        />

        <Input
            placeholder='Product name'
            onChangeText={val => handleChange('name', val)}
            containerStyle={css` padding: 10px 20px;`}
        />
        <Input
            placeholder='Description'
            onChangeText={val => handleChange('description', val)}
            containerStyle={css` padding: 10px 20px;`}
        />
        <Input
            placeholder='Price'
            onChangeText={val => handleChange('price', val)}
            containerStyle={css` padding: 10px 20px;`}
        />
        <Input
            placeholder='Current stock'
            onChangeText={val => handleChange('stockQuantity', val)}
            containerStyle={css` padding: 10px 20px;`}
        />
        <Input
            placeholder='Image Url'
            onChangeText={val => handleChange('image', val)}
            containerStyle={css`padding: 10px 20px;`}
        />

        <Button
            onPress={submitForm}
            title="Submit"
            style={css`
            padding: 10px 20px;
            `}
        />

        <Button
            onPress={() => navigation.goBack()}
            title="Cancel"
            type='outline'
            style={css`
            padding: 10px 20px;
            `}
        />
      </View>
  );
};

export default connect(state => ({
  categories: state.category.categories,
  authUser: state.auth.authUser,
}), dispatch => ({
  dispatch,
  addProduct,
}))(AddProduct);
