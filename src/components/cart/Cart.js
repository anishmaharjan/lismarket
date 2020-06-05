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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Cart = props => {
  const {title, cart} = props;
  const navigation = useNavigation();

  const [checkoutError, setCheckoutError] = useState(false);
  useEffect(() => {
    cart.map(item => {
      if (item.stockQuantity < item.quantity) {
        setCheckoutError(true);
      }
    });
  }, [cart]);

  return (
    <Container>
      <View
        style={css`
          height: 75%;
        `}>
        <ScrollView>
          <View
            style={css`
              ${tm.paddingWalls}
            `}>
            {cart &&
              cart.map((item, key) => (
                <CartItem
                  key={'cartItems' + key}
                  index={key}
                  item={item}
                  setCheckoutError={setCheckoutError}
                />
              ))}
          </View>
          {cart.length === 0 && (
            <View
              style={css`
                ${tm.paddingWalls}
              `}>
              <Text>No items in cart, browse items in the shop.</Text>
              <Button
                title={'Go back'}
                type="outline"
                onPress={navigation.goBack}
              />
            </View>
          )}
        </ScrollView>
      </View>
      {cart.length !== 0 && <CartSummary />}
      {cart.length !== 0 && (
        <View
          style={css`
            position: absolute;
            bottom: 0;
            width: 100%;
            align-items: center;
            margin-bottom: 25px;
            border-top-width: 1px;
            border-top-color: ${gss.grey2};
            padding: 10px 0;
            background: white;
          `}>
          {checkoutError ? (
            <Text
              style={css`
                color: red;
              `}>
              Please update Cart items to checkout.
            </Text>
          ) : (
            <TouchableOpacity
              style={css`
                ${tm.btnOutline}
                padding: 0 60px;
              `}>
              <Text
                style={css`
                  ${tm.btnText} color: #FC8369;
                `}
                onPress={() => navigation.navigate('CheckoutScreen')}>
                Proceed to Checkout
                <FontAwesome5
                  name={'arrow-circle-right'}
                  style={css`
                    font-size: 20px;
                    padding: 10px;
                  `}
                />
              </Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </Container>
  );
};

export default connect(state => ({
  cart: state.cart.cartItems,
}))(Cart);
