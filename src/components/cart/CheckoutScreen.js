import React, {useState} from 'react';

import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Container, Spinner} from 'native-base';
import {css} from '@emotion/native';
import * as tm from '../theme.style';
import CartSummary from './CartSummary';
import {Input} from 'react-native-elements';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import {createOrderApi} from '../../redux/actions/order2';
import uuid from 'react-native-uuid';
import {clearCart} from '../../redux/actions/cart';

import {calculateTotal, getRandomInt} from '../../util';
import {useNavigation} from '@react-navigation/native';

const CheckoutScreen = props => {
  const {
    processingPayment,
    successPayment,
    dispatch,
    createOrder,
    authUser,
    cart,
    cartTotal,
  } = props;

  const navigation = useNavigation();

  const [paymentOption, setPaymentOption] = useState('paypal');
  const [order, setOrder] = useState({
    invoiceNumber:
      'INV-' +
      authUser.sub.substring(0, 3).toUpperCase() +
      getRandomInt(10000, 99999),
    paymentType: paymentOption,
    sentPackaging: false,
    collectionReady: false,
    orderUsersId: authUser.sub,
  });

  const handleChange = (name, val) => {
    setOrder(prev => ({...prev, [name]: val}));
  };

  const submitPayment = () => {
    dispatch(
      createOrder(order, cart, orderSummary => {
        //clear cart
        navigation.navigate('PaymentSuccessScreen', {
          amountPaid: calculateTotal(cart),
          invoiceNumber: order.invoiceNumber,
        });
        dispatch(clearCart());
      }),
    );
  };

  return (
    <Container>
      <ScrollView>
        <CartSummary />
        <View
          style={css`
            ${tm.paddingWalls}
          `}>
          <Text>Payment option</Text>
        </View>
        <View
          style={css`
            ${tm.paddingWalls}
          `}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={css`
              padding: 15px;
              background: ${paymentOption === 'paypal' ? '#8ac' : '#ccc'};
              ${tm.flexRow}
              justify-content: space-between;
              margin-bottom: 10px;
            `}
            onPress={() => setPaymentOption('paypal')}>
            <Text
              style={css`
                ${tm.h3}
              `}>
              Paypal
            </Text>
            <View>
              <FontAwesome5Icon
                name={'cc-paypal'}
                style={css`
                  font-size: 20px;
                `}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={css`
              padding: 15px;
              background: ${paymentOption === 'bankCard' ? '#8ac' : '#ccc'};
              ${tm.flexRow}
              justify-content: space-between;
              margin-bottom: 10px;
            `}
            onPress={() => setPaymentOption('bankCard')}>
            <Text
              style={css`
                ${tm.h3}
              `}>
              Bank Cards
            </Text>
            <View>
              <FontAwesome5Icon
                name={'credit-card'}
                style={css`
                  font-size: 20px;
                `}
              />
            </View>
          </TouchableOpacity>
          {paymentOption === 'bankCard' && (
            <View>
              <View
                style={css`
                  padding: 20px 0;
                `}>
                <Input
                  placeholder="Card Number xxxx-xxxx-xxxx-xxxx"
                  onChangeText={val => handleChange('cardNumber', val)}
                  containerStyle={css``}
                />
              </View>
              <View
                style={css`
                  ${tm.flexRow}
                  justify-content: space-evenly;
                `}>
                <Input
                  placeholder="MM"
                  onChangeText={val => handleChange('month', val)}
                  containerStyle={css`
                    width: 30%;
                  `}
                />
                <Input
                  placeholder="YY"
                  onChangeText={val => handleChange('year', val)}
                  containerStyle={css`
                    width: 30%;
                  `}
                />
                <Input
                  placeholder="CVV"
                  onChangeText={val => handleChange('cvv', val)}
                  containerStyle={css`
                    width: 30%;
                  `}
                />
              </View>
            </View>
          )}
        </View>
      </ScrollView>
      <View
        style={css`
          padding: 20px;
          margin-bottom: 10px;
        `}>
        <TouchableOpacity
          activeOpacity={0.4}
          style={css`
            ${tm.btn}
            align-items: center;
            margin-left: 30%;
          `}>
          <Text
            style={css`
              ${tm.btnText}
            `}
            onPress={() => submitPayment()}>
            Pay
          </Text>
        </TouchableOpacity>
      </View>

      {processingPayment && (
        <View>
          <View
            style={css`
              width: 100%;
              height: 100%;
              background: #ccc;
              opacity: 0.7;
              position: absolute;
            `}
          />
          <View
            style={css`
              position: absolute;
              top: 40%;
              left: 40%;
            `}>
            <Spinner color="blue" />
            <Text>Processing...</Text>
          </View>
        </View>
      )}
    </Container>
  );
};

export default connect(
  state => ({
    authUser: state.auth.authUser,
    cart: state.cart.cartItems,
    cartTotal: state.cart.cartTotal,
    processingPayment: state.order.processingPayment,
    successPayment: state.order.successPayment,
  }),
  dispatch => ({
    dispatch,
    createOrder: createOrderApi,
    clearCart,
  }),
)(CheckoutScreen);
