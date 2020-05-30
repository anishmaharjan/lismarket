import React from 'react';

import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Container, Content} from 'native-base';
import {css} from '@emotion/native';
import * as tm from '../theme.style';
import gss from '../variables.styles';
import {calculateTotal, monefy} from '../../util';
import {connect} from 'react-redux';

const CartSummary = props => {
  const {cart} = props;
  return (
    <View
      style={css`
        background: ${gss.grey4};
      `}>
      <View
        style={css`
          ${tm.paddingWalls}
        `}>
        <Text
          style={css`
            padding: 10px;
            color: ${gss.text};
          `}>
          Order summary ({cart.length} item/s)
        </Text>
      </View>
      <View
        style={css`
        ${tm.borderBottom} 
        ${tm.paddingWalls} 
        ${tm.flexRow} 
        justify-content:space-between;
        `}>
        <View>
          <Text
            style={css`
              ${tm.h1}
            `}>
            Cart Total
          </Text>
        </View>
        <View>
          <Text
            style={css`
              ${tm.h1}
            `}>
            {monefy(calculateTotal(cart))}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default connect(state => ({
  cart: state.cart.cartItems,
}))(CartSummary);
