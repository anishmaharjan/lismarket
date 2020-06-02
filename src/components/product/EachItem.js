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

  let quantityList = [];
  for (let i = 1; i <= product.stockQuantity; i++) {
    quantityList = [...quantityList, i];
  }

  return (
    <View
      style={css`
        padding: 10px 20px;
        margin-bottom: 10px;
        flex-direction: row;
        justify-content: space-between;
        min-height: 40px;
        background: white;
        box-shadow: 1px 5px 5px ${gss.grey2};
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
              ${tm.p}
            `}>
            {product.name}
            {quantityList.length === 0 && (
              <Text
                style={css`
                  color: red;
                  font-weight: 900;
                `}>
                {' '}
                !
              </Text>
            )}
          </Text>

          <Text
            style={css`
              font-size: 22px;
              ${tm.p}
            `}>
            {monefy(product.price)}
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
              {quantityList.map((v, i) => (
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
        {quantityList.length === 0 ? (
          <View
            style={css`
              border-color: grey;
              border-width: 1px;
              height: 50px;
              padding: 10px;
              border-radius: 9px;
            `}>
            <Text
              style={css`
                color: grey;
                font-size: 14px;
              `}>
              Item out of stock
            </Text>
          </View>
        ) : (
          <TouchableOpacity
            style={css`
              ${tm.btn}
            `}
            onPress={() => {
              Toast.show({
                position: 'top',
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
        )}
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
