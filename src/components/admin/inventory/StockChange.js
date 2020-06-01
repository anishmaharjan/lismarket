import React, {useState,useEffect} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {css} from '@emotion/native';
import {Button, Input} from 'react-native-elements';
import {connect} from 'react-redux';
import {editProduct,listAllProducts} from '../../../redux/actions/product';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const StockChange = props => {
  const {navigation, authUser} = props;
  const {dispatch, addProduct, updatingProductSuccess} = props;
  const { product } = props.route.params;
  const [form, setForm] = useState({
    id: product.id,
  });
  useEffect(()=>{
    if(updatingProductSuccess === true)
    {
      navigation.goBack();
      dispatch(listAllProducts());
    }
  })
  const submitForm = () => {
      dispatch(editProduct(form));
  };

  const handleChange = (name, val) => {
    setForm(prev => ({...prev, [name]: val}));
  };

  return (
      <ScrollView>
       <View style={css`
              flex-direction: row;
              justify-content: space-between;
              padding-bottom: 20px;
              `}><Text></Text>
                <FontAwesome5 name={'times'} style={css`
                  font-size: 24px;
                  padding: 10px;
                  `}
                  onPress={() => navigation.goBack()}
                />
              </View>
        <View style={css`
        flex-direction: row;
        justify-content: space-between;
        border-bottom-width: 1px;
        border-bottom-color: #E64A21;
        border-top-width: 1px;
        border-top-color: #E64A21;
        padding: 5px;
        `}>
        <Text style={css` font-size: 18px; padding: 10px 20px`}>Stock Change</Text>
        </View>
         <View style={css`
                padding-top: 25px;
                border-bottom-width: 1px;
                border-bottom-color: #E64A21;
                `}>
        <Text style={css` font-size: 20px; padding: 10px 20px; color: #4F4F4F` }>{product.name}</Text>
        <Input
            keyboardType="numeric"
            placeholder='Please enter new stock'
            onChangeText={val => handleChange('stockQuantity', val)}
            containerStyle={css` padding: 10px 20px;`}
        />
        </View>
         <View style={css`
                        padding-top: 25px;
                        `}>
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
      </ScrollView>
  );
};

export default connect(state => ({
  authUser: state.auth.authUser,
  updatingProductSuccess: state.product.updatingProductSuccess,
}), dispatch => ({
  dispatch,
  editProduct,
  listAllProducts,
}))(StockChange);
