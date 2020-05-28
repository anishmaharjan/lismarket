import React, {useState} from 'react';
import {css} from '@emotion/native';
import {Image, TouchableOpacity, View} from 'react-native';
import {Picker, Text, Toast} from 'native-base';

import {useNavigation} from '@react-navigation/native';
import * as tm from '../theme.style';
import {defaultQty} from '../../consts';
import {monefy} from '../../util';
import {addToCart} from '../../redux/actions/cart';
import {connect} from 'react-redux';
import gss from '../variables.styles';

const EachItem = props => {
  const {product, dispatch, addToCart} = props;

  const navigation = useNavigation();

  const [quantity, setQuantity] = useState(1);

  return (
    <View
      style={css`
        padding: 10px 20px;
        margin-bottom: 10px;
        flex-direction: row;
        justify-content: space-between;
        min-height: 40px;
      `}>
      <TouchableOpacity
        style={css`
          ${tm.flexRow}
        `}
        onPress={() =>
          navigation.navigate('ProductDetailScreen', {
            product,
            quantity,
            setQuantity,
          })
        }>
        <Image
          source={{
            uri:
              product.image ||
              'https://localfoodconnect.org.au/wp-content/uploads/2015/09/tomato.png',
          }}
          style={css`
            height: 50px;
            width: 50px;
            margin: 0 10px;
          `}
        />
        <View
          style={css`
            margin-left: 20px;
          `}>
          <Text
            style={css`
              font-size: 20px;
              padding-bottom: 15px;
            `}>
            {product.name}
          </Text>

          <Text
            style={css`
              font-size: 22px;
              color: black;
            `}>
            {monefy(product.price)}{' '}
          </Text>

          <View
            style={css`
              flex-direction: row;
              align-items: center;
            `}>
            <Text>Qty: </Text>
            <Picker
              note
              iosHeader="Select quantity"
              mode="dropdown"
              style={css`
                width: 70px;
                background: #eee;
              `}
              textStyle={css`
                color: black;
              `}
              itemTextStyle={{fontSize: 18}}
              selectedValue={quantity}
              onValueChange={val => setQuantity(val)}>
              {defaultQty.map((v, i) => (
                <Picker.Item key={i} label={v} value={v} />
              ))}
            </Picker>
          </View>
        </View>
      </TouchableOpacity>
      <View
        style={css`
          flex-direction: row;
        `}>
        <TouchableOpacity
          style={css`
            ${tm.btn}
          `}
          onPress={() => {
            Toast.show({
              text: 'Added to cart!',
              buttonText: 'Okay',
              duration: 3000,
            });
            dispatch(addToCart({...product, quantity: quantity}));
          }}>
          <Text
            style={css`
              ${tm.btnText}
            `}>
            Add to cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default connect(
  state => ({}),
  dispatch => ({
    dispatch,
    addToCart,
  }),
)(EachItem);
