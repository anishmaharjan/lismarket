import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {Container} from 'native-base';
import {css} from '@emotion/native';
import {Button, Image, Input} from 'react-native-elements';
import {connect} from 'react-redux';
import {editProduct, listAllProducts} from '../../../redux/actions/product';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {failSafeImage} from '../../../consts';
import * as tm from '../../theme.style';
import gas from '../../variables.styles';

const StockChange = props => {
  const {navigation, authUser} = props;
  const {dispatch, addProduct, updatingProductSuccess} = props;
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

  const handleChange = (name, val) => {
    setForm(prev => ({...prev, [name]: val}));
  };

  return (
    <Container>
      <ScrollView>
        <View
          style={css`
            flex-direction: row;
            justify-content: space-between;
            padding: 5px;
            background: ${gas.text};
          `}>
          <Text
            style={css`
              font-size: 22px;
              font-weight: bold;
              color: white;
              padding: 10px 20px;
            `}>
            Update New Stock
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
        <View
          style={css`
            padding-top: 25px;
          `}>
          <View
            style={css`
              ${tm.flexRow}
            `}>
            <Image
              source={{uri: product.image || failSafeImage}}
              style={css`
                height: 70px;
                width: 70px;
                margin: 0 5px;
              `}
            />
            <Text
              style={css`
                font-size: 24px;
                padding: 10px 20px;
                color: #4f4f4f;
              `}>
              {product.name}
            </Text>
          </View>
          <Input
            keyboardType="numeric"
            placeholder="Please enter new stock"
            onChangeText={val => handleChange('stockQuantity', val)}
            containerStyle={css`
              padding: 10px 20px;
            `}
          />
        </View>
        <View
          style={css`
            padding-top: 25px;
          `}>
          <Button
            onPress={submitForm}
            title="Submit"
            style={css`
              padding: 10px 20px;
            `}
            buttonStyle={{
              backgroundColor: gas.primary,
            }}
          />

          <Button
            onPress={() => navigation.goBack()}
            title="Cancel"
            type="outline"
            style={css`
              padding: 10px 20px;
            `}
            titleStyle={css`
              color: ${gas.primary};
            `}
            buttonStyle={{
              borderColor: gas.primary,
            }}
          />
        </View>
      </ScrollView>
    </Container>
  );
};

export default connect(
  state => ({
    authUser: state.auth.authUser,
    updatingProductSuccess: state.product.updatingProductSuccess,
  }),
  dispatch => ({
    dispatch,
    editProduct,
    listAllProducts,
  }),
)(StockChange);
