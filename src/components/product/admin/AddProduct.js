import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {css} from '@emotion/native';
import {Button, Input} from 'react-native-elements';
import {connect} from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';

const AddProduct = props => {
  const {navigation, categories} = props;

  const [form, setForm] = useState({});
  const submitForm = ()=> {
        console.log(form);
  };

  const handleDropdown = (category) => {
        setForm(prev => ({...prev, productCategoryId: category.value}));
  }
  const handleChange = (name, val) => {
    setForm(prev => ({...prev, [name]: val}));
  };

  return (
     <View>
        <Text style={css` font-size: 18px; padding: 10px 20px`}>Add a category</Text>
        {console.log(categories)}

        <DropDownPicker
            items={categories.map((val, key)=>
                (
                    {label : val.name, value: val.id}
                ) )
            }
            defaultIndex={1}
            placeholder="Select a Category"
            containerStyle={{height: 60}}
            activeLabelStyle={{color: 'red'}}
            onChangeItem={handleDropdown}
        />

        <Input
            placeholder='Product Name'
            onChangeText={inputVal => setForm(prev => ({...prev, name: inputVal}))}
            name='name'
            containerStyle={css` padding: 10px 20px;`}
        />
        <Input
            placeholder='Description'
            onChangeText={inputVal => setForm(prev => ({...prev, description: inputVal}))}
            name='name'
            containerStyle={css` padding: 10px 20px;`}
        />
        <Input
            placeholder='Price'
            onChangeText={inputVal => setForm(prev => ({...prev, price: inputVal}))}
            name='name'
            containerStyle={css` padding: 10px 20px;`}
        />
        <Input
            placeholder='Current Stock'
            onChangeText={inputVal => setForm(prev => ({...prev, stockQuantity: inputVal}))}
            name='name'
            containerStyle={css` padding: 10px 20px;`}
        />
        <Input
            placeholder='Created By'
            onChangeText={val => handleChange('createdBy', val)}
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
}), dispatch => ({
  dispatch,
}))(AddProduct);
