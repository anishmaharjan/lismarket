import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {css} from '@emotion/native';
import {Button, Input} from 'react-native-elements';

const AddProduct = props => {
  const {navigation} = props;
  const [form, setForm] = useState({});

  return (
      <View>
        <Text style={css` font-size: 18px; padding: 10px 20px`}>Add a category</Text>

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

export default AddProduct;
