import React, {useState} from 'react';
import {css} from '@emotion/native';
import * as tm from '../theme.style';
import {defaultQty, failSafeImage} from '../../consts';
import {monefy} from '../../util';
import gss from '../variables.styles';
import {Picker} from 'native-base';
import {Text, TouchableOpacity, View, Platform} from 'react-native';
import {Image} from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {updateCartQuantity, cartRemoveItem} from '../../redux/actions/cart';
import {connect} from 'react-redux';

const CartItem = props => {
  const {index, item, dispatch, updateCartQuantity, cartRemoveItem} = props;

  const setQuantity = quantity => {
    dispatch(updateCartQuantity({index, quantity}));
  };

  return (
    <View
      style={css`
        ${tm.flexRow} ${tm.borderBottom}
      `}>
      <TouchableOpacity>
        <Image
          source={{uri: item.image || failSafeImage}}
          style={css`
            width: 100px;
            height: 100px;
          `}
        />
      </TouchableOpacity>
      <View
        style={css`
          margin: 0 10px;
          flex: 1;
          ${tm.flexRow} justify-content: space-between;
        `}>
        <View>
          <Text
            style={css`
              ${tm.h2}
            `}>
            {item.name}
          </Text>
          <Text
            style={css`
              ${tm.h3};
              font-family: ${Platform.OS === 'ios' ? 'Roboto' : 'Roboto.ttf'};
            `}>
            {item.description}
          </Text>
          <Text
            style={css`
              ${tm.h3}
            `}>
            {monefy(item.price)}
          </Text>
          <TouchableOpacity
            style={css`
              ${tm.flexRow} padding: 20px 10px;
              justify-content: flex-end;
            `}
            onPress={() => dispatch(cartRemoveItem(index))}>
            <FontAwesome5
              name={'trash'}
              style={css`
                font-size: 16px;
                padding: 3px 5px;
                color: ${gss.primary};
              `}
            />
            <Text
              style={css`
                ${tm.h3}font-family: ${Platform.OS === 'ios'
                  ? 'Roboto'
                  : 'Roboto.ttf'};
                color: ${gss.text};
              `}>
              Remove item
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={css`
              ${tm.h2} margin-bottom: 20px;
            `}>
            {monefy(item.price * item.quantity)}
          </Text>
          <Text>Qty:</Text>
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
            selectedValue={item.quantity}
            onValueChange={val => setQuantity(val)}>
            {defaultQty.map((v, i) => (
              <Picker.Item key={i} label={v} value={v} />
            ))}
          </Picker>
        </View>
      </View>
    </View>
  );
};

export default connect(
  null,
  dispatch => ({
    dispatch,
    cartRemoveItem,
    updateCartQuantity,
  }),
)(CartItem);
