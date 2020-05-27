import React, {useEffect, useState} from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import {Button, Image} from 'react-native-elements';
import {Container, Content, Picker} from 'native-base';
import {css} from '@emotion/native';
import {connect} from 'react-redux';
import * as tm from '../theme.style';
import {defaultQty, failSafeImage} from '../../consts';
import {monefy, calculateTotal} from '../../util';
import gss from '../variables.styles';
import CartItem from './CartItem';
import {useNavigation} from '@react-navigation/native';
import CartSummary from './CartSummary';

const Cart = props => {
  const {title, cart} = props;
  const navigation = useNavigation();

  return (
      <Container>
        <ScrollView>
          <View style={css`${tm.paddingWalls}`}>
            {cart && cart.map(
                (item, key) => <CartItem key={'cartItems' + key} index={key}
                                         item={item}/>)}
          </View>
          {cart.length === 0 && <View style={css`${tm.paddingWalls}`}>
            <Text>No items in cart, browse items in the shop.</Text>
            <Button title={'Go back'} type='outline'
                    onPress={navigation.goBack}/>
          </View>}
          {cart.length !== 0 &&
          <CartSummary/>
          }

        </ScrollView>

        {cart.length !== 0 &&
        <View style={css`
          position: absolute;
          bottom: 0;
          width:100%;
          align-items: center;
          margin-bottom: 25px;
          border-top-width: 1px; 
          border-top-color: ${gss.grey2};
          padding: 10px 0;
          `}>
          <TouchableOpacity style={css`
          ${tm.btnOutline}
           padding: 0 60px;`}>
            <Text style={css`${tm.btnText} color: #FC8369;`}
                  onPress={() => navigation.navigate('CheckoutScreen')}>Proceed
              to
              Checkout</Text>
          </TouchableOpacity>
        </View>
        }

      </Container>
  );
};

export default connect(state => ({
  cart: state.cart.cartItems,
}))(Cart);
